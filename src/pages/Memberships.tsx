import { Link } from 'react-router-dom'
import './Memberships.css'

const Memberships = () => {
    return (
        <div className="memberships">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-slide-up">Memberships & Training</h1>
                    <p className="page-subtitle animate-slide-up">
                        Explore our programs and let us help you find the right fit for your goals.
                    </p>
                </div>
            </section>

            <section className="section programs-section bg-gradient-radial">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Training Programs</h2>
                        <p className="section-subtitle">
                            Choose how you train. Contact us or schedule a consultation for program details and personalized recommendations.
                        </p>
                    </div>

                    <div className="grid grid-2">
                        <div className="program-card card-glass">
                            <img className="program-photo" src="/images/personal-training.webp" alt="A Fitness Results trainer coaching a client through a dumbbell exercise" loading="lazy" width="730" height="730" />
                            <div className="program-content">
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
                            <div className="program-actions">
                                <Link to="/schedule-visit" className="btn btn-primary">Schedule a Consultation</Link>
                                <Link to="/contact" className="program-contact">Contact Us →</Link>
                            </div>
                            </div>
                        </div>

                        <div className="program-card card-glass">
                            <img className="program-photo" src="/images/group-classes.webp" alt="Workout partners training together with dumbbells" loading="lazy" width="730" height="730" />
                            <div className="program-content">
                            <h3>Partner Training</h3>
                            <p>
                                Train with friends, family, or meet new workout partners. Enjoy the benefits
                                of personal training while sharing the experience and cost.
                            </p>
                            <ul className="program-benefits">
                                <li>2–3 people per session</li>
                                <li>Customized group workouts</li>
                                <li>Shared motivation</li>
                                <li>Cost-effective training</li>
                            </ul>
                            <div className="program-actions">
                                <Link to="/schedule-visit" className="btn btn-primary">Schedule a Consultation</Link>
                                <Link to="/contact" className="program-contact">Contact Us →</Link>
                            </div>
                            </div>
                        </div>

                        <div className="program-card card-glass">
                            <img className="program-photo" src="/images/group-classes.webp" alt="A group working out together with dumbbells" loading="lazy" width="730" height="730" />
                            <div className="program-content">
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
                            <div className="program-actions">
                                <Link to="/schedule-visit" className="btn btn-primary">Schedule a Consultation</Link>
                                <Link to="/contact" className="program-contact">Contact Us →</Link>
                            </div>
                            </div>
                        </div>

                        <div className="program-card card-glass">
                            <img className="program-photo" src="/images/partner-training.webp" alt="A trainer guiding an older adult through a cable exercise" loading="lazy" width="730" height="730" />
                            <div className="program-content">
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
                            <div className="program-actions">
                                <Link to="/schedule-visit" className="btn btn-primary">Schedule a Consultation</Link>
                                <Link to="/contact" className="program-contact">Contact Us →</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section consultation-section">
                <div className="container text-center">
                    <h2>Let's Find Your Fit</h2>
                    <p>Tell us about your goals. We'll walk you through the training options, availability, and pricing in a personal consultation.</p>
                    <div className="consultation-actions">
                        <Link to="/schedule-visit" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
                        <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Memberships

