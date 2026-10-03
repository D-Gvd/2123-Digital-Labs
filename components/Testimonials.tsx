import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    initials: 'MR',
    name: 'Marco Reyes',
    role: 'CEO, Pinnacle Logistics',
    quote:
      'Nexus rebuilt our entire network infrastructure while running a lead-gen campaign at the same time. The coordination was seamless — and organic traffic is up 180% in six months.',
  },
  {
    initials: 'SC',
    name: 'Sophia Chen',
    role: 'Founder, Bloom Retail Co.',
    quote:
      "We\'d worked with agencies before who promised everything and delivered little. Nexus came in, set realistic expectations, and then beat them. Our cost per acquisition dropped by 40%.",
  },
  {
    initials: 'JD',
    name: 'James Dela Cruz',
    role: 'COO, TerraFin Solutions',
    quote:
      'The cloud migration alone saved us ₱1.2M a year. When you add the paid media performance on top, the ROI case practically writes itself.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <p className="sectionLabel">Client stories</p>
      <h2 className={styles.heading}>
        Results our clients<br />are proud to share.
      </h2>
      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
