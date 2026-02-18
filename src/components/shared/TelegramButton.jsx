import { motion } from 'motion/react'

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-3)',
  padding: 'var(--space-3) var(--space-6)',
  borderRadius: '100px',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: '15px',
  textDecoration: 'none',
  transition: 'box-shadow 0.2s ease',
}

const variants = {
  primary: {
    background: 'var(--color-accent)',
    color: 'var(--color-bg)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-text)',
    border: '1.5px solid var(--color-border)',
  },
}

export default function TelegramButton({
  href,
  children,
  variant = 'primary',
  style,
  ...props
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...baseStyles, ...variants[variant], ...style }}
      whileHover={{
        scale: 1.04,
        boxShadow: variant === 'primary'
          ? '0 0 30px var(--color-accent-dim)'
          : '0 0 20px rgba(255,255,255,0.05)',
      }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
