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

        // Printful's store product API doesn't include a product description.
        // The description lives on the underlying catalog product, referenced by
        // each sync variant's product.product_id. Fetch it and attach it to
        // sync_product so the storefront can show a real Printful description.
        try {
            const catalogProductId = data?.result?.sync_variants?.[0]?.product?.product_id
            if (catalogProductId && data?.result?.sync_product) {
                const catalogResponse = await fetch(`https://api.printful.com/products/${catalogProductId}`, {
                    headers: {
                        'Authorization': `Bearer ${PRINTFUL_API_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                })

                if (catalogResponse.ok) {
                    const catalogData = await catalogResponse.json()
                    const description = catalogData?.result?.product?.description
                    if (description) {
                        data.result.sync_product.description = description
                    }
                }
            }
        } catch (catalogError) {
            // Non-fatal: return the product without a description rather than failing.
            console.error('Error fetching catalog description:', catalogError)
        }

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
