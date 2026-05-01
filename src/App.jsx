import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import logo from './assets/logo.PNG'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <ScrollToTop />
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="footer-bottom">
            <span className="fleur">★</span>
            <span>© {new Date().getFullYear()} Five Eaux Feaux Cleaning. All rights reserved.</span>
            <span className="fleur">★</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
