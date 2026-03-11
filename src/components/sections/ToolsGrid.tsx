'use client'
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Category = 'Todas' | 'Trabalhista' | 'Previdenciário' | 'Bancário'

const tools: { name: string; category: Exclude<Category, 'Todas'>; icon: string }[] = [
  { name: 'Rescisão Contratual', category: 'Trabalhista', icon: '🧾' },
  { name: 'Horas Extras', category: 'Trabalhista', icon: '⏰' },
  { name: 'Adicional Noturno', category: 'Trabalhista', icon: '🌙' },
  { name: 'FGTS + Multa', category: 'Trabalhista', icon: '💰' },
  { name: 'Férias', category: 'Trabalhista', icon: '🏖️' },
  { name: '13º Salário', category: 'Trabalhista', icon: '🎁' },
  { name: 'Aviso Prévio', category: 'Trabalhista', icon: '📢' },
  { name: 'Insalubridade / Periculosidade', category: 'Trabalhista', icon: '⚠️' },
  { name: 'Revisão do Benefício', category: 'Previdenciário', icon: '🔄' },
  { name: 'BPC / LOAS', category: 'Previdenciário', icon: '🤝' },
  { name: 'Aposentadoria por Idade', category: 'Previdenciário', icon: '👴' },
  { name: 'Aposentadoria por Tempo', category: 'Previdenciário', icon: '📆' },
  { name: 'Salário-Maternidade', category: 'Previdenciário', icon: '👶' },
  { name: 'Pensão por Morte', category: 'Previdenciário', icon: '🕊️' },
  { name: 'Análise de Extrato', category: 'Bancário', icon: '🔍' },
  { name: 'Juros Abusivos', category: 'Bancário', icon: '📈' },
  { name: 'Revisão de Contrato', category: 'Bancário', icon: '✍️' },
  { name: 'CDC / Superendividamento', category: 'Bancário', icon: '⚖️' },
]

const categoryStyles: Record<Exclude<Category, 'Todas'>, { badgeBg: string; badgeText: string }> = {
  Trabalhista: { badgeBg: '#EEF2FF', badgeText: '#2563EB' },
  Previdenciário: { badgeBg: '#F5F3FF', badgeText: '#7C3AED' },
  Bancário: { badgeBg: '#F0F9FF', badgeText: '#0284C7' },
}

const filters: Category[] = ['Todas', 'Trabalhista', 'Previdenciário', 'Bancário']

const filterLabels: Record<Category, string> = {
  Todas: 'Todas',
  Trabalhista: 'Trabalhista',
  Previdenciário: 'Previdenciário',
  Bancário: 'Bancário / Consumidor',
}

export default function ToolsGrid() {
  const [active, setActive] = useState<Category>('Todas')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'Todas' ? tools : tools.filter((t) => t.category === active)

  return (
    <section id="ferramentas" ref={ref} className="py-24" style={{ background: '#F8FAFF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
              18+ Ferramentas
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Uma ferramenta para cada situação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Do trabalhista ao bancário, temos a calculadora certa para cada causa. Todas atualizadas pela legislação vigente.
          </motion.p>
        </div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                active === f
                  ? { background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white' }
                  : { background: 'white', color: '#64748B', border: '1px solid #E2E8F0' }
              }
            >
              {filterLabels[f]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool) => {
              const style = categoryStyles[tool.category]
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.22 }}
                  className="group bg-white border border-slate-100 rounded-xl p-4 flex flex-col gap-2.5 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-sm font-semibold text-slate-800 leading-tight">{tool.name}</span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full self-start"
                    style={{ background: style.badgeBg, color: style.badgeText }}
                  >
                    {tool.category}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
