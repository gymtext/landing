import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import styles from './App.module.css'

const WowSection = lazy(() => import('./components/WowSection/WowSection'))
const SocialProof = lazy(() => import('./components/SocialProof/SocialProof'))
const Summary = lazy(() => import('./components/Summary/Summary'))
const CTA = lazy(() => import('./components/CTA/CTA'))
const Footer = lazy(() => import('./components/Footer/Footer'))

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.noise} aria-hidden="true" />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <WowSection />
        <SocialProof />
        <Summary />
        <CTA />
        <Footer />
      </Suspense>
    </div>
  )
}
