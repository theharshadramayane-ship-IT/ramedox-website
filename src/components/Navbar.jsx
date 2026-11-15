import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="RameDoX Logo" className="logo-img" />
          <span className="logo-text">RameDoX</span>
        </a>
        <div className="nav-links">
          <a href="#industries">Industries</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#innovation">Innovation</a>
          <a href="#markets">Markets</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-btn">Contact</a>
        </div>
      </div>
    </nav>
  )
}