import { Cpu, Server } from 'lucide-react'
import './Innovation.css'

export default function Innovation() {
  return (
    <section id="innovation" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Innovation & Projects</h2>
          <p>Exploring next-generation solutions for industrial safety and operational efficiency.</p>
        </div>
        <div className="grid-2">
          <div className="innov-card">
            <div className="innov-icon"><Cpu size={40} /></div>
            <h3>H₂S ExploSRE</h3>
            <p>Advanced hazardous gas detection and monitoring systems engineered for high-risk environments. Designed to ensure maximum safety and rapid response.</p>
            <span className="badge">Safety Systems</span>
          </div>
          <div className="innov-card">
            <div className="innov-icon"><Server size={40} /></div>
            <h3>Predictive Maintenance</h3>
            <p>Leveraging AI and Machine Learning for asset intelligence. Predicting failures before they happen to minimize downtime and optimize maintenance schedules.</p>
            <span className="badge">AI & IIoT</span>
          </div>
        </div>
      </div>
    </section>
  )
}