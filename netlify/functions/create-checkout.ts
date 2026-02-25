import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeSecretKey, {
    // @ts-ignore - Stripe version compatibility
    apiVersion: '2023-10-16',
});

interface CheckoutItem {
    name: string;
    description?: string;
    images?: string[];
    amount: number; // in dollars
    quantity: number;
}

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        if (!stripeSecretKey) {
            throw new Error('STRIPE_SECRET_KEY is not set in the environment variables.');
        }

        const { items } = JSON.parse(event.body || '{}') as { items: CheckoutItem[] };

        if (!items || items.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'No items provided' }),
            };
        }

        // We use Math.round to avoid floating point precision issues when converting to cents
        const lineItems = items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    images: item.images?.length ? item.images : undefined,
                    description: item.description,
                },
                unit_amount: Math.round(item.amount * 100),
            },
            quantity: item.quantity,
        }));

        const protocol = event.headers['x-forwarded-proto'] || 'http';
        const host = event.headers.host;
        const fallbackUrl = `${protocol}://${host}`;
        const siteUrl = process.env.URL || fallbackUrl;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            shipping_address_collection: {
                allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ', 'IE'],
            },
            line_items: lineItems,
            mode: 'payment',
            success_url: `${siteUrl}/success`,
            cancel_url: `${siteUrl}/store`,
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: session.id, url: session.url }),
        };
    } catch (error: any) {
        console.error('Error creating checkout session:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
