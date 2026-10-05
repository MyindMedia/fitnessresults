# Contact form notifications

Contact notifications are addressed to fitnessresultsactive@gmail.com. The visitor's email is set as Reply-To. The email includes branded HTML plus a plain-text alternative.

## Production configuration

1. Verify a sending domain in Resend (for example, fitnessresults.com or a dedicated mail subdomain). Use the DNS records shown in your Resend account.
2. Create a sending API key restricted to the verified domain.
3. Add these variables to the Netlify project serving fitnessresults.netlify.app, for Production with Functions scope (or all scopes):
   - RESEND_API_KEY: the Resend sending API key.
   - CONTACT_EMAIL_FROM: Fitness Results <contact@YOUR_VERIFIED_DOMAIN>
4. Redeploy after setting the variables.
5. Submit a clearly labeled test inquiry, check the provider delivery event and the Gmail inbox, and verify that Reply reaches the visitor.

Do not use the Gmail address as the sender; it is the recipient. Do not commit keys. Resend installation in ChatGPT does not configure the website's environment.

The contact form uses /.netlify/functions/contact. It reports success only when the email provider accepts the message. Provider acceptance is not proof of inbox delivery. Requests preserve an idempotency key on retries. The consultation form continues to use its existing Netlify Forms flow; this integration handles the Contact page.
