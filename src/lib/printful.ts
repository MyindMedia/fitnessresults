import type { PrintfulProduct, PrintfulProductResponse } from '../types/printful'

// Use Netlify Functions for API calls to avoid CORS issues
const API_BASE = import.meta.env.DEV
    ? 'http://localhost:8888/.netlify/functions'  // Local development
    : '/.netlify/functions'  // Production

export const printfulAPI = {
    async getProducts(): Promise<PrintfulProduct[]> {
        try {
            const response = await fetch(`${API_BASE}/products`)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            return data.result || []
        } catch (error) {
            console.error('Error fetching products:', error)
            throw error
        }
    },

    async getProduct(id: string): Promise<PrintfulProductResponse> {
        try {
            const response = await fetch(`${API_BASE}/product/${id}`)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            return data.result
        } catch (error) {
            console.error('Error fetching product:', error)
            throw error
        }
    },
}
