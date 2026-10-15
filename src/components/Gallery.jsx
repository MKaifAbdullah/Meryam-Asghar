import { gallery } from '../data/site.js'

export default function Gallery() {
  return (
    <section className="section" id="gallery" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">The Work</span>
          <h2>
            Loved by Karachi&rsquo;s <em>colored-hair community</em>
          </h2>
          <p>A glimpse into the transformations crafted at the studio every week.</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((g) => (
            <figure className="gallery-item reveal" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
              <figcaption>{g.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
