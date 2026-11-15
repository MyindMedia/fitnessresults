import { Link } from 'react-router-dom'
import './Memberships.css'

const Memberships = () => {
    return (
        <div className="memberships">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-slide-up">Training Built Around You</h1>
                    <p className="page-subtitle animate-slide-up">
                        Safe. Effective. Efficient. Personalized coaching in a welcoming, professional gym.
                    </p>
                </div>
            </section>

            <section className="section programs-section bg-gradient-radial">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Training Programs</h2>
                        <p className="section-subtitle">
                            <strong className="no-contracts-badge">NO CONTRACTS. EVER.</strong> Choose the way you like to train, and let us help you find the right fit. Our clients stay because they see value and enjoy being here.
                        </p>
                    </div>

                    <div className="grid grid-2">
                        <div className="program-card card-glass">
                            <img className="program-photo" src="/images/personal-training-memberships.jpg" alt="A Fitness Results trainer guiding a client through a barbell curl" loading="lazy" width="1920" height="1280" style={{ objectPosition: 'center 50%' }} />
                            <div className="program-content">
                            <h3>Personal Training</h3>
                            <p>
                                Your goals, your starting point, your plan. Work one-on-one with a trainer who
                                adapts each session to your needs, guides your technique, and helps you build
                                strength and confidence through controlled movement and progressive strength training.
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
                            <img className="program-photo" src="/images/partner-training-memberships.jpg" alt="Two workout partners at Fitness Results with a medicine ball and water bottle" loading="lazy" width="1920" height="1280" style={{ objectPosition: 'center 45%' }} />
                            <div className="program-content">
                            <h3>Partner Training</h3>
                            <p>
                                Build a routine you enjoy with a friend, partner, or family member. Share the
                                encouragement of training together while your coach adjusts exercises and
                                intensity to each person's needs.
                            </p>
                            <ul className="program-benefits">
                                <li>2–3 people per session</li>
                                <li>Customized group workouts</li>
                                <li>Shared motivation</li>
                                <li>Individual exercise adjustments</li>
                            </ul>
                            <div className="program-actions">
                                <Link to="/schedule-visit" className="btn btn-primary">Schedule a Consultation</Link>
                                <Link to="/contact" className="program-contact">Contact Us →</Link>
                            </div>
                            </div>
                        </div>

                        <div className="program-card card-glass">
                            <img className="program-photo" src="/images/group-classes-memberships.jpg" alt="Fitness Results members exercising together with resistance bands and dumbbells" loading="lazy" width="1280" height="1920" style={{ objectPosition: 'center 50%' }} />
                            <div className="program-content">
                            <h3>Group Classes</h3>
                            <p>
                                Move with a supportive group and professional guidance. Enjoy structured
                                workouts with exercise options for your ability, so you can challenge yourself
                                at your own pace and leave feeling encouraged.
                            </p>
                            <ul className="program-benefits">
                                <li>Varied class schedule</li>
                                <li>All fitness levels welcome</li>
                                <li>Community atmosphere</li>
                                <li>Expert instruction</li>
                            </ul>
                            <div className="program-actions">
                                <Link to="/group-classes" className="btn btn-primary">View Classes & Schedule</Link>
                                <Link to="/contact" className="program-contact">Contact Us →</Link>
                            </div>
                            </div>
                        </div>

                        <div className="program-card card-glass">
                            <img className="program-photo" src="/images/gym/senior-training.webp" alt="An older adult strength training at Fitness Results" loading="lazy" width="1024" height="683" />
                            <div className="program-content">
                            <h3>Senior Fitness</h3>
                            <p>
                                Build strength, balance, and mobility for the things you love to do.
                                Patient, attentive coaching and gradual progression support your individual
                                needs and help you feel more confident in everyday movement.
                            </p>
                            <ul className="program-benefits">
                                <li>Age-appropriate exercises</li>
                                <li>Balance & everyday mobility</li>
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

            <section className="section training-specialties" aria-labelledby="training-specialties-heading">
                <div className="container">
                    <h2 id="training-specialties-heading">Specialized Training & Assessments</h2>
                    <div className="training-specialties-grid">
                        <article className="card-glass training-specialty">
                            <img src="/images/gym/functional-patterns.webp" alt="Kevin Guardado coaching a client during a Functional Patterns session" loading="lazy" width="1024" height="683" />
                            <div>
                                <h3>Functional Patterns</h3>
                                <p>Work one-on-one with Kevin Guardado to explore how you move and practice exercises guided by your movement assessment and goals.</p>
                                <Link to="/coaches#kevin-guardado" className="program-contact">Meet Kevin →</Link>
                            </div>
                        </article>
                        <article className="card-glass training-specialty">
                            <img src="/images/gym/styku-body-scan.webp" alt="A Fitness Results team member demonstrating the Styku body scanner" loading="lazy" width="1024" height="683" />
                            <div>
                                <h3>Styku 3D Body Scan</h3>
                                <p>Get a visual baseline and track changes in your body measurements over time. Ask our team how a Styku scan can fit into your training plan.</p>
                                <Link to="/contact" className="program-contact">Ask About a Body Scan →</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section consultation-section">
                <div className="container text-center">
                    <h2>Your First Step Is a Conversation</h2>
                    <p>Tell us what matters to you. We'll listen, explain your options, and help you choose a starting point. No contracts and no pressure—just a clear plan for your next step.</p>
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

