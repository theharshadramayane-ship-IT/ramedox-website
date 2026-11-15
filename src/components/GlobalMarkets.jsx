import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import './GlobalMarkets.css'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const coreMarkets = ["USA", "GBR", "IND", "SAU", "ARE", "QAT"]
const addMarkets = ["CAN", "NOR", "DEU", "FRA", "JPN", "KOR", "AUS", "BRA", "POL"]
const complianceMarkets = ["RUS"]

export default function GlobalMarkets() {
  const [tooltip, setTooltip] = useState("")

  return (
    <section id="markets" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Global Market Focus</h2>
          <p>RameDoX is an India-origin venture with a strategic international business vision.</p>
        </div>
        
        <div className="map-container">
          <ComposableMap projectionConfig={{ scale: 140 }} style={{ width: "100%", height: "auto" }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const iso = geo.properties.ISO_A3
                  const isCore = coreMarkets.includes(iso)
                  const isAdd = addMarkets.includes(iso)
                  const isComp = complianceMarkets.includes(iso)
                  
                  let fill = "#1A1D24" // Default dark charcoal
                  if (isCore) fill = "#F26B21"
                  if (isAdd) fill = "#4A6FA5"
                  if (isComp) fill = "#E8B544"
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke="#0A1226"
                      strokeWidth={0.5}
                      onMouseEnter={() => {
                        if (isCore) setTooltip(`${geo.properties.NAME} — Core Target Market`)
                        else if (isAdd) setTooltip(`${geo.properties.NAME} — Additional Market`)
                        else if (isComp) setTooltip(`${geo.properties.NAME} — Subject to Compliance`)
                        else setTooltip("")
                      }}
                      onMouseLeave={() => setTooltip("")}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#FFFFFF", outline: "none", cursor: "pointer" },
                        pressed: { outline: "none" },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>
          
          {tooltip && <div className="map-tooltip">{tooltip}</div>}
          
          <div className="map-legend">
            <div className="legend-item"><span className="color-box core"></span> Core Markets</div>
            <div className="legend-item"><span className="color-box add"></span> Additional Markets</div>
            <div className="legend-item"><span className="color-box comp"></span> Compliance-Sensitive</div>
          </div>
        </div>

        <div className="disclaimer-box">
          <p><strong>Important Note:</strong> Countries shown represent intended target markets for business development. RameDoX does not currently claim offices, customers, contracts or operations in these markets.</p>
          <p className="compliance-text">All defence-related activities and international transactions are subject to applicable export-control, sanctions and regulatory requirements.</p>
        </div>
      </div>
    </section>
  )
}