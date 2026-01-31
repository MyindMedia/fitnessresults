import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { printfulAPI } from '../lib/printful'
import type { PrintfulProduct } from '../types/printful'
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState<PrintfulProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const data = await printfulAPI.getProducts()
                setProducts(data)
                setError(null)
            } catch (err) {
                console.error('Error fetching products:', err)
                setError('Failed to load products. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const categories = ['All', 'Apparel', 'Accessories', 'Home & Living']

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === 'All' ||
            product.name.toLowerCase().includes(selectedCategory.toLowerCase())
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="store">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-slide-up">Fitness Store</h1>
                    <p className="page-subtitle animate-slide-up">
                        Premium gear, supplements, and apparel to support your fitness journey
                    </p>
                </div>
            </section>

            <section className="section store-section">
                <div className="container">
                    <div className="store-controls">
                        <div className="search-bar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="category-filters">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {loading && (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading products...</p>
                        </div>
                    )}

                    {error && (
                        <div className="error-state">
                            <p>{error}</p>
                            <button className="btn btn-primary" onClick={() => window.location.reload()}>
                                Try Again
                            </button>
                        </div>
                    )}

                    {!loading && !error && (
                        <div className="products-grid">
                            {filteredProducts.map((product, index) => (
                                <Link
                                    key={product.id}
                                    to={`/store/${product.id}`}
                                    className="product-card card-glass animate-slide-up"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="product-image">
                                        {product.thumbnail_url ? (
                                            <img src={product.thumbnail_url} alt={product.name} />
                                        ) : (
                                            <div className="image-placeholder">
                                                <span className="placeholder-text">{product.name}</span>
                                            </div>
                                        )}
                                        <div className="product-badge">Apparel</div>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">{product.name}</h3>
                                        <div className="product-footer">
                                            <span className="product-price">View Details</span>
                                            <button className="quick-view-btn">
                                                View Details →
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!loading && !error && filteredProducts.length === 0 && (
                        <div className="no-results">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <h3>No products found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="section info-section bg-gradient-radial">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <h3>Member Discounts</h3>
                            <p>Active members get 15% off all store purchases</p>
                        </div>
                        <div className="info-card">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <h3>Local Pickup</h3>
                            <p>Pick up your order at our Upland location</p>
                        </div>
                        <div className="info-card">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <h3>Free Shipping</h3>
                            <p>On orders over $75 within California</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Store
