import { MapPin, Mail, Phone, Linkedin } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Discuss an Industrial Project</h2>
          <p>Reach out to our engineering team for consultations, project inquiries, or technical discussions.</p>
          
          <div className="info-list">
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Headquarters</h4>
                <p>Nashik, Maharashtra, India</p>
              </div>
            </div>
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>[ Add Business Email ]</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>[ Add Phone Number ]</p>
              </div>
            </div>
            <div className="info-item">
              <Linkedin className="info-icon" />
              <div>
                <h4>LinkedIn</h4>
                <p>RameDoX Company Page</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Business Email</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="form-group">
              <label>Company / Organization</label>
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea rows="4" placeholder="Briefly describe your industrial challenge..."></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>Send Enquiry</button>
            <p className="form-note">* Form is frontend-only for now. Backend integration pending.</p>
          </form>
        </div>
      </div>
    </section>
  )
}