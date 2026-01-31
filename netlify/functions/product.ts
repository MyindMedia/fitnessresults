import type { Handler } from '@netlify/functions'

const PRINTFUL_API_TOKEN = process.env.VITE_PRINTFUL_API_TOKEN

export const handler: Handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json',
    }

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        }
    }

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        }
    }

    const productId = event.path.split('/').pop()

    if (!productId) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Product ID is required' }),
        }
    }

    try {
        const response = await fetch(`https://api.printful.com/store/products/${productId}`, {
            headers: {
                'Authorization': `Bearer ${PRINTFUL_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Printful API error: ${response.status}`)
        }

        const data = await response.json()

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data),
        }
    } catch (error) {
        console.error('Error fetching product:', error)
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to fetch product',
                message: error instanceof Error ? error.message : 'Unknown error'
            }),
        }
    }
}
