import { motion } from 'motion/react'
import TelegramButton from '../shared/TelegramButton'
import styles from './Hero.module.css'

const wordReveal = {
  hidden: { opacity: 0, y: '100%', clipPath: 'inset(100% 0 0 0)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 0.6,
      delay: 0.3 + i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

function AnimatedWord({ word, index, className }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
      <motion.span
        style={{ display: 'inline-block' }}
        className={className}
        variants={wordReveal}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const line1 = ['Log', 'your', 'workout', 'in']
  const accentWord = '3 seconds.'
  const line2 = ['Just', 'text', 'it.']

  let idx = 0

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.orb}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.headline}>
            {line1.map((w) => (
              <AnimatedWord key={idx} word={w + '\u00A0'} index={idx++} />
            ))}
            <AnimatedWord word={accentWord} index={idx++} className={styles.accent} />
            <br />
            {line2.map((w) => (
              <AnimatedWord key={idx} word={w + '\u00A0'} index={idx++} />
            ))}
          </h1>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            No app to download. It's just Telegram.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <TelegramButton href="https://t.me/gymtext_bot">
              Start Free
            </TelegramButton>
            <TelegramButton href="#how-it-works" variant="outline">
              See how it works
            </TelegramButton>
          </motion.div>
        </div>

        <motion.div
          className={styles.gifWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            className={styles.demoVideo}
            src="/logging.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </div>
    </section>
  )
}
