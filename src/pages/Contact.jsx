const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const TextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
import './Contact.css'

const contactMethods = [
  {
    icon: null,
    label: 'Phone',
    value: '985-445-4650',
    detail: 'Call us anytime during business hours',
    href: 'tel:+19854454650',
    cta: 'Call Now',
  },
  {
    icon: null,
    label: 'Text',
    value: '985-445-4650',
    detail: 'Prefer texting? Send us a message anytime',
    href: 'sms:+19854454650',
    cta: 'Send a Text',
  },
  {
    icon: null,
    label: 'Email',
    value: 'email@email.com',
    detail: 'We typically respond within a few hours',
    href: 'mailto:email@email.com',
    cta: 'Send Email',
  },
]

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <h1>Get In Touch</h1>
          <p>
            Ready to book or have questions? We'd love to hear from you.
            Choose the way that works best for you.
          </p>
        </div>
      </section>

      <section className="contact-methods">
        <div className="contact-methods-inner">
          {contactMethods.map((method) => (
            <div className="contact-card" key={method.label}>
              <div className="contact-card-icon">
                {method.label === 'Phone' ? <PhoneIcon />
                  : method.label === 'Text' ? <TextIcon />
                  : <EmailIcon />}
              </div>
              <div className="contact-card-label">{method.label}</div>
              <div className="contact-card-value">{method.value}</div>
              <p className="contact-card-detail">{method.detail}</p>
              <a href={method.href} className="btn btn-outline contact-btn">
                {method.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-hours">
        <div className="contact-hours-inner">
          <span className="fleur hours-fleur">★</span>
          <div>
            <h2>Business Hours</h2>
            <div className="hours-grid">
              <div className="hours-row">
                <span>Monday – Friday</span>
                <span>8:00 AM – 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>9:00 AM – 4:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          <span className="fleur hours-fleur">★</span>
        </div>
      </section>

      {/* What to Expect */}
      <section className="contact-expect">
        <div className="contact-expect-inner">
          <h2 className="section-title">What to Expect</h2>
          <div className="expect-grid">
            <div className="expect-card">
              <LightningIcon />
              <h3>Fast Response</h3>
              <p>We get back to every message quickly — usually within a few hours during business hours.</p>
            </div>
            <div className="expect-card">
              <QuoteIcon />
              <h3>Free Quote</h3>
              <p>No pressure, no obligation. We'll put together a custom quote based on your space and needs.</p>
            </div>
            <div className="expect-card">
              <CalendarIcon />
              <h3>Flexible Scheduling</h3>
              <p>We work around your schedule. One-time, weekly, bi-weekly, or monthly — whatever works best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="contact-faq-inner">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How do I get a quote?</h3>
              <p>Just reach out by phone, text, or email and tell us about your space. We'll get back to you with a custom quote quickly.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to be home during the cleaning?</h3>
              <p>Not at all. Many of our clients prefer to be away. We'll coordinate access beforehand so everything goes smoothly.</p>
            </div>
            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>We proudly serve Arizona and the surrounding areas. Not sure if we cover your location? Give us a call and we'll let you know.</p>
            </div>
            <div className="faq-item">
              <h3>Do you bring your own supplies?</h3>
              <p>Yes — we bring everything needed to get the job done. If you have preferences for specific products, just let us know.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-note">
        <p>
          Proudly serving Arizona and the surrounding areas.
        </p>
      </section>
    </div>
  )
}
