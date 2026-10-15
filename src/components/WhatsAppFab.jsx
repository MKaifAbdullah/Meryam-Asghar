import { site } from '../data/site.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}
