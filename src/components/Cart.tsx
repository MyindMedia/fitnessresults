import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { items, total, removeFromCart, updateQuantity, closeCart, isCartOpen } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            const checkoutItems = items.map(item => ({
                name: `${item.product.name} - ${item.variant.name}`,
                description: item.variant.options?.map(opt => opt.value).join(' / ') || '',
                images: [item.variant.files?.find(f => f.type === 'preview')?.preview_url || item.variant.files?.[0]?.preview_url || item.product.thumbnail_url],
                amount: parseFloat(item.variant.retail_price),
                quantity: item.quantity,
            }));

            const response = await fetch('/.netlify/functions/create-checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: checkoutItems }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Checkout error:', data.error);
                alert('An error occurred during checkout. Please try again.');
            }
        } catch (error) {
            console.error('Error initiating checkout:', error);
            alert('An error occurred during checkout. Please try again.');
        } finally {
            setIsCheckingOut(false);
        }
    };

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={closeCart}></div>
            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="cart-close" onClick={closeCart} aria-label="Close cart">
                        ✕
                    </button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="cart-item">
                                <img
                                    src={item.variant.files?.find(f => f.type === 'preview')?.preview_url || item.variant.files?.[0]?.preview_url || item.product.thumbnail_url}
                                    alt={item.variant.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h4>{item.product.name}</h4>
                                    <p className="cart-item-variant">
                                        {item.variant.options?.map(opt => opt.value).join(' / ')}
                                    </p>
                                    <p className="cart-item-price">
                                        ${parseFloat(item.variant.retail_price).toFixed(2)}
                                    </p>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            −
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                        aria-label="Remove item"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Subtotal:</span>
                            <span className="total-amount">${total.toFixed(2)}</span>
                        </div>
                        <button
                            className="btn btn-primary btn-full checkout-btn"
                            onClick={handleCheckout}
                            disabled={isCheckingOut || items.length === 0}
                        >
                            {isCheckingOut ? 'Loading...' : 'Proceed to Checkout'}
                        </button>
                        <button className="btn btn-secondary btn-full" onClick={closeCart}>
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
