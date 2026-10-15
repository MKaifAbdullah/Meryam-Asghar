import { testimonials, site } from '../data/site.js'
import { StarRow } from './Icons.jsx'

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>
            Loved by Karachi&rsquo;s <em>colored-hair community</em>
          </h2>
          <p>
            Rated {site.rating} out of 5 by {site.reviewCount}+ clients who trusted us with their colour journey.
          </p>
        </div>

        <div className="reviews-grid">
          {testimonials.map((t) => (
            <article className="review-card reveal" key={t.name}>
              <StarRow rating={t.rating} />
              <span className="review-service">{t.service}</span>
              <p className="review-quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="review-name">{t.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
