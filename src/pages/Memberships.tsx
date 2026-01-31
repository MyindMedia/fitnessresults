import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Memberships.css'

const Memberships = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

    const pricingTiers = [
        {
            name: 'Basic',
            description: 'Perfect for getting started',
            monthlyPrice: 79,
            annualPrice: 790,
            features: [
                'Access to all equipment',
                '24/7 gym access',
                'Locker room facilities',
                'Free fitness assessment',
                'Mobile app access',
            ],
            popular: false,
        },
        {
            name: 'Premium',
            description: 'Most popular choice',
            monthlyPrice: 149,
            annualPrice: 1490,
            features: [
                'Everything in Basic',
                '4 personal training sessions/month',
                'Unlimited group classes',
                'Nutrition consultation',
                'Priority booking',
                'Guest passes (2/month)',
            ],
            popular: true,
        },
        {
            name: 'Elite',
            description: 'Ultimate fitness experience',
            monthlyPrice: 249,
            annualPrice: 2490,
            features: [
                'Everything in Premium',
                'Unlimited personal training',
                'Custom meal planning',
                'Recovery & massage therapy',
                'Private training area access',
                'Unlimited guest passes',
                'Exclusive member events',
            ],
            popular: false,
        },
    ]

    const getPrice = (tier: typeof pricingTiers[0]) => {
        return billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice
    }

    const getSavings = (tier: typeof pricingTiers[0]) => {
        const monthlyCost = tier.monthlyPrice * 12
        const annualCost = tier.annualPrice
        return monthlyCost - annualCost
    }

    return (
        <div className="memberships">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-slide-up">Memberships & Training</h1>
                    <p className="page-subtitle animate-slide-up">
                        Choose the perfect plan to achieve your fitness goals
                    </p>
                </div>
            </section>

            <section className="section pricing-section">
                <div className="container">
                    <div className="billing-toggle">
                        <button
                            className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                            onClick={() => setBillingCycle('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
                            onClick={() => setBillingCycle('annual')}
                        >
                            Annual
                            <span className="savings-badge">Save up to $1,000</span>
                        </button>
                    </div>

                    <div className="pricing-grid">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={tier.name}
                                className={`pricing-card ${tier.popular ? 'popular' : ''} animate-slide-up`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {tier.popular && <div className="popular-badge">Most Popular</div>}

                                <div className="pricing-header">
                                    <h3>{tier.name}</h3>
                                    <p className="pricing-description">{tier.description}</p>
                                    <div className="price">
                                        <span className="price-amount">${getPrice(tier)}</span>
                                        <span className="price-period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                                    </div>
                                    {billingCycle === 'annual' && (
                                        <div className="savings-text">Save ${getSavings(tier)}/year</div>
                                    )}
                                </div>

                                <ul className="features-list">
                                    {tier.features.map((feature) => (
                                        <li key={feature}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <circle cx="10" cy="10" r="10" fill="url(#gradient)" />
                                                <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0" y1="0" x2="20" y2="20">
                                                        <stop offset="0%" stopColor="#667eea" />
                                                        <stop offset="100%" stopColor="#764ba2" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/schedule-visit" className="btn btn-primary btn-full">
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section programs-section bg-gradient-radial">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Training Programs</h2>
                        <p className="section-subtitle">
                            Specialized programs designed for your success
                        </p>
                    </div>

                    <div className="grid grid-2">
                        <div className="program-card card-glass">
                            <h3>Personal Training</h3>
                            <p>
                                Work one-on-one with certified trainers who create customized workout plans
                                tailored to your goals, fitness level, and any physical limitations.
                            </p>
                            <ul className="program-benefits">
                                <li>Personalized workout plans</li>
                                <li>Form correction & technique</li>
                                <li>Accountability & motivation</li>
                                <li>Progress tracking</li>
                            </ul>
                        </div>

                        <div className="program-card card-glass">
                            <h3>Partner Training</h3>
                            <p>
                                Train with friends, family, or meet new workout partners. Enjoy the benefits
                                of personal training while sharing the experience and cost.
                            </p>
                            <ul className="program-benefits">
                                <li>2-4 people per session</li>
                                <li>Customized group workouts</li>
                                <li>Shared motivation</li>
                                <li>Cost-effective training</li>
                            </ul>
                        </div>

                        <div className="program-card card-glass">
                            <h3>Group Classes</h3>
                            <p>
                                High-energy classes led by expert instructors. From HIIT to strength training,
                                find the perfect class to match your fitness style.
                            </p>
                            <ul className="program-benefits">
                                <li>Varied class schedule</li>
                                <li>All fitness levels welcome</li>
                                <li>Community atmosphere</li>
                                <li>Expert instruction</li>
                            </ul>
                        </div>

                        <div className="program-card card-glass">
                            <h3>Senior Fitness</h3>
                            <p>
                                Specialized programs for seniors focusing on mobility, balance, and strength.
                                Safe, effective training that builds confidence.
                            </p>
                            <ul className="program-benefits">
                                <li>Age-appropriate exercises</li>
                                <li>Fall prevention focus</li>
                                <li>Gentle progression</li>
                                <li>Supportive environment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section faq-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Can I cancel my membership anytime?</h4>
                            <p>
                                Yes! We offer flexible month-to-month memberships with no long-term contracts.
                                Cancel anytime with 30 days notice.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you offer trial sessions?</h4>
                            <p>
                                Absolutely! Schedule a free consultation and trial session to experience our
                                facility and meet our trainers before committing.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>What if I'm a complete beginner?</h4>
                            <p>
                                Perfect! We specialize in working with all fitness levels. Our trainers will
                                create a program that meets you exactly where you are.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>Are there family discounts?</h4>
                            <p>
                                Yes! We offer special family rates and partner training options. Contact us
                                for details on family membership packages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Memberships
