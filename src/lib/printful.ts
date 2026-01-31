import type {
    PrintfulProduct,
    PrintfulVariant,
    PrintfulSyncProduct,
    PrintfulApiResponse,
    PrintfulOrderData,
} from '../types/printful';

const PRINTFUL_API_URL = 'https://api.printful.com';
const API_TOKEN = import.meta.env.VITE_PRINTFUL_API_TOKEN;

class PrintfulAPI {
    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const url = `${PRINTFUL_API_URL}${endpoint}`;

        const response = await fetch(url, {
            ...options,
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(error.error || `Printful API error: ${response.status}`);
        }

        const data: PrintfulApiResponse<T> = await response.json();
        return data.result;
    }

    /**
     * Get all sync products from the store
     */
    async getProducts(): Promise<PrintfulProduct[]> {
        try {
            return await this.request<PrintfulProduct[]>('/store/products');
        } catch (error) {
            console.error('Error fetching Printful products:', error);
            throw error;
        }
    }

    /**
     * Get a single sync product with all variants
     */
    async getProduct(productId: string | number): Promise<PrintfulSyncProduct> {
        try {
            return await this.request<PrintfulSyncProduct>(`/store/products/${productId}`);
        } catch (error) {
            console.error(`Error fetching Printful product ${productId}:`, error);
            throw error;
        }
    }

    /**
     * Get a specific variant
     */
    async getVariant(variantId: string | number): Promise<PrintfulVariant> {
        try {
            return await this.request<PrintfulVariant>(`/store/variants/${variantId}`);
        } catch (error) {
            console.error(`Error fetching Printful variant ${variantId}:`, error);
            throw error;
        }
    }

    /**
     * Create an order (after payment is confirmed)
     */
    async createOrder(orderData: PrintfulOrderData): Promise<any> {
        try {
            return await this.request('/orders', {
                method: 'POST',
                body: JSON.stringify(orderData),
            });
        } catch (error) {
            console.error('Error creating Printful order:', error);
            throw error;
        }
    }

    /**
     * Calculate shipping rates for an order
     */
    async calculateShipping(orderData: Partial<PrintfulOrderData>): Promise<any> {
        try {
            return await this.request('/shipping/rates', {
                method: 'POST',
                body: JSON.stringify(orderData),
            });
        } catch (error) {
            console.error('Error calculating shipping:', error);
            throw error;
        }
    }
}

export const printfulAPI = new PrintfulAPI();
