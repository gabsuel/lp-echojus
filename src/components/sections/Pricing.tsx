'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  {
    name: 'Básico',
    monthly: 'Grátis',
    annual: 'Grátis',
    description: 'Para começar a explorar o Echojus',
    cta: 'Criar conta grátis',
    highlight: false,
    features: [
      { label: 'Análise de documentos', value: 'Limitado (5/mês)' },
      { label: 'Calculadoras', value: '5 ferramentas' },
      { label: 'Agenda', value: 'Básica' },
      { label: 'Chat IA', value: false },
      { label: 'Clientes', value: 'Até 10' },
      { label: 'Suporte', value: 'Comunidade' },
    ],
  },
  {
    name: 'Essencial',
    monthly: 'R$ 97',
    annual: 'R$ 77',
    description: 'Para advogados que querem ganhar tempo todo dia',
    cta: 'Começar agora',
    highlight: true,
    badge: 'Mais popular',
    features: [
      { label: 'Análise de documentos', value: 'Ilimitada' },
      { label: 'Calculadoras', value: 'Todas (18+)' },
      { label: 'Agenda', value: 'Completa + integrações' },
      { label: 'Chat IA', value: true },
      { label: 'Clientes', value: 'Ilimitado' },
      { label: 'Suporte', value: 'Prioritário' },
    ],
  },
  {
    name: 'Parceiro',
    monthly: 'R$ 197',
    annual: 'R$ 157',
    description: 'Para escritórios que querem escalar com eficiência',
    cta: 'Falar com a equipe',
    highlight: false,
    features: [
      { label: 'Tudo do Essencial', value: true },
      { label: 'Multi-usuário', value: 'Até 5 usuários' },
      { label: 'Modelos IA', value: 'Avançados' },
      { label: 'Suporte', value: 'Dedicado' },
      { label: 'Onboarding', value: '1:1 via WhatsApp' },
      { label: 'Acesso antecipado', value: 'Novos módulos' },
    ],
  },
]

function FeatureRow({ label, value }: { label: string; value: string | boolean }) {
  return (
    <li className="flex items-center justify-between gap-3 py-2.5 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      {typeof value === 'boolean' ? (
        <span className={value ? 'text-green-500 font-bold' : 'text-slate-300'}>{value ? '✓' : '✗'}</span>
      ) : (
        <span className="text-sm text-slate-800 font-medium text-right">{value}</span>
      )}
    </li>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="precos" ref={ref} className="py-24" style={{ background: '#FFFFFF' }}>
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
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: '#FEF3C7', color: '#D97706', border: '1px solid #FDE68A' }}
            >
              🎯 Oferta Fundador — 40% OFF para os primeiros 100 assinantes
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Planos & Preços
          </motion.h2>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mt-6"
          >
            <span className={`text-sm font-medium ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Mensal</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors duration-300"
              style={{ background: annual ? 'linear-gradient(135deg,#2563EB,#7C3AED)' : '#E2E8F0' }}
            >
              <span
                className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300"
                style={{ transform: annual ? 'translateX(26px)' : 'translateX(4px)' }}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-slate-900' : 'text-slate-400'}`}>
              Anual{' '}
              <span className="text-xs font-semibold text-green-600 ml-1 bg-green-50 px-1.5 py-0.5 rounded-full">-20%</span>
            </span>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col relative"
              style={
                plan.highlight
                  ? {
                      background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg,#2563EB,#7C3AED) border-box',
                      border: '2px solid transparent',
                      boxShadow: '0 8px 40px rgba(37,99,235,0.15)',
                    }
                  : {
                      background: 'white',
                      border: '1px solid #E2E8F0',
                    }
              }
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="btn-gradient text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5 mt-3">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {annual ? plan.annual : plan.monthly}
                  </span>
                  {plan.monthly !== 'Grátis' && (
                    <span className="text-slate-400 text-sm mb-1.5">/mês</span>
                  )}
                </div>
                {annual && plan.monthly !== 'Grátis' && (
                  <p className="text-xs text-slate-400 mt-1">cobrado anualmente</p>
                )}
              </div>

              <ul className="flex-1 mb-6">
                {plan.features.map((f, fi) => (
                  <FeatureRow key={fi} label={f.label} value={f.value} />
                ))}
              </ul>

              <a
                href="#"
                className="block text-center font-semibold py-3 rounded-xl text-sm transition-all duration-200"
                style={
                  plan.highlight
                    ? { background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white' }
                    : { background: '#F8FAFF', color: '#475569', border: '1px solid #E2E8F0' }
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10 text-slate-400 text-sm"
        >
          🛡️ 7 dias grátis · Cancele quando quiser · Sem burocracia · Devolução integral em 30 dias se não gostar
        </motion.div>
      </div>
    </section>
  )
}
