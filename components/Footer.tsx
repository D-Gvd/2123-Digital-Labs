import Link from 'next/link'
import styles from './Footer.module.css'

const LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'About',        href: '#why' },
  { label: 'Process',      href: '#process' },
  { label: 'Clients',      href: '#testimonials' },
  { label: 'Contact',      href: '#cta' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        Nexus<span>.</span>Digital
      </Link>
      <ul className={styles.links}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <span className={styles.copy}>
        &copy; {year} Nexus Digital. All rights reserved.
      </span>
    </footer>
  )
}
