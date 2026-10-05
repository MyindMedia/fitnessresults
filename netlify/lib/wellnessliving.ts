import { createHash } from 'node:crypto'

export interface WlLead {
    name: string
    email: string
    phone: string
}
export type WlResult = 'skipped' | 'created' | 'failed'

// Port of the WellnessLiving PHP SDK (github.com/wellnessliving/wl-sdk, request signing in
// WlModelRequest.php, request building in WlModelAbstract.php). Creates a lead through
// Wl/Lead/LeadModel.json: GET the field list, then POST the filled fields.
// Env: WL_API_URL (https://staging.wellnessliving.com/ or https://us.wellnessliving.com/),
// WL_AUTH_ID (application ID), WL_AUTH_CODE (secret code), WL_BUSINESS_ID.
// STATUS: written from the SDK source, not yet run against a real WellnessLiving server.
// Verify on staging with the first credentials; failures fall back to the staff email.

const SDK_VERSION = '20250127.385637'
const PHP_VERSION_ID = '80300'
const AGENT = 'WellnessLiving SDK/' + SDK_VERSION + ' (PHP 8.3.0)'
const FIELD = { NAME_LAST: 1, NAME_FIRST: 2, LOGIN: 3, PHONE_CELL: 4 }

const sha = (value: string) => createHash('sha256').update(value).digest('hex')

type Vars = Record<string, string>

function signature(p: {
    time: string; code: string; host: string; id: string; method: string; resource: string
    persistent: string; transient: string; vars: Vars; agent: string
}) {
    const parts: string[] = ['Core\\Request\\Api::20150518', p.time, p.code, p.host, p.id,
        p.method, p.resource, p.persistent, p.transient]
    const lowered: Vars = {}
    for (const key of Object.keys(p.vars)) lowered[key.toLowerCase()] = p.vars[key]
    for (const key of Object.keys(lowered).sort()) parts.push(key + '=' + lowered[key])
    parts.push('user-agent:' + p.agent.trim())
    const check = parts.map(part => sha(part).slice(0, 1)).join('')
    return [sha(parts.join('\n')), '1', check, PHP_VERSION_ID, SDK_VERSION].join('.')
}

const pad = (n: number) => String(n).padStart(2, '0')
const mysqlGmt = (d: Date) => d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) +
    ' ' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds())

export async function createWellnessLivingLead(lead: WlLead): Promise<WlResult> {
    const { WL_API_URL, WL_AUTH_ID, WL_AUTH_CODE, WL_BUSINESS_ID } = process.env
    if (!WL_API_URL || !WL_AUTH_ID || !WL_AUTH_CODE || !WL_BUSINESS_ID) return 'skipped'

    const base = WL_API_URL.endsWith('/') ? WL_API_URL : WL_API_URL + '/'
    const host = new URL(base).host
    const staging = /staging|demo/.test(host)
    const names = { persistent: staging ? 'sp' : 'p', transient: staging ? 'st' : 't' }
    const resource = 'Wl/Lead/LeadModel.json'
    const cookies: Record<string, string> = {}

    async function call(method: 'GET' | 'POST', query: Vars, body: Vars) {
        const vars = { ...query, ...body }
        const now = new Date()
        const sig = signature({
            time: mysqlGmt(now), code: WL_AUTH_CODE!, host, id: WL_AUTH_ID!, method, resource,
            persistent: cookies[names.persistent] ?? '', transient: cookies[names.transient] ?? '',
            vars, agent: AGENT,
        })
        const headers: Record<string, string> = {
            'User-Agent': AGENT, Date: now.toUTCString(),
            Authorization: '20150518,' + WL_AUTH_ID + ',user-agent,' + sig,
        }
        const cookie = Object.entries(cookies).map(([k, v]) => k + '=' + v).join(';')
        if (cookie) headers.Cookie = cookie
        let payload: string | undefined
        if (method === 'POST') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded'
            payload = new URLSearchParams(body).toString()
        }
        const res = await fetch(base + resource + '?' + new URLSearchParams(query).toString(), {
            method, headers, body: payload, signal: AbortSignal.timeout(8000),
        })
        for (const line of res.headers.getSetCookie()) {
            const m = /^([a-zA-Z]+)=([a-zA-Z0-9]+)/.exec(line)
            if (m) cookies[m[1]] = m[2]
        }
        const json = await res.json().catch(() => null) as Record<string, any> | null
        if (!json || json.status !== 'ok') {
            console.error('WellnessLiving rejected request', { method, http: res.status, status: json?.status, code: json?.code })
            return null
        }
        return json
    }

    try {
        const query = { k_business: WL_BUSINESS_ID, k_skin: '0' }
        const form = await call('GET', query, {})
        if (!form || !Array.isArray(form.a_field_list)) return 'failed'
        const space = lead.name.indexOf(' ')
        const values: Record<number, string> = {
            [FIELD.NAME_FIRST]: space > 0 ? lead.name.slice(0, space) : lead.name,
            [FIELD.NAME_LAST]: space > 0 ? lead.name.slice(space + 1).trim() : '-',
            [FIELD.LOGIN]: lead.email, [FIELD.PHONE_CELL]: lead.phone,
        }
        const body: Vars = { s_captcha: '' }
        for (const field of form.a_field_list) {
            const value = values[Number(field.id_field_general)]
            if (value && field.k_field) body['a_field_data[' + field.k_field + ']'] = value
        }
        if (Object.keys(body).length < 2) return 'failed'
        const created = await call('POST', query, body)
        return created?.uid ? 'created' : 'failed'
    } catch {
        console.error('WellnessLiving request failed')
        return 'failed'
    }
}
