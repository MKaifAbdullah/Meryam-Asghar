import { processSteps } from '../data/site.js'

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Appointment Day</span>
          <h2>
            What to expect — <em>a clear four-step flow</em>
          </h2>
          <p>Designed to protect your hair and your time, from arrival to the final glossy finish.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.id} className="process-card reveal">
              <div className="process-num">{step.id}</div>
              <div className="process-time">{step.time}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
