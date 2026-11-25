'use client'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { INK, SERIF } from './tokens'

const GRAD = 'linear-gradient(135deg,#2563eb,#0ea5e9)'

/* Passos ligados por uma linha que se preenche com a rolagem:
   vertical no celular, horizontal no desktop. */
export default function StepPath({ steps }: { steps: { t: string; d: string }[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })

  return (
    <div ref={ref} className="relative mt-10 sm:mt-14">
      <div className="lg:hidden absolute left-5 top-5 bottom-5 w-0.5 rounded-full" style={{ background: 'rgba(37,99,235,0.12)' }}>
        <motion.div className="h-full w-full rounded-full origin-top" style={{ background: GRAD, scaleY: progress }} />
      </div>
      <div className="hidden lg:block absolute top-5 left-5 right-[calc(25%-2.5rem)] h-0.5 rounded-full" style={{ background: 'rgba(37,99,235,0.12)' }}>
        <motion.div className="h-full w-full rounded-full origin-left" style={{ background: GRAD, scaleX: progress }} />
      </div>
      <ol className="relative grid lg:grid-cols-4 gap-7 lg:gap-5">
        {steps.map((x, i) => (
          <li key={x.t}>
            <Reveal delay={i * 0.05} className="flex lg:block gap-4">
              <span className="relative shrink-0 inline-flex w-10 h-10 rounded-xl items-center justify-center text-sm font-semibold text-white" style={{ background: GRAD, boxShadow: '0 0 0 6px #fff' }}>{i + 1}</span>
              <div>
                <h3 className="lg:mt-5 text-xl sm:text-2xl leading-10 lg:leading-tight" style={{ ...SERIF, color: INK }}>{x.t}</h3>
                <p className="mt-1 lg:mt-2 text-sm sm:text-base leading-relaxed" style={{ color: '#4a5878' }}>{x.d}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}
