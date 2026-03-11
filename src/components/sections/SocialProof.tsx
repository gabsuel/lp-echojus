'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

function Stat({
  value,
  suffix,
  label,
  delay,
  active,
}: {
  value: number
  suffix: string
  label: string
  delay: number
  active: boolean
}) {
  const count = useCountUp(value, 2000, active)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center px-8"
    >
      <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="text-slate-500 text-base">{label}</div>
    </motion.div>
  )
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-16"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 gap-0">
          <Stat value={1200} suffix="+" label="advogados ativos" delay={0} active={inView} />
          <Stat value={45000} suffix="+" label="documentos analisados" delay={0.1} active={inView} />
          <Stat value={8000} suffix="+" label="horas economizadas" delay={0.2} active={inView} />
        </div>
      </div>
    </section>
  )
}
