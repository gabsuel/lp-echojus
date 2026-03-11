'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: '🚀',
    title: 'Crie sua conta',
    description: 'Cadastre-se em menos de 2 minutos. Sem cartão de crédito, sem burocracia. Acesso imediato a todas as ferramentas.',
  },
  {
    number: '02',
    icon: '📄',
    title: 'Importe seus documentos',
    description: 'Faça upload dos documentos do seu cliente. A IA analisa e extrai tudo que importa em segundos.',
  },
  {
    number: '03',
    icon: '⚡',
    title: 'Trabalhe com resultado',
    description: 'Use os resultados para fechar casos, calcular valores e organizar seu escritório. Mais tempo para o que realmente importa.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
              Como funciona
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Em 3 passos simples
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Sem curva de aprendizado. Sem configuração complicada. Do cadastro ao primeiro resultado em minutos.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed connector line (desktop only) */}
          <div
            className="absolute top-16 left-1/6 right-1/6 h-px border-t-2 border-dashed border-slate-200 hidden md:block"
            style={{ left: '16.66%', right: '16.66%' }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Number + Icon */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md border border-slate-100 bg-white"
                  >
                    {step.icon}
                  </div>
                  <div
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Step number text */}
                <div
                  className="text-5xl font-extrabold mb-2 leading-none"
                  style={{
                    background: 'linear-gradient(135deg,#2563EB,#7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="#precos"
            className="btn-gradient inline-block text-white font-semibold px-8 py-4 rounded-full text-base"
          >
            Criar conta grátis — sem cartão
          </a>
          <p className="text-slate-400 text-sm mt-3">7 dias de acesso completo, sem custo</p>
        </motion.div>
      </div>
    </section>
  )
}
