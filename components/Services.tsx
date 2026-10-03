import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🔧',
    title: 'IT Infrastructure',
    description:
      'Network setup, server management, and systems architecture designed for reliability and scale — so your team never slows down.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Migration, deployment, and management on AWS, GCP, and Azure. Secure, scalable cloud environments tailored to your workload.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description:
      'Vulnerability assessments, endpoint protection, and security protocols that protect your data and your clients\' trust.',
  },
  {
    icon: '📈',
    title: 'SEO & Content',
    description:
      'Technical SEO, content strategy, and editorial execution that compounds over time — driving organic traffic that converts.',
  },
  {
    icon: '🎯',
    title: 'Paid Media',
    description:
      'Precision ad campaigns on Google, Meta, and LinkedIn. We build, test, and optimise until every peso earns its place.',
  },
  {
    icon: '💻',
    title: 'Web & App Development',
    description:
      'Fast, accessible, conversion-focused websites and web apps — built with modern frameworks and handoff-ready for your team.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className="sectionLabel">What we do</p>
          <h2 className={styles.heading}>
            Full-stack solutions,<br />one reliable team.
          </h2>
        </div>
        <p className={styles.intro}>
          We don&apos;t specialise in one slice — we understand how technology
          and marketing connect, and we build both sides to work together.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
