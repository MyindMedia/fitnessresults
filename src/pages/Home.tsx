import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text animate-slide-up">
                        <h1 className="hero-title">
                            Feel Stronger.
                            <span className="text-gradient"> Train With Care.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Personal training built around your body, your goals, and your life.
                            Caring, professional coaching grounded in biomechanics, controlled movement, and progressive strength training. 20+ years
                            serving the Inland Empire.
                        </p>
                        <div className="hero-ctas">
                            <Link to="/schedule-visit" className="btn btn-primary btn-lg">
                                Book a Consultation
                            </Link>
                            <Link to="/memberships" className="btn btn-secondary btn-lg">
                                Explore Training Programs
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
                        <h2 className="animate-slide-up" style={{ color: '#00CED1', fontSize: '3rem', fontWeight: '700', marginBottom: '3rem' }}>TRAINING THAT FITS YOU</h2>
                    </div>

                    <div className="services-grid">
                        <div className="service-circle-card animate-slide-up">
                            <div className="circle-image">
                                <img src="/images/personal-training.webp" alt="Personal Training" />
                            </div>
                            <h3>Personal Training</h3>
                            <p>
                                Your trainer listens first, then builds each workout around your needs, experience,
                                and goals. Get thoughtful exercise selection, hands-on guidance, and encouragement
                                that helps you feel confident from your first session.
                            </p>
                        </div>

                        <div className="service-circle-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="circle-image">
                                <img src="/images/partner-training.webp" alt="Partner Training" />
                            </div>
                            <h3>Partner Training</h3>
                            <p>
                                Share the experience with a friend, partner, or family member. With 2–3 people
                                per session, you get individual coaching and workouts adapted to each person's
                                ability—plus the encouragement of training together.
                            </p>
                        </div>

                        <div className="service-circle-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="circle-image">
                                <img src="/images/group-classes-memberships.jpg" alt="Fitness Results members training together with resistance bands and dumbbells" loading="lazy" style={{ objectPosition: 'center 40%' }} />
                            </div>
                            <h3>Group Classes</h3>
                            <p>
                                Enjoy the energy of a group with professional instruction and options for your
                                fitness level. Build strength and consistency in a welcoming community where
                                encouragement matters more than competition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformation Section */}
            <section className="section transformation">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="animate-slide-up">Progress That Matters to You</h2>
                        <p className="section-subtitle animate-slide-up">
                            More strength. More confidence. More ability to enjoy everyday life.
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
                            Your goals are personal. Whether you're building strength, improving fitness, or getting back into a routine, we'll help you take the next step at a pace that fits you.
                        </p>
                        <Link to="/schedule-visit" className="btn btn-primary btn-lg">
                            Talk About Your Goals
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section mission">
                <div className="container">
                    <div className="section-header text-center mission-heading">
                        <h2>Safe. Effective. Efficient.</h2>
                    </div>
                    <div className="mission-content">
                        <div className="mission-text animate-slide-in-left">
                            <p className="mission-description">
                                For more than 20 years, we've helped Inland Empire clients train with confidence.
                                We apply biomechanics to exercise selection, coach controlled movement and good technique,
                                and build strength gradually.
                            </p>
                            <p className="mission-description">
                                We prioritize low-risk exercises with meaningful benefits, adjusting the workload and pace
                                to your needs. Every workout has a purpose. Every client deserves to feel heard.
                            </p>
                        </div>
                        <div className="mission-image animate-slide-in-right">
                            <img className="coaching-team-photo" src="/images/coaching-team.jpg" alt="The Fitness Results coaching team smiling together in the gym" width="1920" height="1280" loading="lazy" />
                        </div>
                    </div>
                    <div className="stats-grid mission-highlights">
                        <div className="stat-item">
                            <div className="stat-number">20+ Years</div>
                            <div className="stat-label">Serving the Inland Empire</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">Custom Workouts</div>
                            <div className="stat-label">Built Around You</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">NO CONTRACTS</div>
                            <div className="stat-label">Stay Because It Works for You</div>
                        </div>
                    </div>
                    <div className="mission-team-cta text-center">
                        <Link to="/coaches" className="btn btn-primary btn-lg">
                            Meet Your Coaching Team
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section testimonials bg-gradient-radial">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>A Gym Where You Can Feel at Home</h2>
                        <p className="section-subtitle">Professional coaching. Personal attention. No pressure to commit.</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="card-glass"><h3>We Listen First</h3><p>Tell us what you want to achieve, what feels challenging, and what you need from a coach. Your plan starts with understanding you.</p></div>
                        <div className="card-glass"><h3>We Train With Purpose</h3><p>Science-informed exercise selection, clear instruction, and sensible progression help you make the most of your time with us.</p></div>
                        <div className="card-glass"><h3>We Earn Your Next Visit</h3><p><strong>NO CONTRACTS. EVER.</strong> Our clients stay because the training works for them, they feel supported, and they enjoy being here.</p></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-card glass-strong">
                        <h2 className="animate-scale-in">Let's Start With a Conversation.</h2>
                        <p className="animate-scale-in">
                            Meet us, share your goals, and explore a plan built for you.
                            Your consultation is a chance to ask questions—not a commitment to join.
                        </p>
                        <div className="cta-buttons animate-scale-in">
                            <Link to="/schedule-visit" className="btn btn-primary btn-lg">
                                Book a Consultation
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

