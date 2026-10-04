import { Link } from 'react-router-dom'
import './GroupClasses.css'

const classes = [
  {
    "id": "sculpt-tone",
    "name": "Sculpt & Tone",
    "focus": "Strength & control",
    "coach": "Annette",
    "description": "Make time for focused strength work in an encouraging group setting. Build your routine around purposeful movement and attentive coaching.",
    "sessions": [
      {
        "day": "Tuesday",
        "time": "8:30–9:30 AM"
      }
    ]
  },
  {
    "id": "yoga",
    "name": "Yoga",
    "focus": "Movement & mindfulness",
    "coach": "Jodi",
    "description": "Set aside time to move, breathe, and reconnect with your body. Explore yoga in a welcoming space where you can talk with your instructor about your needs.",
    "sessions": [
      {
        "day": "Tuesday",
        "time": "9:30–10:30 AM"
      },
      {
        "day": "Thursday",
        "time": "9:30–10:30 AM"
      }
    ]
  },
  {
    "id": "quickies",
    "name": "Quickies",
    "focus": "Your evening workout",
    "coach": "Annette",
    "description": "Bring some energy to your evening with a coached group workout. Connect with your instructor to learn about the class format and find the right starting point for you.",
    "sessions": [
      {
        "day": "Tuesday",
        "time": "5:30–6:30 PM"
      },
      {
        "day": "Thursday",
        "time": "5:30–6:30 PM"
      }
    ]
  },
  {
    "id": "zumba",
    "name": "Zumba",
    "focus": "Dance & movement",
    "coach": "Gisel",
    "description": "Enjoy movement with music and the encouragement of a group. Make your workout something to look forward to, and ask your instructor how to approach your first class.",
    "sessions": [
      {
        "day": "Wednesday",
        "time": "4–5 PM"
      }
    ]
  },
  {
    "id": "cardio-meditation",
    "name": "Cardio Meditation",
    "focus": "Movement & focus",
    "coach": "Patti",
    "description": "Give yourself time for movement and mindful focus. Talk with Patti about how the class brings cardio and meditation together and what to expect in your first session.",
    "sessions": [
      {
        "day": "Wednesday",
        "time": "6–7 PM"
      },
      {
        "day": "Thursday",
        "time": "7–8 PM"
      },
      {
        "day": "Friday",
        "time": "6–7 PM"
      },
      {
        "day": "Saturday",
        "time": "10–11 AM"
      }
    ]
  },
  {
    "id": "tab-core",
    "name": "Tab & Core",
    "focus": "Core-focused training",
    "coach": "Annette",
    "description": "Explore core-focused training with the motivation of a group. Your instructor can explain the workout format and help you choose an appropriate approach for your needs.",
    "sessions": [
      {
        "day": "Thursday",
        "time": "8:30–9:30 AM"
      }
    ]
  },
  {
    "id": "stretching-mobility",
    "name": "Stretching & Mobility",
    "focus": "Move with confidence",
    "coach": "Gisel",
    "description": "Give your body dedicated time for stretching and mobility work. Share your movement goals with your instructor and explore a class focused on moving with greater ease.",
    "sessions": [
      {
        "day": "Friday",
        "time": "7–8 AM"
      }
    ]
  },
  {
    "id": "step",
    "name": "Step",
    "focus": "Rhythm & movement",
    "coach": "Kameryn",
    "description": "Add a step-based workout to your week in a supportive group setting. Check in with Kameryn about the class format, pacing, and what you need for your first visit.",
    "sessions": [
      {
        "day": "Friday",
        "time": "9–10 AM"
      }
    ]
  },
  {
    "id": "circuit-training",
    "name": "Circuit Training",
    "focus": "Variety & consistency",
    "coach": "Reyna",
    "description": "Start your weekend with the variety of circuit training and the encouragement of a group. Ask Reyna about the exercises and how to approach the session at your starting point.",
    "sessions": [
      {
        "day": "Saturday",
        "time": "8:30–9:30 AM"
      }
    ]
  }
]
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const startMinutes = (time: string) => {
  const [hour, minute = '0'] = time.split('–')[0].split(':')
  return (Number(hour) % 12 + (time.includes('PM') ? 12 : 0)) * 60 + Number(minute)
}
const schedule = classes.flatMap(item => item.sessions.map(session => ({
  ...session, classId: item.id, name: item.name, coach: item.coach
}))).sort((a, b) => startMinutes(a.time) - startMinutes(b.time))

const GroupClasses = () => (
  <div className="group-classes">
    <section className="classes-hero">
      <div className="container classes-hero-grid">
        <div>
          <p className="classes-eyebrow">Safe. Effective. Efficient.</p>
          <h1>Your Class.<br /><span>Your Community.</span></h1>
          <p className="classes-intro">Find a class you look forward to. Train with professional guidance, friendly faces, and a team that takes time to understand your needs.</p>
          <div className="classes-hero-actions">
            <a href="#class-schedule" className="btn btn-primary">View the Weekly Schedule</a>
            <a href="#class-details" className="btn btn-secondary">Explore the Classes</a>
          </div>
          <p className="classes-promise"><strong>NO CONTRACTS. EVER.</strong> A welcoming gym. A choice that stays yours.</p>
        </div>
        <img src="/images/group-classes-memberships.jpg" alt="Fitness Results members working out together with resistance bands and dumbbells" width="1280" height="1920" className="classes-hero-photo" />
      </div>
    </section>

    <section className="section classes-schedule-section" id="class-schedule" aria-labelledby="schedule-heading">
      <div className="container">
        <div className="classes-section-heading">
          <p className="classes-eyebrow">Make room for you</p>
          <h2 id="schedule-heading">Your Weekly Class Calendar</h2>
          <p>All times are Pacific time. Select a class below to read its details.</p>
        </div>
        <div className="classes-calendar">
          {days.map(day => (
            <section className="classes-calendar-day" key={day} aria-label={day + ' classes'}>
              <h3>{day}</h3>
              <div className="classes-day-events">
                {schedule.filter(session => session.day === day).map(session => (
                  <a className="classes-calendar-event" href={'#' + session.classId} key={session.classId}>
                    <span className="classes-event-time">{session.time}</span>
                    <strong>{session.name}</strong>
                    <span>With {session.coach}</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="classes-schedule-note">No classes are listed for Monday or Sunday. Contact our team to confirm availability and any holiday changes before your visit.</p>
      </div>
    </section>

    <section className="section classes-details-section" id="class-details" aria-labelledby="classes-heading">
      <div className="container">
        <div className="classes-section-heading">
          <p className="classes-eyebrow">Find your fit</p>
          <h2 id="classes-heading">Explore Our Classes</h2>
          <p>Different ways to move. The same commitment to thoughtful coaching and a supportive community.</p>
        </div>
        <div className="classes-detail-grid">
          {classes.map(item => (
            <article className="classes-detail-card" id={item.id} key={item.id}>
              <p className="classes-card-focus">{item.focus}</p>
              <h3>{item.name}</h3>
              <p className="classes-card-description">{item.description}</p>
              <dl className="classes-card-meta">
                <div><dt>Instructor</dt><dd>{item.coach}</dd></div>
                <div><dt>Weekly sessions</dt><dd>{item.sessions.map(session => <span key={session.day}>{session.day} · {session.time}</span>)}</dd></div>
              </dl>
              <Link to="/contact" className="classes-question-link">Ask About This Class <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section classes-first-visit">
      <div className="container">
        <div className="classes-welcome-panel">
          <div>
            <p className="classes-eyebrow">20+ years serving the Inland Empire</p>
            <h2>New Here? Let's Find Your Starting Point.</h2>
            <p>Tell us about your goals, experience, and any movement concerns. We'll help you choose a class and explain what to expect. No pressure—just a caring team ready to listen.</p>
            <p><strong>8920 Vernon Ave., Suite #120 · Montclair, CA 91763</strong></p>
          </div>
          <div className="classes-welcome-actions">
            <Link to="/contact" className="btn btn-primary">Talk With Our Team</Link>
            <Link to="/schedule-visit" className="btn btn-secondary">Book a Consultation</Link>
            <a href="tel:9096081780">Call (909) 608-1780</a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default GroupClasses
