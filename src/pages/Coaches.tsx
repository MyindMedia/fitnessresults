import { useState } from 'react'
import { Link } from 'react-router-dom'
import { teamMembers } from '../data/team'
import { groupClasses } from '../data/groupClasses'
import './Coaches.css'

const filters = [
  { id: 'all', label: 'Everyone' },
  { id: 'training', label: 'Personal Training' },
  { id: 'classes', label: 'Group Classes' },
  { id: 'care', label: 'Member & Facility Care' },
]

const Coaches = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const visibleMembers = teamMembers.filter(member => activeFilter === 'all' || member.groups.includes(activeFilter))

  return (
    <div className="coaches-page">
      <section className="coaches-hero">
        <div className="container coaches-hero-grid">
          <div>
            <p className="coaches-eyebrow">The people behind your progress</p>
            <h1>Meet Your<br /><span>Fitness Results Team.</span></h1>
            <p className="coaches-intro">Professional guidance. Personal attention. People who care. Get to know the coaches and team members who help make our gym a place you can feel at home.</p>
            <Link to="/schedule-visit" className="btn btn-primary">Find Your Starting Point</Link>
          </div>
          <img className="coaches-team-photo" src="/images/coaching-team.jpg" alt="The Fitness Results team smiling together in the gym" width="1920" height="1280" />
        </div>
      </section>

      <section className="section coaches-directory" aria-labelledby="team-heading">
        <div className="container">
          <div className="coaches-section-heading">
            <p className="coaches-eyebrow">Coaching, community & care</p>
            <h2 id="team-heading">A Team Here for You</h2>
            <p>From your first conversation to your next workout, our team brings care to the experience. Explore our specialties and classes to find the support you're looking for.</p>
          </div>
          <div className="coaches-filters" role="group" aria-label="Filter team by role">
            {filters.map(filter => (
              <button type="button" key={filter.id} onClick={() => setActiveFilter(filter.id)} aria-pressed={activeFilter === filter.id} className={activeFilter === filter.id ? 'coaches-filter active' : 'coaches-filter'}>
                {filter.label}
              </button>
            ))}
          </div>
          <p className="coaches-result-count" aria-live="polite">{visibleMembers.length} team members</p>

          <div className="coaches-grid">
            {visibleMembers.map(member => (
              <article className="coach-card" key={member.id} id={member.id}>
                {member.photo ? (
                  <img className="coach-portrait" src={member.photo} alt={member.name + ', ' + member.role} loading="lazy" width="600" height="450" />
                ) : (
                  <div className="coach-photo-placeholder" role="img" aria-label={'Portrait of ' + member.name + ' coming soon'}>
                    <span className="coach-initials" aria-hidden="true">{member.initials}</span>
                    <span>Photo coming soon</span>
                  </div>
                )}
                <div className="coach-card-content">
                  <header>
                    <h3>{member.name}</h3>
                    <p className="coach-role">{member.role}</p>
                    {member.credential && <p className="coach-credential">{member.credential}</p>}
                  </header>
                  <p className="coach-bio">{member.bio}</p>
                  <div className="coach-specialties">
                    <h4>At Fitness Results</h4>
                    <ul>{member.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                  </div>
                  {member.classIds.length > 0 && (
                    <div className="coach-classes">
                      <h4>Weekly Classes</h4>
                      {member.classIds.map(id => {
                        const item = groupClasses.find(entry => entry.id === id)
                        return item ? (
                          <div className="coach-class" key={id}>
                            <Link to={'/group-classes#' + id}>{item.name} <span aria-hidden="true">→</span></Link>
                            <ul>{item.sessions.map(session => <li key={session.day}>{session.day} · {session.time}</li>)}</ul>
                          </div>
                        ) : null
                      })}
                    </div>
                  )}
                  <div className="coach-video-section">
                    <h4>Meet {member.name.split(' ')[0]} on Video</h4>
                    {member.video ? (
                      <video className="coach-video" controls playsInline preload="none" poster={member.photo || undefined} aria-label={'Video introduction from ' + member.name}>
                        <source src={member.video} />
                        Your browser does not support video. <a href={member.video}>Watch the introduction</a>.
                      </video>
                    ) : (
                      <div className="coach-video-placeholder">
                        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 5L19 12L9 19V5Z" fill="currentColor" /></svg>
                        <span>Video introduction coming soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section coaches-contact">
        <div className="container">
          <div className="coaches-contact-panel">
            <div>
              <p className="coaches-eyebrow">Safe. Effective. Efficient.</p>
              <h2>Not Sure Who to Start With?</h2>
              <p>Tell us about your goals, experience, and preferences. We'll help you connect with the right person and explore a training approach that fits you.</p>
              <p className="coaches-no-contracts"><strong>NO CONTRACTS. EVER.</strong> Start with a conversation. No pressure to join.</p>
            </div>
            <div className="coaches-contact-actions">
              <Link to="/schedule-visit" className="btn btn-primary">Book a Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coaches
