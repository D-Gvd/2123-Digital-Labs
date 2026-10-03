'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const STATS = [
  { value: '120+', label: 'Projects delivered' },
  { value: '98%',  label: 'Client satisfaction' },
  { value: '4×',   label: 'Average ROI on campaigns' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const POINT_COUNT = 60
    const CONNECT_DIST = 140

    type Point = { x: number; y: number; vx: number; vy: number }
    let points: Point[] = []
    let W = 0, H = 0
    let animId: number

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const init = () => {
      points = Array.from({ length: POINT_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.45
            ctx.strokeStyle = `rgba(61,107,248,${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(96,200,255,0.5)'
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    const handleResize = () => { resize(); init() }
    window.addEventListener('resize', handleResize, { passive: true })
    resize(); init(); draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="hero" className={styles.section}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.tag}>IT &amp; Digital Marketing Partner</div>

        <h1 className={styles.headline}>
          We build the<br />systems that<br /><em>grow businesses.</em>
        </h1>

        <p className={styles.sub}>
          From robust IT infrastructure to precision digital campaigns — we
          deliver end-to-end solutions that connect technology with measurable
          results.
        </p>

        <div className={styles.actions}>
          <a href="#services" className="btnPrimary">Explore our services</a>
          <a href="#cta"      className="btnGhost">Book a discovery call</a>
        </div>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
