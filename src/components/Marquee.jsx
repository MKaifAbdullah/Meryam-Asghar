const items = [
  'Champagne Blonde Balayage',
  'Strand Test First — Always',
  'Full Color Transformations',
  'Root Touch-Up & Gloss',
  'Luxury Acrylic Nails',
  'Garden East, Karachi',
]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
