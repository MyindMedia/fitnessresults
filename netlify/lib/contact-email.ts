export interface ContactMessage {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}
export const contactSubjects: Record<string, string> = {
    general: 'General Inquiry', membership: 'Membership Information',
    training: 'Personal Training', store: 'Store / Products', other: 'Other',
}
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char] || char))

export function renderContactEmail(data: ContactMessage) {
    const name = escapeHtml(data.name)
    const email = escapeHtml(data.email)
    const phone = escapeHtml(data.phone || 'Not provided')
    const topic = escapeHtml(contactSubjects[data.subject] || data.subject)
    const message = escapeHtml(data.message).replace(/\r?\n/g, '<br />')
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Fitness Results Inquiry</title></head>
<body style="margin:0;padding:0;background:#eef2f5;font-family:Arial,Helvetica,sans-serif;color:#172c38">
<div style="display:none;max-height:0;overflow:hidden">New website inquiry from ${name} · ${topic}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f5"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="padding:32px;background:#173d49;border-bottom:4px solid #00ced1">
<img src="https://fitnessresults.netlify.app/images/logo.png" alt="Fitness Results" width="170" style="display:block;width:170px;max-width:100%;height:auto;margin-bottom:20px">
<p style="margin:0 0 10px;color:#bddee5;font-size:11px;font-weight:bold;letter-spacing:2px">WEBSITE CONTACT MESSAGE</p>
<h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:600;line-height:1.25">A new conversation starts here.</h1>
</td></tr>
<tr><td style="padding:32px">
<p style="margin:0 0 24px;color:#536573;font-size:15px;line-height:1.7">Someone has reached out to the Fitness Results team. Their details and message are below.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:0 0 18px"><p style="margin:0 0 6px;font-size:11px;letter-spacing:1px;color:#60717b;font-weight:bold">NAME</p><p style="margin:0;font-size:20px;font-weight:bold;color:#172c38">${name}</p></td></tr>
<tr><td style="padding:0 0 18px"><p style="margin:0 0 6px;font-size:11px;letter-spacing:1px;color:#60717b;font-weight:bold">EMAIL</p><a href="mailto:${email}" style="color:#006b80;font-size:15px;text-decoration:underline;word-break:break-all">${email}</a></td></tr>
<tr><td style="padding:0 0 18px"><p style="margin:0 0 6px;font-size:11px;letter-spacing:1px;color:#60717b;font-weight:bold">PHONE</p><p style="margin:0;font-size:15px;color:#172c38">${phone}</p></td></tr>
<tr><td style="padding:0 0 24px"><p style="margin:0 0 6px;font-size:11px;letter-spacing:1px;color:#60717b;font-weight:bold">INTEREST</p><p style="margin:0;font-size:15px;color:#172c38">${topic}</p></td></tr>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f7f9;border-left:3px solid #006b80"><tr><td style="padding:22px">
<p style="margin:0 0 12px;font-size:11px;letter-spacing:1px;color:#60717b;font-weight:bold">THEIR MESSAGE</p>
<p style="margin:0;color:#172c38;font-size:15px;line-height:1.8;word-break:break-word">${message}</p>
</td></tr></table>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px"><tr><td style="border-radius:8px;background:#173d49"><a href="mailto:${email}" style="display:inline-block;padding:15px 24px;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none">Reply to ${name}</a></td></tr></table>
<p style="margin:16px 0 0;color:#60717b;font-size:12px;line-height:1.6">You can also reply directly to this email to reach the visitor.</p>
</td></tr>
<tr><td style="padding:24px 32px;background:#f8fafb;border-top:1px solid #e3e9ed">
<p style="margin:0 0 8px;color:#173d49;font-size:14px;font-weight:bold">Fitness Results · Safe. Effective. Efficient.</p>
<p style="margin:0;color:#60717b;font-size:12px;line-height:1.7">8920 Vernon Ave., Suite #120 · Montclair, CA 91763<br>(909) 608-1780 · fitnessresultsactive@gmail.com</p>
</td></tr></table></td></tr></table></body></html>`
}
export function renderContactText(data: ContactMessage) {
    return ['FITNESS RESULTS — WEBSITE CONTACT MESSAGE', '', 'Name: ' + data.name,
        'Email: ' + data.email, 'Phone: ' + (data.phone || 'Not provided'),
        'Interest: ' + (contactSubjects[data.subject] || data.subject), '', 'Message:', data.message, '',
        'Reply directly to this email to reach the visitor.', '',
        'Safe. Effective. Efficient.', '8920 Vernon Ave., Suite #120, Montclair, CA 91763'].join('\n')
}
