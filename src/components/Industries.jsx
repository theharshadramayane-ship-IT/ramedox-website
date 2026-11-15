import { Factory, Shield, Activity, Flame } from 'lucide-react'
import './Industries.css'

const industries = [
  { 
    icon: <Flame size={32} />, 
    title: "Oil & Gas", 
    desc: "Upstream, midstream, and downstream engineering solutions for complex extraction and processing environments." 
  },
  { 
    icon: <Factory size={32} />, 
    title: "Petroleum Refineries", 
    desc: "Advanced monitoring and automation systems for high-stakes refinery operations and industrial safety." 
  },
  { 
    icon: <Shield size={32} />, 
    title: "Defence Technology", 
    desc: "Compliant hardware and software engineering for defence applications (subject to export controls)." 
  },
  { 
    icon: <Activity size={32} />, 
    title: "Industrial Infrastructure", 
    desc: "Robust systems for heavy manufacturing, power, and critical infrastructure sectors." 
  }
]

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p>Deploying intelligent engineering to the world's most demanding industrial environments.</p>
        </div>
        <div className="grid-4">
          {industries.map((ind, i) => (
            <div key={i} className="industry-card">
              <div className="icon-box">{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}