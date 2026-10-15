import { services } from '../data/site.js'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">The Menu</span>
          <h2>
            Signature services, <em>crafted for you</em>
          </h2>
          <p>
            Every color service begins with a strand test, performed for the absolute safety and health of your hair.
            Explore the menu and find your next transformation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.id} className="service-card reveal">
              <div className="service-media">
                <img src={s.image} alt={s.alt} loading="lazy" />
                <span className="service-badge">{s.tag}</span>
              </div>
              <div className="service-body">
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.description}</p>
                <div className="service-meta">
                  <span className="service-price">From {s.priceFrom}</span>
                  <span className="service-duration">{s.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
