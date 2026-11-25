'use client'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/* Mockup deitado em 3D que "levanta" conforme a página rola. */
export default function ScrollTilt({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useSpring(scrollY, { stiffness: 140, damping: 28, mass: 0.4 })
  const rotateX = useTransform(y, [0, 420], [18, 0])
  const scale = useTransform(y, [0, 420], [0.95, 1])

  return (
    <motion.div style={reduce ? undefined : { rotateX, scale, transformPerspective: 1100, transformOrigin: '50% 0%' }}>
      {children}
    </motion.div>
  )
}
