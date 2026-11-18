'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  sub,
  light = false,
}: {
  eyebrow?: string
  title: React.ReactNode
  sub?: string
  light?: boolean
}) {
  return (
    <Reveal className="text-center max-w-3xl mx-auto mb-14">
      {eyebrow && (
        <span
          className="chip mb-5"
          style={light ? { background: '#fff', color: '#0f172a', borderColor: '#e2e8f0' } : {}}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]"
        style={{ color: light ? '#0b0b14' : '#fff' }}
      >
        {title}
      </h2>
      {sub && <p className="text-lg mt-5" style={{ color: light ? '#64748b' : '#9ca3af' }}>{sub}</p>}
    </Reveal>
  )
}
