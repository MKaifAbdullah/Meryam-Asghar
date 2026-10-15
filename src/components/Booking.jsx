import { useState } from 'react'
import { services, timeSlots, site } from '../data/site.js'

export default function Booking() {
  const [service, setService] = useState(services[0].id)
  const [slot, setSlot] = useState(timeSlots[0])
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [sent, setSent] = useState(false)

  const selected = services.find((s) => s.id === service)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section booking" id="book">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Reservations</span>
          <h2>
            Your colour journey <em>starts with one consultation</em>
          </h2>
          <p>
            Choose your service, a date and arrival slot, then leave your details — we&rsquo;ll confirm by phone.
            Arrivals are seen first-come, first-served, with a Rs. 500 strand test ahead of your color service.
          </p>
        </div>

        <div className="booking-card reveal">
          {sent ? (
            <div className="booking-success">
              <h3>Request received</h3>
              <p>
                Thank you, {name || 'dear client'}. Your request for <strong>{selected?.name}</strong> on{' '}
                <strong>{date || 'your chosen date'}</strong> within the <strong>{slot}</strong> window has been noted.
                We&rsquo;ll call you at <strong>{phone || 'your number'}</strong> to confirm.
              </p>
              <p style={{ marginTop: 18 }}>
                Prefer to call? Reach the studio directly at{' '}
                <a href={`tel:${site.phonePrimaryRaw}`} style={{ color: 'var(--champagne-deep)', fontWeight: 700 }}>
                  {site.phonePrimary}
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="booking-grid two">
                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select id="service" value={service} onChange={(e) => setService(e.target.value)} required>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — From {s.priceFrom}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="date">Preferred date</label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field" style={{ marginTop: 18 }}>
                <label>Arrival slot (12:30 PM – 1:30 PM window)</label>
                <div className="slot-row">
                  {timeSlots.map((t) => (
                    <button
                      type="button"
                      key={t}
                      className={`slot${slot === t ? ' active' : ''}`}
                      onClick={() => setSlot(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="booking-grid two" style={{ marginTop: 18 }}>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03XX-XXXXXXX"
                    required
                  />
                </div>
              </div>

              <div className="field" style={{ marginTop: 18 }}>
                <label htmlFor="notes">Notes (optional)</label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your hair goals…"
                />
              </div>

              <button type="submit" className="btn btn-dark" style={{ marginTop: 24, width: '100%' }}>
                Request Appointment
              </button>

              <p className="booking-note">
                All clients are served strictly in the order they arrive within the 12:30–1:30 PM window. Arriving
                closer to 12:30 PM means an earlier place in line. A Rs. 500 strand test (approx. 45 minutes) is
                performed for the absolute safety and health of your hair, prior to any full-color service.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
