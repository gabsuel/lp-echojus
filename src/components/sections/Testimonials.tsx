'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    quote: 'Economizo pelo menos 4 horas por semana só com os cálculos de rescisão. O Echojus virou indispensável no meu escritório.',
    initials: 'MS',
    name: 'Maria Silva',
    role: 'Advogada Trabalhista, São Paulo',
    color: '#2563EB',
  },
  {
    stars: 5,
    quote: 'A análise de extrato bancário que antes levava 2 horas, agora faço em minutos. Consegui pegar 2 casos novos por semana.',
    initials: 'JS',
    name: 'João Santos',
    role: 'Advogado Bancário, Rio de Janeiro',
    color: '#7C3AED',
  },
  {
    stars: 5,
    quote: 'A agenda integrada com as calculadoras é o que diferencia. Nunca mais perdi uma audiência por erro de agenda.',
    initials: 'AC',
    name: 'Ana Costa',
    role: 'Advogada Previdenciária, Belo Horizonte',
    color: '#0284C7',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-base">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24" style={{ background: '#F8FAFF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: '#EEF2FF', color: '#2563EB' }}
            >
              Depoimentos
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            O que os advogados dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Resultados reais, de profissionais reais que usam o Echojus no dia a dia.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              <Stars count={t.stars} />
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
