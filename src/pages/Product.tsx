import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Product.css'

const Product = () => {
    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState('M')
    const [addedToCart, setAddedToCart] = useState(false)

    // Placeholder product data - will be replaced with Shopify API
    const product = {
        id: productId,
        title: 'Fitness Results T-Shirt',
        price: 29.99,
        description: 'Premium quality cotton t-shirt with our signature logo. Perfect for workouts or casual wear. Breathable, moisture-wicking fabric keeps you comfortable all day long.',
        images: ['/images/product-tshirt.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        features: [
            '100% premium cotton',
            'Moisture-wicking technology',
            'Reinforced stitching',
            'Machine washable',
            'Unisex fit',
        ],
        inStock: true,
    }

    const relatedProducts = [
        { id: '2', title: 'Gym Hoodie', price: 54.99 },
        { id: '3', title: 'Training Shorts', price: 39.99 },
        { id: '4', title: 'Sports Cap', price: 24.99 },
    ]

    const handleAddToCart = () => {
        console.log('Added to cart:', { productId, quantity, size: selectedSize })
        setAddedToCart(true)
        setTimeout(() => setAddedToCart(false), 3000)
    }

    return (
        <div className="product-page">
            <section className="section product-section">
                <div className="container">
                    <Link to="/store" className="back-link">
                        ← Back to Store
                    </Link>

                    <div className="product-grid">
                        <div className="product-images">
                            <div className="main-image">
                                <div className="image-placeholder">
                                    <span className="placeholder-text">{product.title}</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-details">
                            <h1 className="product-title">{product.title}</h1>
                            <div className="product-price">${product.price.toFixed(2)}</div>

                            {product.inStock ? (
                                <div className="stock-status in-stock">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    In Stock
                                </div>
                            ) : (
                                <div className="stock-status out-of-stock">Out of Stock</div>
                            )}

                            <p className="product-description">{product.description}</p>

                            <div className="product-options">
                                <div className="option-group">
                                    <label className="option-label">Size</label>
                                    <div className="size-selector">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="option-group">
                                    <label className="option-label">Quantity</label>
                                    <div className="quantity-selector">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            −
                                        </button>
                                        <span className="quantity-value">{quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {addedToCart && (
                                <div className="success-message animate-scale-in">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Added to cart!
                                </div>
                            )}

                            <button
                                className="btn btn-primary btn-full btn-lg"
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                            >
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>

                            <div className="product-features">
                                <h3>Features</h3>
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section related-section bg-gradient-radial">
                <div className="container">
                    <h2 className="section-title">You May Also Like</h2>
                    <div className="related-grid">
                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.id}
                                to={`/store/${relatedProduct.id}`}
                                className="related-card card-glass"
                            >
                                <div className="related-image">
                                    <div className="image-placeholder">
                                        <span className="placeholder-text">{relatedProduct.title}</span>
                                    </div>
                                </div>
                                <h4>{relatedProduct.title}</h4>
                                <div className="related-price">${relatedProduct.price.toFixed(2)}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product
