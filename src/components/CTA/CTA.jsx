import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedSection from '../shared/AnimatedSection'
import styles from './CTA.module.css'

const communities = [
  { flag: '\u{1F1EE}\u{1F1F3}', label: 'India / Global', href: 'https://t.me/gymtext_bot' },
  { flag: '\u{1F1FA}\u{1F1E6}', label: 'Ukraine', href: 'https://t.me/gymtext_bot' },
  { flag: '\u{1F1E7}\u{1F1F7}', label: 'Brazil', href: 'https://t.me/gymtext_bot' },
]

function StaggeredPill({ community, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={community.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.pill}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span className={styles.flag}>{community.flag}</span>
      <span className={styles.pillText}>
        <span className={styles.pillLabel}>{community.label}</span>
        <span className={styles.pillSub}>Telegram channel</span>
      </span>
    </motion.a>
  )
}

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <AnimatedSection as="div" className={styles.header}>
          <h2 className={styles.headline}>
            We're building a worldwide gym community
          </h2>
          <p className={styles.subtitle}>
            Join your local Telegram channel for workout tips and updates.
            Each channel has a community group chat where members share progress,
            motivate each other, and keep each other accountable.
          </p>
        </AnimatedSection>

        <div className={styles.buttons}>
          {communities.map((c, i) => (
            <StaggeredPill key={c.label} community={c} index={i} />
          ))}
        </div>

        <AnimatedSection as="p" className={styles.footnote} delay={0.3}>
          Channel for updates. Group chat for community. Bot for logging. All on Telegram.
        </AnimatedSection>
      </div>
    </section>
  )
}
