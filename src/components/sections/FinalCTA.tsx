'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 relative overflow-hidden" style={{ background: '#0F172A' }}>
      {/* Radial blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{ background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.3)', color: '#93C5FD' }}
          >
            🚀 Comece hoje mesmo
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Seu concorrente já está usando IA.{' '}
          <span className="gradient-text">E você?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Comece agora e veja o que o Echojus faz pelo seu escritório nos próximos 7 dias — sem risco, sem cartão de crédito.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <a
            href="#precos"
            className="btn-gradient inline-block text-white font-bold px-10 py-4 rounded-full text-lg"
          >
            Criar minha conta grátis
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500"
        >
          <span className="flex items-center gap-1.5">🔒 Dados seguros</span>
          <span className="flex items-center gap-1.5">✅ Sem cartão de crédito</span>
          <span className="flex items-center gap-1.5">🔄 Cancele quando quiser</span>
          <span className="flex items-center gap-1.5">💰 Devolução em 30 dias</span>
        </motion.div>
      </div>
    </section>
  )
}
