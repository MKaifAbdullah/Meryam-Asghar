import { useEffect, useState } from 'react'
import { site } from '../data/site.js'
import { StarRow } from './Icons.jsx'

const slides = [
  { src: '/images/hero.webp', alt: 'Luxury hair salon styling session' },
  { src: '/images/balayage.webp', alt: 'Champagne blonde balayage result' },
  { src: '/images/salon.webp', alt: 'Salon styling station with warm studio light' },
]

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-slides">
        {slides.map((s, idx) => (
          <div key={s.src} className={`hero-slide${idx === i ? ' active' : ''}`}>
            <img src={s.src} alt={s.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-rating">
          <StarRow rating={Math.round(site.rating)} />
          <span>
            {site.rating} · {site.reviewCount}+ happy clients
          </span>
        </div>
        <h1>
          Color that is <em>engineered</em> around your hair&rsquo;s health
        </h1>
        <p className="hero-lead">
          {site.subtitle} — from champagne blonde balayage to bold transformations, every service at our Garden East
          studio begins with the health of your hair.
        </p>
        <div className="hero-actions">
          <a href="#book" className="btn btn-champagne">
            Book an Appointment
          </a>
          <a href="#services" className="btn btn-outline-light">
            Explore Services
          </a>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            className={`hero-dot${idx === i ? ' active' : ''}`}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
