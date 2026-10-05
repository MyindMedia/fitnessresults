export interface WlLead {
    name: string
    email: string
    phone: string
}
export type WlResult = 'skipped' | 'created' | 'failed'

// Creates a lead in WellnessLiving (LeadModel: GET field list, then POST a_field_data).
// Staging/production credentials come from WellnessLiving after API approval.
// Env: WL_API_URL, WL_AUTH_ID, WL_AUTH_CODE, WL_BUSINESS_ID.
// The request signature (hash of auth ID + code) is NOT implemented yet: port it from
// github.com/wellnessliving/wl-sdk once staging credentials exist, then test against staging.
export async function createWellnessLivingLead(_lead: WlLead): Promise<WlResult> {
    const { WL_API_URL, WL_AUTH_ID, WL_AUTH_CODE, WL_BUSINESS_ID } = process.env
    if (!WL_API_URL || !WL_AUTH_ID || !WL_AUTH_CODE || !WL_BUSINESS_ID) return 'skipped'
    console.error('WellnessLiving credentials set but request signing is not implemented yet')
    return 'failed'
}
