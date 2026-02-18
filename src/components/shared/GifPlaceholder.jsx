import { motion } from 'motion/react'

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    aspectRatio: '9 / 16',
    maxWidth: '320px',
    border: '2px dashed var(--color-border)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-4)',
    background: 'var(--color-bg-elevated)',
    overflow: 'hidden',
  },
  icon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'var(--color-accent-dim)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-accent)',
    fontSize: '20px',
  },
  label: {
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    color: 'var(--color-text-muted)',
    textAlign: 'center',
    padding: '0 var(--space-6)',
  },
}

export default function GifPlaceholder({ label = 'Demo GIF goes here' }) {
  return (
    <motion.div
      style={styles.container}
      whileHover={{ borderColor: 'var(--color-accent)', scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div style={styles.icon}>▶</div>
      <span style={styles.label}>{label}</span>
    </motion.div>
  )
}
