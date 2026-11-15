import './Capabilities.css'

const caps = [
  "Oil & Gas and Refinery Engineering",
  "Industrial Automation & Monitoring",
  "Industrial Internet of Things (IIoT)",
  "Industrial Safety Systems",
  "Hazardous Gas Detection & Monitoring",
  "Predictive Maintenance & Asset Intelligence",
  "Embedded Systems Engineering",
  "Electronics & Hardware Development",
  "Industrial Software Engineering",
  "AI & Machine Learning",
  "Enterprise Software Solutions",
  "Backend Infrastructure",
  "Defence Technology (Compliance Applied)"
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="section bg-navy">
      <div className="container">
        <div className="section-header light">
          <h2>Engineering Capabilities</h2>
          <p>A comprehensive technical stack designed to solve complex industrial challenges.</p>
        </div>
        <div className="cap-grid">
          {caps.map((cap, i) => (
            <div key={i} className="cap-item">
              <span className="cap-num">{(i + 1).toString().padStart(2, '0')}</span>
              <span className="cap-text">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}