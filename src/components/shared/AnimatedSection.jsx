import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  as = 'section',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const Component = motion.create(as)

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  )
}
