'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    icon: '🔍',
    title: 'Analisa',
    description: 'Joga o documento, a IA extrai tudo que importa',
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.1)',
    border: 'rgba(37,99,235,0.25)',
  },
  {
    icon: '🧮',
    title: 'Calcula',
    description: '18+ calculadoras especializadas em trabalhista, previdenciário e bancário',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.1)',
    border: 'rgba(124,58,237,0.25)',
  },
  {
    icon: '📅',
    title: 'Organiza',
    description: 'Agenda, clientes e tarefas em um só lugar',
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.1)',
    border: 'rgba(14,165,233,0.25)',
  },
]

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24" style={{ background: '#0E0E17' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            A Solução
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight"
          >
            Echojus é a plataforma jurídica com IA que{' '}
            <span className="gradient-text">trabalha enquanto você advogar.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="rounded-2xl p-8 text-center group hover:-translate-y-1 transition-transform duration-300"
              style={{ background: pillar.bg, border: `1px solid ${pillar.border}` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6"
                style={{ background: `${pillar.color}20` }}
              >
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
