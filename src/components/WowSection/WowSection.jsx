import AnimatedSection from '../shared/AnimatedSection'
import GifPlaceholder from '../shared/GifPlaceholder'
import styles from './WowSection.module.css'

export default function WowSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <AnimatedSection as="div" className={styles.textBlock}>
          <div className={styles.divider} />
          <h2 className={styles.headline}>
            Share your results.<br />
            Look like a beast.
          </h2>
          <p className={styles.description}>
            Snap a selfie after your workout. GymText transforms it into a
            branded image with your stats overlaid — ready to share on
            Instagram, WhatsApp, or anywhere you flex.
          </p>
        </AnimatedSection>

        <AnimatedSection as="div" className={styles.gifWrapper} delay={0.2}>
          <GifPlaceholder label="Selfie → branded image demo" />
        </AnimatedSection>
      </div>
    </section>
  )
}
