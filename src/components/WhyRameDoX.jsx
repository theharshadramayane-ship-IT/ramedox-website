import { CheckCircle } from 'lucide-react'
import './WhyRameDoX.css'

const points = [
  "Engineering-first approach to complex problem solving.",
  "Deep expertise across software, hardware, and embedded systems.",
  "Focused on critical industries where precision and reliability are non-negotiable.",
  "Commitment to R&D and next-generation industrial innovation.",
  "India-origin talent with a global standard of execution.",
  "Strict adherence to international compliance and safety standards."
]

export default function WhyRameDoX() {
  return (
    <section className="section bg-navy" style={{ background: 'linear-gradient(135deg, #0A1226 0%, #1A1D24 100%)' }}>
      <div className="container why-container">
        <div className="why-text">
          <h2>Why RameDoX?</h2>
          <p className="why-desc">We don't just write code or build hardware. We engineer intelligence for the systems the world relies on.</p>
          <div className="why-list">
            {points.map((pt, i) => (
              <div key={i} className="why-item">
                <CheckCircle size={22} className="check-icon" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="why-image">
          <div className="overlay-box">
             <h3>Global Standards.<br/>Indian Ingenuity.</h3>
          </div>
        </div>
      </div>
    </section>
  )
}