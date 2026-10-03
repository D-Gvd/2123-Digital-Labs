import styles from './WhyUs.module.css'

const REASONS = [
  {
    icon: '⚡',
    title: 'Integrated by design',
    body: 'Your IT stack and marketing channels are planned together from day one, so they amplify each other instead of operating in silos.',
  },
  {
    icon: '📊',
    title: 'Transparent reporting',
    body: 'No black boxes. You get a live dashboard, monthly reviews, and plain-language breakdowns of exactly what\'s working and what we\'re adjusting.',
  },
  {
    icon: '🤝',
    title: 'Direct access to the founders',
    body: 'As a startup, you deal with us — not an account manager layer. We\'re accountable and you\'ll always know who\'s responsible for your work.',
  },
  {
    icon: '🚀',
    title: 'Designed to scale with you',
    body: 'Our engagements grow as your needs do. Whether you\'re launching or expanding, the systems we build can carry the next stage.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      {/* Orbital visual */}
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.ring} />
        <div className={styles.ring} />
        <div className={styles.ring} />
        <div className={styles.center}>
          <span className={styles.centerValue}>6+</span>
          <span className={styles.centerSub}>years combined expertise</span>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="sectionLabel">Why Nexus Digital</p>
        <h2 className={styles.heading}>
          Built by practitioners,<br />not generalists.
        </h2>
        <p className={styles.intro}>
          We started this to do the work properly — with real ownership, clear
          communication, and outcomes you can track.
        </p>
        <ul className={styles.list}>
          {REASONS.map((r) => (
            <li key={r.title} className={styles.item}>
              <div className={styles.check}>{r.icon}</div>
              <div>
                <h4>{r.title}</h4>
                <p>{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
