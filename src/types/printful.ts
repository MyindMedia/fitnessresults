// Printful API Types

export interface PrintfulProduct {
    id: number;
    external_id: string;
    name: string;
    variants: number;
    synced: number;
    thumbnail_url: string;
    is_ignored: boolean;
}

export interface PrintfulVariant {
    id: number;
    external_id: string;
    sync_product_id: number;
    name: string;
    synced: boolean;
    variant_id: number;
    retail_price: string;
    currency: string;
    is_ignored: boolean;
    sku: string | null;
    product: {
        variant_id: number;
        product_id: number;
        image: string;
        name: string;
    };
    files: Array<{
        id: number;
        type: string;
        hash: string;
        url: string;
        filename: string;
        mime_type: string;
        size: number;
        width: number;
        height: number;
        dpi: number | null;
        status: string;
        created: number;
        thumbnail_url: string;
        preview_url: string;
        visible: boolean;
    }>;
    options: Array<{
        id: string;
        value: string | number;
    }>;
}

export interface PrintfulSyncProduct {
    id: number;
    external_id: string;
    name: string;
    variants: PrintfulVariant[];
    synced: number;
    thumbnail_url: string;
    is_ignored: boolean;
}

export interface PrintfulApiResponse<T> {
    code: number;
    result: T;
    extra?: any;
    paging?: {
        total: number;
        offset: number;
        limit: number;
    };
}

export interface PrintfulOrderRecipient {
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state_code: string;
    country_code: string;
    zip: string;
    phone?: string;
    email: string;
}

export interface PrintfulOrderItem {
    sync_variant_id: number;
    quantity: number;
    retail_price?: string;
}

export interface PrintfulOrderData {
    recipient: PrintfulOrderRecipient;
    items: PrintfulOrderItem[];
    retail_costs?: {
        currency: string;
        subtotal: string;
        discount?: string;
        shipping: string;
        tax?: string;
    };
}

export interface CartItem {
    id: string;
    product: PrintfulProduct;
    variant: PrintfulVariant;
    quantity: number;
}
