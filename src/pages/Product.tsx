import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { printfulAPI } from '../lib/printful'
import { useCart } from '../context/CartContext'
import type { PrintfulProductResponse } from '../types/printful'
import './Product.css'

const Product = () => {
    const { productId } = useParams()
    const [productData, setProductData] = useState<PrintfulProductResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState('')
    const [addedToCart, setAddedToCart] = useState(false)
    const { addToCart } = useCart()

    useEffect(() => {
        if (!productId) return

        const fetchProduct = async () => {
            try {
                setLoading(true)
                const data = await printfulAPI.getProduct(productId)
                setProductData(data)
                setError(null)
            } catch (err) {
                console.error('Error fetching product:', err)
                setError('Failed to load product details.')
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [productId])

    const handleAddToCart = () => {
        if (!productData) return

        let selectedVariant = productData.sync_variants[0]

        if (selectedSize) {
            const matchingVariant = productData.sync_variants.find(v => {
                const parts = v.name.split(' / ')
                if (parts.length >= 3) return parts[2] === selectedSize
                if (parts.length === 2 && !parts[1].includes('Color')) return parts[1] === selectedSize
                return false
            })
            if (matchingVariant) {
                selectedVariant = matchingVariant
            }
        }

        addToCart(productData.sync_product, selectedVariant, quantity)
        setAddedToCart(true)
        setTimeout(() => setAddedToCart(false), 3000)
    }

    if (loading) {
        return (
            <div className="product-page">
                <section className="section product-section">
                    <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                        <div className="spinner"></div>
                        <p>Loading product details...</p>
                    </div>
                </section>
            </div>
        )
    }

    if (error || !productData) {
        return (
            <div className="product-page">
                <section className="section product-section">
                    <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                        <h3>{error || 'Product not found'}</h3>
                        <Link to="/store" className="btn btn-secondary" style={{ marginTop: '20px' }}>
                            Back to Store
                        </Link>
                    </div>
                </section>
            </div>
        )
    }

    // Extract sizes from variants (assuming format like "Name / Color / Size")
    const sizeSet = new Set<string>()
    productData.sync_variants.forEach(variant => {
        const parts = variant.name.split(' / ')
        if (parts.length >= 3) {
            sizeSet.add(parts[2])
        } else if (parts.length === 2 && !parts[1].includes('Color')) {
            // Just a guess if there's only 2 parts
            sizeSet.add(parts[1])
        }
    })
    const sizes = Array.from(sizeSet)
    if (sizes.length > 0 && !selectedSize) {
        setSelectedSize(sizes[0])
    }

    const price = productData.sync_variants.length > 0
        ? parseFloat(productData.sync_variants[0].retail_price)
        : 0

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
                                <img
                                    src={productData.sync_product.thumbnail_url}
                                    alt={productData.sync_product.name}
                                />
                            </div>
                        </div>

                        <div className="product-details">
                            <h1 className="product-title">{productData.sync_product.name}</h1>
                            <div className="product-price">${price.toFixed(2)}</div>

                            <div className="stock-status in-stock">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                In Stock
                            </div>

                            <div className="product-description-section">
                                <h3 className="product-description-heading">Description</h3>
                                <p className="product-description">
                                    {productData.sync_product.description
                                        ? productData.sync_product.description
                                        : 'No description available for this product.'}
                                </p>
                            </div>

                            <div className="product-options">
                                {sizes.length > 0 && (
                                    <div className="option-group">
                                        <label className="option-label">Size</label>
                                        <div className="size-selector">
                                            {sizes.map((size) => (
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
                                )}

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
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product
