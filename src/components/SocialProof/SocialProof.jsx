import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedSection from '../shared/AnimatedSection'
import styles from './SocialProof.module.css'

const stats = [
  { value: '1,000+', label: 'workouts logged' },
  { value: '3s', label: 'average log time' },
  { value: '0', label: 'apps downloaded' },
]

const cards = [
  'Branded image example 1',
  'Branded image example 2',
  'Branded image example 3',
]

function StaggeredCard({ children, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimatedSection as="div" className={styles.header}>
          <h2 className={styles.headline}>
            Your gym. Your stats. Your style.
          </h2>
          <p className={styles.subtitle}>
            Every workout becomes a branded story worth sharing.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {cards.map((label, i) => (
            <StaggeredCard key={label} index={i}>
              <span className={styles.cardLabel}>{label}</span>
            </StaggeredCard>
          ))}
        </div>

        <AnimatedSection as="div" className={styles.stats} delay={0.2}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
