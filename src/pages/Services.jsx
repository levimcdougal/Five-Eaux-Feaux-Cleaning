import { Link } from 'react-router-dom'
import airImg from '../assets/air.png'
import companyImg from '../assets/company.png'
import boxImg from '../assets/box.png'
import keyImg from '../assets/key.png'
import casaImg from '../assets/casa.png'
import broomImg from '../assets/broom.png'

import './Services.css'

const services = [
  {
    icon: '🏡',
    topImg: airImg,
    title: 'Airbnb Turnover',
    description:
      'Fast, thorough turnovers between guests to keep your Airbnb guest-ready. We handle everything so you get great reviews every time.',
    highlights: ['Fresh linens & remakes', 'Kitchen & bathrooms', 'Restocking essentials', 'Quick turnaround'],
  },
  {
    icon: '✨',
    topImg: broomImg,
    title: 'Deep Cleaning',
    description:
      'An intensive clean that goes beyond the surface. We scrub, sanitize, and detail every inch — perfect for first-time clients or seasonal refreshes.',
    highlights: ['Inside appliances', 'Baseboards & trim', 'Cabinet interiors', 'Grout & tile scrub'],
  },
  {
    icon: '🏢',
    topImg: companyImg,
    title: 'Commercial Cleaning',
    description:
      'A clean workspace is a productive workspace. We keep your office or commercial space looking its best for employees and clients alike.',
    highlights: ['Common areas', 'Restrooms', 'Break rooms', 'Flexible scheduling'],
  },
  {
    icon: '🔑',
    topImg: keyImg,
    title: 'Move-Out Cleaning',
    description:
      'Handing over the keys? We leave the space in pristine condition to help you secure your full deposit back without any stress.',
    highlights: ['Full property clean', 'Inside all cabinets', 'Walls & baseboards', 'Appliance interiors'],
  },
  {
    icon: '🏠',
    topImg: casaImg,
    title: 'Residential Cleaning',
    description:
      'Regular home cleaning tailored to your schedule and needs. We keep your living spaces fresh, tidy, and comfortable every visit.',
    highlights: ['Kitchen & bathrooms', 'Dusting & vacuuming', 'Mopping floors', 'Weekly / bi-weekly / monthly'],
  },
  {
    icon: '📦',
    topImg: boxImg,
    title: 'Move-In Cleaning',
    description:
      'Starting fresh in a new space? We make sure your new home is spotless and sanitized before you bring in a single box.',
    highlights: ['Full property clean', 'Inside all cabinets', 'Window sills', 'Appliance interiors'],
  },
]

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-inner">
          <h1>Our Services</h1>
          <p>From a quick refresh to a full deep clean — we've got you covered.</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((s) => (
            <div
              className={`service-card${s.topImg ? ' service-card--top-img' : ''}`}
              key={s.title}
            >
              {s.topImg && (
                <div
                  className="service-card-hero-img"
                  style={{ backgroundImage: `url(${s.topImg})` }}
                  role="img"
                  aria-label={s.title}
                />
              )}
              <div className={s.topImg ? 'service-card-body' : undefined}>
                {!s.topImg && (
                  <div className="service-icon">
                    {s.title === 'Commercial Cleaning'
                      ? <img src={companyImg} alt="Commercial Cleaning" className="service-card-img" />
                      : s.title === 'Move-In Cleaning'
                      ? <img src={boxImg} alt="Move-In Cleaning" className="service-card-img" />
                      : s.title === 'Move-Out Cleaning'
                      ? <img src={keyImg} alt="Move-Out Cleaning" className="service-card-img" />
                      : s.title === 'Residential Cleaning'
                      ? <img src={casaImg} alt="Residential Cleaning" className="service-card-img" />
                      : s.title === 'Deep Cleaning'
                      ? <img src={broomImg} alt="Deep Cleaning" className="service-card-img" />
                      : s.icon}
                  </div>
                )}
                <h2>{s.title}</h2>
                <p className="service-desc">{s.description}</p>
                <ul className="service-highlights">
                  {s.highlights.map((h) => (
                    <li key={h}>
                      <span className="check">⚜</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-promise">
        <ul className="promise-list">
          <li><span className="promise-check">✓</span> Detail-Oriented</li>
          <li><span className="promise-check">✓</span> Professional</li>
          <li><span className="promise-check">✓</span> Consistent Quality</li>
        </ul>
      </section>

      <section className="services-cta">
        <div className="services-cta-inner">
          <h2>Don't See What You Need?</h2>
          <p>We offer custom cleaning solutions. Reach out and we'll put something together for you.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
