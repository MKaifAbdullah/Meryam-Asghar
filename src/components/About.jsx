import { site, features } from '../data/site.js'
import { SparkIcon, GlobeIcon, LeafIcon } from './Icons.jsx'

const icons = [SparkIcon, GlobeIcon, LeafIcon]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <img src="/images/about.webp" alt="Salon styling station with warm studio light" loading="lazy" />
          <div className="about-stat">
            <strong>{site.reviewCount}+</strong>
            <span>Colored-hair community</span>
          </div>
        </div>

        <div className="about-copy reveal">
          <span className="eyebrow">About the Studio</span>
          <h2>
            A studio built around <em>the integrity of your hair</em>
          </h2>
          <p className="about-quote">
            {site.name} Hair Artistry redefines color artistry in Karachi — from champagne blonde balayage to bold
            transformations, every service begins with the health of your hair.
          </p>
          <p className="about-sign">{site.name} · Founder &amp; Lead Colorist</p>

          <div className="features">
            {features.map((f, idx) => {
              const Icon = icons[idx]
              return (
                <div className="feature" key={f.title}>
                  <span className="feature-icon">
                    <Icon />
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
