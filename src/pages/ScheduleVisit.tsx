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

    const trainers = [
        { id: '1', name: 'Any Available Trainer' },
        { id: '2', name: 'Mike Johnson - Strength Training' },
        { id: '3', name: 'Sarah Williams - HIIT & Cardio' },
        { id: '4', name: 'David Lee - Senior Fitness' },
        { id: '5', name: 'Emma Davis - Weight Loss' },
    ]

    const timeSlots = [
        '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
        '6:00 PM', '7:00 PM', '8:00 PM'
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would integrate with Convex or your backend
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
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
                    <h1 className="animate-slide-up">Schedule Your Visit</h1>
                    <p className="page-subtitle animate-slide-up">
                        Book a free consultation and experience our facility firsthand
                    </p>
                </div>
            </section>

            <section className="section booking-section">
                <div className="container">
                    <div className="booking-grid">
                        <div className="booking-form-container">
                            <div className="card-glass">
                                <h2>Book Your Free Consultation</h2>
                                <p className="form-intro">
                                    Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
                                </p>

                                {submitted && (
                                    <div className="success-message animate-scale-in">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        <span>Thank you! We'll contact you soon to confirm your visit.</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="booking-form">
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

                                    <button type="submit" className="btn btn-primary btn-full btn-lg">
                                        Schedule My Visit
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
                                            <h4>Facility Tour</h4>
                                            <p>We'll show you around our state-of-the-art facility and equipment</p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-icon">2</div>
                                        <div className="timeline-content">
                                            <h4>Fitness Assessment</h4>
                                            <p>Quick evaluation of your current fitness level and goals</p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-icon">3</div>
                                        <div className="timeline-content">
                                            <h4>Program Discussion</h4>
                                            <p>We'll recommend the best training program for your needs</p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-icon">4</div>
                                        <div className="timeline-content">
                                            <h4>Q&A Session</h4>
                                            <p>Ask any questions about memberships, training, or our facility</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card card-glass">
                                <h3>Location & Hours</h3>
                                <div className="location-info">
                                    <p><strong>Address:</strong><br />167 S 3rd Ave<br />Upland, CA 91786</p>
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
