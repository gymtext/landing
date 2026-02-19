import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedSection from '../shared/AnimatedSection'
import styles from './WowSection.module.css'

const steps = [
  {
    number: '01',
    title: 'Snap a photo',
    desc: 'Done with your workout? Take a photo to remember the grind.',
    icon: '📸',
  },
  {
    number: '02',
    title: 'Send it to the bot',
    desc: 'Share your photo with @gymtext_bot on Telegram. That\'s it.',
    icon: '💬',
  },
  {
    number: '03',
    title: 'Get your infographic',
    desc: 'Instantly receive a branded image with your workout stats overlaid — ready to post.',
    icon: '🔥',
  },
]

function Step({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.step}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span className={styles.stepIcon}>{step.icon}</span>
      <div className={styles.stepContent}>
        <span className={styles.stepNumber}>{step.number}</span>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </motion.div>
  )
}

function TransformVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.transform}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.beforeAfter}>
        <div className={styles.card}>
          <img
            className={styles.cardImage}
            src="/pull-ups.png"
            alt="Your gym photo"
          />
          <span className={styles.cardTag}>Before</span>
        </div>

        <div className={styles.arrow}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div className={`${styles.card} ${styles.cardAccent}`}>
          <img
            className={styles.cardImage}
            src="/pull-ups-infographic.jpg"
            alt="Generated infographic"
          />
          <span className={styles.cardTagAccent}>After</span>
        </div>
      </div>

      <p className={styles.shareText}>
        Share on Instagram, WhatsApp, or anywhere you flex.
      </p>
    </motion.div>
  )
}

export default function WowSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <AnimatedSection as="div" className={styles.header}>
          <div className={styles.divider} />
          <h2 className={styles.headline}>
            Your workout.<br />
            Your infographic.
          </h2>
          <p className={styles.subtitle}>
            Turn any gym photo into a shareable infographic with your
            real workout stats. Three steps, zero effort.
          </p>
        </AnimatedSection>

        <div className={styles.flow}>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <Step key={step.number} step={step} index={i} />
            ))}
          </div>
          <TransformVisual />
        </div>
      </div>
    </section>
  )
}
