import { site } from '../data/site.js'
import { IgIcon, FbIcon, TiktokIcon, YoutubeIcon, PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-socials">
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
        </div>
        <p className="topbar-note">Champagne Blonde Specialists · Garden East, Karachi</p>
        <div className="topbar-contacts">
          <a href={`tel:${site.phonePrimaryRaw}`}>
            <PhoneIcon /> Helpline: {site.phonePrimary}
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={14} /> WhatsApp Now: {site.phoneSecondary}
          </a>
        </div>
      </div>
    </div>
  )
}
