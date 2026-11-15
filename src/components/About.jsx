import './About.css'

export default function About() {
  return (
    <section id="about" className="section bg-navy">
      <div className="container about-container">
        <div className="about-content">
          <h2>About RameDoX</h2>
          <h3 className="about-tagline">Engineering Solutions. Empowering Industries.</h3>
          
          <p>
            Headquartered in Nashik, Maharashtra, India, RameDoX is an industrial technology and engineering venture built to solve complex, high-stakes problems.
          </p>
          <p>
            We bridge the gap between advanced software intelligence and robust hardware engineering. Our vision is to build world-class systems that empower the critical industries of tomorrow, combining Indian engineering talent with global execution standards.
          </p>
          
          <div className="mission-vision">
            <div className="mv-card">
              <h4>Vision</h4>
              <p>To be a globally recognized engineering partner for critical industrial technology.</p>
            </div>
            <div className="mv-card">
              <h4>Mission</h4>
              <p>To deliver intelligent, reliable, and compliant hardware and software solutions that drive industrial safety and efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}