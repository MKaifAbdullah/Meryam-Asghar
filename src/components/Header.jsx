import { useEffect, useState } from 'react'
import { navLinks } from '../data/site.js'

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#home" className="brand" aria-label="Meryam Asghar Hair Artistry — go to home">
          <img src="/images/logo.webp" alt="Meryam Asghar Hair Artistry logo" />
          <span className="brand-name">Meryam Asghar</span>
          <span className="brand-sub">Hair Artistry</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#book" className="btn btn-champagne btn-sm header-cta">
          Book Now
        </a>

        <button
          className={`burger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#book" className="btn btn-champagne" style={{ marginTop: 16 }} onClick={() => setOpen(false)}>
            Book Now
          </a>
        </nav>
      )}
    </header>
  )
}
