import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <div className={styles.inner}>
        <div className={styles.logo}>
          GYMTEXT<span className={styles.logoDot}>.</span>
        </div>
        <a href="https://t.me/gymtext_bot" target="_blank" rel="noopener noreferrer" className={styles.cta}>
          Start Free
        </a>
      </div>
    </motion.nav>
  )
}
