import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="section newsletter">
      <div className="container newsletter-inner reveal">
        <span className="eyebrow">Newsletter</span>
        <h2>Subscribe</h2>
        <p>Invite yourself to early access on new shades, seasonal promotions and studio updates.</p>
        {done ? (
          <p style={{ marginTop: 24, fontWeight: 700, color: 'var(--champagne-deep)' }}>
            Thank you — you&rsquo;re on the list ✦
          </p>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault()
              setDone(true)
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-dark">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
