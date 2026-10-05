import type { Handler } from '@netlify/functions'
import { renderConsultationEmail, renderConsultationText } from '../lib/contact-email'
import { createWellnessLivingLead } from '../lib/wellnessliving'

const recipient = 'fitnessresultsactive@gmail.com'
const response = (statusCode: number, body: Record<string, unknown>) => ({
    statusCode, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    body: JSON.stringify(body),
})

export const handler: Handler = async event => {
    if (event.httpMethod !== 'POST') return response(405, { error: 'Method not allowed' })
    if ((event.body || '').length > 20000) return response(413, { error: 'Message is too long' })
    let input: Record<string, unknown>
    try {
        const parsed = JSON.parse(event.body || '{}')
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error()
        input = parsed
    } catch { return response(400, { error: 'Invalid request' }) }
    if (input.website) return response(200, { success: true })
    const read = (key: string) => typeof input[key] === 'string' ? (input[key] as string).trim() : ''
    const data = {
        name: read('name'), email: read('email'), phone: read('phone'),
        date: read('date'), time: read('time'), message: read('message'), subject: 'general',
    }
    const requestId = read('requestId')
    if (!data.name || data.name.length > 120 || /[\r\n]/.test(data.name) ||
        !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) || data.email.length > 254 ||
        !data.phone || data.phone.length > 50 ||
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date || '2000-01-01') || data.time.length > 20 ||
        data.message.length > 5000 || !/^[0-9a-f-]{36}$/i.test(requestId)) {
        return response(400, { error: 'Please check your contact details.' })
    }
    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.CONTACT_EMAIL_FROM
    if (!apiKey || !from) return response(503, {
        error: 'Your request could not be sent. Please call (909) 608-1780 or email fitnessresultsactive@gmail.com.',
    })

    let wl: 'skipped' | 'created' | 'failed' = 'failed'
    try { wl = await createWellnessLivingLead({ name: data.name, email: data.email, phone: data.phone }) }
    catch { console.error('WellnessLiving lead call threw') }
    const wellnessLiving = wl === 'created' ? 'Lead created' : wl === 'skipped' ? 'Not connected yet' : 'FAILED: add this person manually'

    try {
        const sent = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json',
                'Idempotency-Key': 'consultation/' + requestId,
            },
            signal: AbortSignal.timeout(8000),
            body: JSON.stringify({
                from, to: [recipient], reply_to: data.email,
                subject: 'Fitness Results | Consultation Request — ' + data.name,
                html: renderConsultationEmail({ ...data, wellnessLiving }),
                text: renderConsultationText({ ...data, wellnessLiving }),
            }),
        })
        const result = await sent.json().catch(() => null)
        if (!sent.ok || !result?.id) {
            console.error('Consultation email rejected', { status: sent.status })
            return response(502, { error: 'We could not send your request. Please call (909) 608-1780.' })
        }
        return response(200, { success: true })
    } catch {
        console.error('Consultation email provider unavailable')
        return response(502, { error: 'We could not send your request. Please call (909) 608-1780.' })
    }
}
