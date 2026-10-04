import { useState } from 'react'
import './ScheduleVisit.css'

const ScheduleVisit = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        trainer: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const trainers = [{ id: 'any', name: 'Help me choose the right trainer' }]

    const timeSlots = [
        '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
        '6:00 PM', '7:00 PM', '8:00 PM'
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (isSending) return
        setIsSending(true)
        setSubmitted(false)
        setSubmitError('')
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ 'form-name': 'consultation', ...formData }).toString(),
            })
            if (!response.ok) throw new Error('Submission failed')
            setSubmitted(true)
        } catch {
            setSubmitError("Your request could not be sent. Please call (909) 608-1780 or email fitnessresultsactive@gmail.com.")
        } finally {
            setIsSending(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="schedule-visit">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-slide-up">Let's Find Your Starting Point</h1>
                    <p className="page-subtitle animate-slide-up">
                        Share your goals, meet our team, and explore training that fits you. No contracts. No pressure.
                    </p>
                </div>
            </section>

            <section className="section booking-section">
                <div className="container">
                    <div className="booking-grid">
                        <div className="booking-form-container">
                            <div className="card-glass">
                                <h2>Request Your Consultation</h2>
                                <p className="form-intro">
                                    Tell us a little about yourself and your preferred time. We'll contact you to arrange your consultation. Prefer to talk? Call (909) 608-1780.
                                </p>

                                <p className="form-intro">
                                    <a href="tel:9096081780">Call (909) 608-1780</a>
                                    {' · '}
                                    <a href="mailto:fitnessresultsactive@gmail.com?subject=Fitness%20Results%20Consultation">Email our team</a>
                                </p>

                                {submitted && (
                                    <div className="success-message animate-scale-in">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        <span>Thank you! Your request was sent. We'll contact you to arrange a time; your appointment is not yet confirmed.</span>
                                    </div>
                                )}

                                {submitError && <p role="alert">{submitError}</p>}
                                <form name="consultation" method="POST" data-netlify="true" onSubmit={handleSubmit} className="booking-form">
                                    <input type="hidden" name="form-name" value="consultation" />
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-input"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="date" className="form-label">Preferred Date *</label>
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                className="form-input"
                                                required
                                                value={formData.date}
                                                onChange={handleChange}
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="time" className="form-label">Preferred Time *</label>
                                            <select
                                                id="time"
                                                name="time"
                                                className="form-select"
                                                required
                                                value={formData.time}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a time</option>
                                                {timeSlots.map((slot) => (
                                                    <option key={slot} value={slot}>{slot}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="trainer" className="form-label">Trainer Preference</label>
                                        <select
                                            id="trainer"
                                            name="trainer"
                                            className="form-select"
                                            value={formData.trainer}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a trainer</option>
                                            {trainers.map((trainer) => (
                                                <option key={trainer.id} value={trainer.id}>{trainer.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Additional Notes</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            placeholder="Tell us about your fitness goals or any questions you have..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button type="submit" disabled={isSending} className="btn btn-primary btn-full btn-lg">
                                        Request My Consultation
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="visit-info">
                            <div className="info-card card-glass">
                                <h3>What to Expect</h3>
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <div className="timeline-icon">1</div>
                                        <div className="timeline-content">
                                            <h4>Meet Your Team</h4>
                                            <p>Meet our team and get comfortable in our professional training facility.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-icon">2</div>
                                        <div className="timeline-content">
                                            <h4>Tell Us About You</h4>
                                            <p>Talk about your goals, exercise experience, and any concerns you want us to consider.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-icon">3</div>
                                        <div className="timeline-content">
                                            <h4>Explore Your Options</h4>
                                            <p>Explore a plan built around exercise technique, appropriate resistance, and gradual progression that fits your needs and schedule.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-icon">4</div>
                                        <div className="timeline-content">
                                            <h4>Ask Anything</h4>
                                            <p>Get clear answers about training and next steps. There's no pressure to join.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card card-glass">
                                <h3>Location & Hours</h3>
                                <div className="location-info">
                                    <p><strong>Address:</strong><br />8920 Vernon Ave., Suite #120<br />Montclair, CA 91763</p>
                                    <p><strong>Phone:</strong><br /><a href="tel:9096081780">(909) 608-1780</a></p>
                                    <p><strong>Hours:</strong><br />
                                        Mon-Fri: 5:00 AM - 9:00 PM<br />
                                        Sat: 8:00 AM - 4:00 PM<br />
                                        Sun: By Appointment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ScheduleVisit

