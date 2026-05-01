import { Link } from 'react-router-dom'
import officeImg from '../assets/office.png'

import bgImg from '../assets/background.png'
import houseImg from '../assets/house.png'
import './Home.css'


export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-layout">
          <div className="hero-inner">
          <h1 className="hero-title">
            <span className="hero-title-five">Five</span><br />
            Eaux Feaux<br />
            <span className="hero-title-accent">Cleaning</span>
          </h1>
          <p className="hero-tagline">
            Premium cleaning services delivered across all 50 states.
            We bring the sparkle — you enjoy the shine.
          </p>
          <div className="hero-cta">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
          <div className="hero-beads">
            <span className="bead-row">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className={`bead bead-${i % 3}`}></span>
              ))}
            </span>
          </div>
          </div>
          <img src={bgImg} alt="Five Eaux Feaux Cleaning" className="hero-image" />
        </div>
      </section>

      <section className="divider-band">
        <span className="fleur">★</span>
        <span className="divider-text">Where Clean Meets Luxury</span>
        <span className="fleur">★</span>
      </section>


      {/* Why Us */}
      <section className="why-us">
        <div className="why-us-inner">
          <div className="why-us-text">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="section-title-underline"></div>
            <p>At Five Eaux Feaux Cleaning, we believe a clean space is more than just tidy — it's a reflection of the care and pride you put into your home or business. That's why we approach every job with an obsessive attention to detail, making sure no corner is overlooked and no surface is left behind.</p>
            <p>We are fully background-checked and insured, so you can trust who you're letting through your door. Our team shows up on time, every time — because your schedule matters and reliability isn't optional, it's a standard.</p>
            <p>Proudly serving all 50 states, we clean the communities we call home with the respect and dedication they deserve. Whether you need a one-time deep clean or a recurring maintenance plan, we'll put together a custom solution that fits your lifestyle and your budget.</p>
            <p>When you choose Five Eaux Feaux Cleaning, you're not just getting a clean space — you're getting peace of mind.</p>
          </div>
          <img src={officeImg} alt="Our team at work" className="why-us-photo" />
        </div>
      </section>

      <hr className="section-divider" />

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="section-title hiw-title">How It Works</h2>
        <div className="section-title-underline hiw-underline"></div>
        <div className="how-it-works-inner">
          <img src={houseImg} alt="Clean home" className="how-it-works-photo" />
          <ol className="steps-list">
            <li>
              <div className="step-number-badge">1</div>
              <div className="step-content">
                <span className="step-title">Reach Out</span>
                <span className="step-desc">Call, text, or email us to tell us about your space and what you need. We'll get back to you fast.</span>
              </div>
            </li>
            <li>
              <div className="step-number-badge">2</div>
              <div className="step-content">
                <span className="step-title">Get a Quote</span>
                <span className="step-desc">We'll put together a custom quote based on the size of your space and the services you need.</span>
              </div>
            </li>
            <li>
              <div className="step-number-badge">3</div>
              <div className="step-content">
                <span className="step-title">We Clean</span>
                <span className="step-desc">Our team shows up on time and gets to work — thorough, professional, and detail-focused every time.</span>
              </div>
            </li>
            <li>
              <div className="step-number-badge">4</div>
              <div className="step-content">
                <span className="step-title">You Relax</span>
                <span className="step-desc">Come home to a spotless space. Sit back, breathe easy, and enjoy the results.</span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Slogan band */}
      <section className="slogan-band">
        <div className="slogan-inner">
          <p className="slogan-text">Clean. Reliable. Luxury Results.</p>
          <p className="slogan-sub">Quality you can count on, wherever you are.</p>
        </div>
      </section>


      <section className="cta-band">
        <div className="cta-band-inner">
          <div>
            <h2>Ready for a Spotless Space?</h2>
            <p>Reach out today and let's get your home or business gleaming.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
