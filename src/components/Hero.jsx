import { ArrowRight, Settings } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section 
      className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(10, 18, 38, 0.85), rgba(10, 18, 38, 0.95)), url('/hero-bg.jpg')` 
      }}
    >
      <div className="hero-content">
        <div className="hero-badge">BUILD. ENGINEER. INNOVATE.</div>
        <h1>Engineering Intelligence for <span className="text-gradient">Critical Industries.</span></h1>
        <p className="hero-subtext">India-origin engineering. Global industrial ambition.</p>
        <p className="hero-desc">
          RameDoX develops intelligent software and hardware solutions for complex industrial challenges across Oil & Gas, Petroleum Refineries, Defence Technology and Industrial Infrastructure.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Discuss an Industrial Project <ArrowRight size={18} />
          </a>
          <a href="#capabilities" className="btn-outline">
            <Settings size={18} /> Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  )
}