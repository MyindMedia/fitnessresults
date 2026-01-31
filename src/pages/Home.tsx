import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Lost 45 lbs",
            quote: "Fitness Results changed my life! The trainers are incredibly supportive and the community is amazing.",
            rating: 5,
            image: "/images/testimonial-1.jpg"
        },
        {
            name: "Mike Chen",
            role: "Gained 20 lbs muscle",
            quote: "Best investment I've ever made. The personal training program helped me achieve goals I never thought possible.",
            rating: 5,
            image: "/images/testimonial-2.jpg"
        },
        {
            name: "Emily Rodriguez",
            role: "Marathon Finisher",
            quote: "From struggling with basic exercises to running my first marathon. The journey has been incredible!",
            rating: 5,
            image: "/images/testimonial-3.jpg"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text animate-slide-up">
                        <h1 className="hero-title">
                            Achieve Your
                            <span className="text-gradient"> Fitness Goals</span>
                        </h1>
                        <p className="hero-subtitle">
                            Your Goals. Our Mission. Experience personalized training, group classes,
                            and a supportive community in Downtown Upland.
                        </p>
                        <div className="hero-ctas">
                            <Link to="/schedule-visit" className="btn btn-primary btn-lg">
                                Start Today
                            </Link>
                            <Link to="/memberships" className="btn btn-secondary btn-lg">
                                View Memberships
                            </Link>
                        </div>
                    </div>
                    <div className="scroll-indicator"></div>
                </div>
            </section>

            {/* Every Need Met Section */}
            <section className="section services bg-gradient-radial">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="animate-slide-up" style={{ color: '#00CED1', fontSize: '3rem', fontWeight: '700', marginBottom: '3rem' }}>EVERY NEED MET</h2>
                    </div>

                    <div className="services-grid">
                        <div className="service-circle-card animate-slide-up">
                            <div className="circle-image">
                                <img src="/images/personal-training.webp" alt="Personal Training" />
                            </div>
                            <h3>Personal Training</h3>
                            <p>
                                One-on-one coaching designed around your unique goals. Get personalized workouts,
                                expert guidance, and accountability to maximize your results. <strong>We also specialize in
                                    supporting seniors and those returning from injury.</strong>
                            </p>
                        </div>

                        <div className="service-circle-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="circle-image">
                                <img src="/images/partner-training.webp" alt="Partner Training" />
                            </div>
                            <h3>Partner Training</h3>
                            <p>
                                Train with a friend—or up to four! Enjoy the motivation of a small group while still getting
                                customized attention from your trainer. It's a <strong>great option for families, couples, or friends</strong> who
                                want to grow stronger together. It's about connection and results.
                            </p>
                        </div>

                        <div className="service-circle-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="circle-image">
                                <img src="/images/group-classes.webp" alt="Group Classes" />
                            </div>
                            <h3>Group Classes</h3>
                            <p>
                                High-energy, community-driven workouts that challenge and inspire. Push yourself alongside
                                others and stay consistent with fun, structured training. Our classes bring the energy of a team
                                atmosphere while still giving you the tools to hit your personal goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformation Section */}
            <section className="section transformation">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="animate-slide-up">Real Transformations</h2>
                        <p className="section-subtitle animate-slide-up">
                            See the incredible results our members achieve
                        </p>
                    </div>

                    <div className="transformation-grid">
                        <div className="transformation-card animate-slide-in-left">
                            <div className="transformation-image">
                                <img src="/images/before.png" alt="Before transformation" />
                                <div className="transformation-label">BEFORE</div>
                            </div>
                        </div>
                        <div className="transformation-card animate-slide-in-right">
                            <div className="transformation-image">
                                <img src="/images/after.png" alt="After transformation" />
                                <div className="transformation-label success">AFTER</div>
                            </div>
                        </div>
                    </div>

                    <div className="transformation-cta text-center">
                        <p className="transformation-quote">
                            "Your transformation story starts here. Join our community and achieve results you never thought possible."
                        </p>
                        <Link to="/schedule-visit" className="btn btn-primary btn-lg">
                            Start Your Transformation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section mission">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text animate-slide-in-left">
                            <h2>Confidence. Strength. Results.</h2>
                            <p className="mission-description">
                                At Fitness Results, our mission is to make fitness accessible to everyone—no matter
                                age, budget, or ability. We provide personalized training, partner sessions, and
                                group classes that meet you where you are.
                            </p>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <div className="stat-number">10+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Happy Members</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">1000+</div>
                                    <div className="stat-label">Transformations</div>
                                </div>
                            </div>
                            <Link to="/schedule-visit" className="btn btn-primary btn-lg">
                                Join Us Today
                            </Link>
                        </div>
                        <div className="mission-image animate-slide-in-right">
                            <div className="image-placeholder">
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials bg-gradient-radial">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="animate-slide-up">Success Stories</h2>
                        <p className="section-subtitle animate-slide-up">
                            Real results from real people
                        </p>
                    </div>

                    <div className="testimonial-carousel">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
                            >
                                <div className="testimonial-content">
                                    <div className="stars">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="star">★</span>
                                        ))}
                                    </div>
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar"></div>
                                        <div>
                                            <div className="author-name">{testimonial.name}</div>
                                            <div className="author-role">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                                onClick={() => setActiveTestimonial(index)}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-card glass-strong">
                        <h2 className="animate-scale-in">Ready to Transform Your Life?</h2>
                        <p className="animate-scale-in">
                            Join hundreds of members who have achieved their fitness goals with us.
                            Start your journey today with a free consultation.
                        </p>
                        <div className="cta-buttons animate-scale-in">
                            <Link to="/schedule-visit" className="btn btn-primary btn-lg">
                                Schedule Free Consultation
                            </Link>
                            <Link to="/contact" className="btn btn-ghost btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
