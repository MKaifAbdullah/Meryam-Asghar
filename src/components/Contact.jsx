import { site } from '../data/site.js'
import { PinIcon, ClockIcon, PhoneIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Visit the Studio</span>
          <h2>
            Visit the studio, or <em>reach us online</em>
          </h2>

          <div className="contact-list">
            <div className="contact-item">
              <span className="feature-icon">
                <PinIcon />
              </span>
              <div>
                <h4>Address</h4>
                <p>{site.address}</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="feature-icon">
                <ClockIcon />
              </span>
              <div>
                <h4>Studio hours</h4>
                <p>{site.hours}</p>
                <p style={{ fontSize: 12.5, opacity: 0.65 }}>Colour appointments arrive within the 12:30 – 1:30 PM window.</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="feature-icon">
                <PhoneIcon />
              </span>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${site.phonePrimaryRaw}`}>{site.phonePrimary}</a>
                  <br />
                  <a href={`tel:${site.phoneSecondaryRaw}`}>{site.phoneSecondary}</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <span className="feature-icon">
                <MailIcon />
              </span>
              <div>
                <h4>Every platform, in one place</h4>
                <p>
                  <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                    Instagram · @{site.instagram}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-card reveal">
          <img src="/images/salon.webp" alt="Meryam Asghar Hair Artistry studio in Garden East, Karachi" loading="lazy" />
          <div className="map-overlay">
            <h3>Garden East, Karachi</h3>
            <p>{site.address}</p>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-champagne btn-sm">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
