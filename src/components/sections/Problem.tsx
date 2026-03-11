'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problems = [
  'Calcula rescisão em planilha do Excel',
  'Analisa extrato bancário página por página',
  'Esquece audiência porque não tem agenda integrada',
  'Perde horas revisando CNIS no papel',
  'Usa 4 ferramentas diferentes para um único caso',
]

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24" style={{ background: '#0A0A0F' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Você ainda faz isso?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 mb-12 text-lg"
        >
          A maioria dos advogados desperdiça horas por semana em tarefas que deveriam ser automáticas.
        </motion.p>

        <div className="space-y-3 max-w-xl mx-auto mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="flex items-center gap-4 rounded-xl px-5 py-4 text-left"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-xl flex-shrink-0">❌</span>
              <span className="text-slate-300 text-base">{problem}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-block rounded-2xl px-8 py-5"
          style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}
        >
          <p className="text-xl font-semibold text-white">
            Não é falta de competência.
          </p>
          <p className="text-blue-400 text-xl font-semibold">
            É falta de ferramenta certa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
