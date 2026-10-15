import { site, navLinks, services } from '../data/site.js'
import { IgIcon, FbIcon, TiktokIcon, YoutubeIcon, WhatsAppIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.webp" alt="Meryam Asghar Hair Artistry logo" />
          <p>
            Meryam Asghar Hair Artistry is Pakistan&rsquo;s premier hair coloring studio in Garden East, Karachi —
            specializing in champagne blonde, balayage, highlights, and acrylic nails. Every service begins with the
            health of your hair.
          </p>
        </div>

        <div>
          <h4>Menu</h4>
          <div className="footer-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="#book">Book Appointment</a>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <div className="footer-links">
            {services.map((s) => (
              <a key={s.id} href="#services">
                {s.name}
              </a>
            ))}
            <a href={`tel:${site.phonePrimaryRaw}`}>Call: {site.phonePrimary}</a>
          </div>
        </div>
      </div>

      <div
        className="footer-grid"
        style={{ marginTop: 44, gridTemplateColumns: '1fr', gap: 24, justifyItems: 'center', textAlign: 'center' }}
      >
        <div>
          <h4 style={{ marginBottom: 14 }}>Social media</h4>
          <div className="footer-socials" style={{ justifyContent: 'center' }}>
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <IgIcon />
            </a>
            <a href={site.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FbIcon />
            </a>
            <a href={site.tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok">
              <TiktokIcon />
            </a>
            <a href={site.youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name} {site.tagline}. All rights reserved.
        </span>
        <span>{site.addressShort}</span>
      </div>
    </footer>
  )
}
