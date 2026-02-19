import { useState } from 'react'
import styles from './VideoSpinner.module.css'

export default function VideoSpinner({ className, ...props }) {
  const [ready, setReady] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.spinner} ${ready ? styles.spinnerHidden : ''}`}>
        <div className={styles.ring} />
      </div>
      <video
        className={className}
        onCanPlay={() => setReady(true)}
        {...props}
      />
    </div>
  )
}
