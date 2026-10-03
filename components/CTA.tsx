import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.inner}>
        <p className="sectionLabel">Let&apos;s talk</p>
        <h2 className={styles.heading}>Ready to build something that lasts?</h2>
        <p className={styles.sub}>
          Tell us where you&apos;re headed. We&apos;ll map out how to get you there —
          no obligation, no jargon.
        </p>
        <div className={styles.actions}>
          <a href="mailto:andmnda@gmail.com" className="btnPrimary">
            Send us a message
          </a>
          <a href="#services" className="btnGhost">See our services</a>
        </div>
      </div>
    </section>
  )
}
