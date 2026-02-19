import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedSection from '../shared/AnimatedSection'
import TelegramButton from '../shared/TelegramButton'
import VideoSpinner from '../shared/VideoSpinner'
import styles from './Summary.module.css'

function VideoPlayer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.videoWrapper}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <VideoSpinner
        className={styles.video}
        src="https://gymtext-public.ams3.cdn.digitaloceanspaces.com/summary.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </motion.div>
  )
}

export default function Summary() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <AnimatedSection as="div" className={styles.textBlock}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Session recap
            </div>
            <h2 className={styles.headline}>
              Your training day.<br />
              Summarized.
            </h2>
            <p className={styles.subtitle}>
              After every session you get a clean summary of everything you
              crushed — sets, reps, volume, time. No manual tracking, no
              spreadsheets. Just results delivered straight to your chat.
            </p>
            <TelegramButton href="https://t.me/gymtext_bot">
              Try it free
            </TelegramButton>
          </AnimatedSection>

          <VideoPlayer />
        </div>
      </div>
    </section>
  )
}
