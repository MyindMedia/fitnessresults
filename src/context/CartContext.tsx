import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { CartItem, PrintfulSyncProduct, PrintfulVariant } from '../types/printful';

interface CartContextType {
    items: CartItem[];
    itemCount: number;
    total: number;
    addToCart: (product: PrintfulSyncProduct, variant: PrintfulVariant, quantity: number) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'fitness-results-cart';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart from localStorage:', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (product: PrintfulSyncProduct, variant: PrintfulVariant, quantity: number) => {
        const itemId = `${product.id}-${variant.id}`;

        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === itemId);

            if (existingItem) {
                // Update quantity if item already exists
                return prevItems.map(item =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Add new item
                return [...prevItems, { id: itemId, product, variant, quantity }];
            }
        });

        setIsCartOpen(true);
    };

    const removeFromCart = (itemId: string) => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const total = items.reduce((sum, item) => {
        const price = parseFloat(item.variant.retail_price || '0');
        return sum + (price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                itemCount,
                total,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                isCartOpen,
                openCart,
                closeCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
