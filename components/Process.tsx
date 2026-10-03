import styles from './Process.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    body: 'We audit what you have, understand your goals, and identify the gaps between where you are and where you want to be.',
  },
  {
    num: '02',
    title: 'Strategy',
    body: 'We build a cross-functional plan — technology architecture and marketing together — with clear milestones and success metrics.',
  },
  {
    num: '03',
    title: 'Execution',
    body: 'We build and launch with speed and precision. You get regular updates and the ability to give feedback at every stage.',
  },
  {
    num: '04',
    title: 'Optimise',
    body: 'Once live, we continuously measure, test, and refine — turning early results into consistent, compounding performance.',
  },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <p className="sectionLabel">How we work</p>
      <h2 className={styles.heading}>
        From brief to results,<br />in four stages.
      </h2>
      <div className={styles.grid}>
        {STEPS.map((s) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.num}>{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
