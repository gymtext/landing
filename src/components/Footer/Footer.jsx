import AnimatedSection from '../shared/AnimatedSection'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.rule} />
      <AnimatedSection as="div" className={styles.inner}>
        <img src="./favicon.svg" alt="GymText" className={styles.logoIcon} />
        <p className={styles.tagline}>
          Free forever. No app to download. Just Telegram.
        </p>
        <a
          href="https://t.me/gymtext_bot"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          @gymtext_bot
        </a>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} GymText
        </p>
      </AnimatedSection>
    </footer>
  )
}
