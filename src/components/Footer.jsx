import { Linkedin, Mail, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="RameDoX" />
            <span>RameDoX</span>
          </div>
          <p className="footer-tagline">Engineering Solutions. Empowering Industries.</p>
          <p className="footer-desc">
            Intelligent software and hardware engineering for critical industrial environments.
          </p>
        </div>

        <div className="footer-col">
          <h5>Navigate</h5>
          <a href="#industries">Industries</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#innovation">Innovation</a>
          <a href="#markets">Markets</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <p className="footer-item"><MapPin size={16} /> Nashik, Maharashtra, India</p>
          <p className="footer-item"><Mail size={16} /> [ Add Business Email ]</p>
          <a
            href="https://www.linkedin.com/company/ramedox"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item footer-link"
          >
            <Linkedin size={16} /> RameDoX on LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} RameDoX. All rights reserved.</p>
          <p className="footer-legal">
            All defence-related activities and international transactions are subject to applicable export-control, sanctions and regulatory requirements.
          </p>
        </div>
      </div>
    </footer>
  )
}