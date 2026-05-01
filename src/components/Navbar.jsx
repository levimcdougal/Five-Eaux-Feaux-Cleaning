import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.PNG'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <img src={logo} alt="Five Eaux Feaux Cleaning" className="navbar-logo" />
        </Link>
      </div>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={location.pathname === path ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
