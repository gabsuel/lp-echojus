'use client'
import { useState } from 'react'
import Reveal, { SectionTitle } from '@/components/ui/Reveal'
import { SITE } from '@/lib/config'

// ⚠️ PROPOSTA DE PLANOS — valores e limites são sugestões e precisam ser validados
// com custo real (WhatsApp, IA, monitoramento de processos) antes de publicar.
export const plans = [
  {
    name: 'Essencial',
    monthly: 'R$ 197',
    annual: 'R$ 157',
    description: 'Para o advogado que quer sair do WhatsApp pessoal e organizar o atendimento',
    cta: 'Começar teste grátis',
    highlight: false,
    href: SITE.signupUrl,
    features: [
      { label: 'Números de WhatsApp', value: '1' },
      { label: 'Usuários', value: 'Até 2' },
      { label: 'Conversas + Kanban + Agenda', value: true },
      { label: 'Robô de atendimento', value: 'Básico' },
      { label: 'Publicações e prazos', value: false },
      { label: 'Processos monitorados', value: false },
      { label: 'Echo IA e Radar de comarcas', value: false },
      { label: 'Suporte', value: 'Chat' },
    ],
  },
  {
    name: 'Escritório',
    monthly: 'R$ 397',
    annual: 'R$ 317',
    description: 'Para escritórios que querem captar, atender e controlar prazos no mesmo lugar',
    cta: 'Começar teste grátis',
    highlight: true,
    badge: 'Mais escolhido',
    href: SITE.signupUrl,
    features: [
      { label: 'Números de WhatsApp', value: 'Até 3' },
      { label: 'Usuários', value: 'Até 5' },
      { label: 'Conversas + Kanban + Agenda', value: true },
      { label: 'Robôs de IA', value: 'Completos' },
      { label: 'Publicações e prazos', value: true },
      { label: 'Processos monitorados', value: 'Até 500' },
      { label: 'Echo IA e Radar de comarcas', value: false },
      { label: 'Suporte', value: 'Prioritário' },
    ],
  },
  {
    name: 'Banca',
    monthly: 'R$ 797',
    annual: 'R$ 637',
    description: 'Para bancas com equipe grande e volume alto de processos e leads',
    cta: 'Falar com a equipe',
    highlight: false,
    href: SITE.whatsappUrl,
    features: [
      { label: 'Números de WhatsApp', value: 'Até 10' },
      { label: 'Usuários', value: 'Até 15' },
      { label: 'Conversas + Kanban + Agenda', value: true },
      { label: 'Robôs de IA', value: 'Completos' },
      { label: 'Publicações e prazos', value: true },
      { label: 'Processos monitorados', value: 'Até 3.000' },
      { label: 'Echo IA e Radar de comarcas', value: true },
      { label: 'Suporte', value: 'Dedicado + onboarding 1:1' },
    ],
  },
]

function FeatureRow({ label, value }: { label: string; value: string | boolean }) {
  return (
    <li className="flex items-center justify-between gap-3 py-2.5 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <span className="text-sm text-gray-400">{label}</span>
      {typeof value === 'boolean' ? (
        <span style={{ color: value ? '#86efac' : '#4b5563' }} className="font-bold">{value ? '✓' : '✗'}</span>
      ) : (
        <span className="text-sm text-white font-medium text-right">{value}</span>
      )}
    </li>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="precos" className="py-28 relative overflow-hidden" style={{ background: '#04040b' }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,124,246,0.14), transparent 70%)' }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Planos"
          title={
            <>
              Escolha o plano{' '}
              <span className="serif-accent" style={{ fontSize: '1.1em' }}>do seu escritório</span>
            </>
          }
          sub="Teste grátis, sem cartão. Evolua de plano quando a operação crescer."
        />

        <div className="flex items-center justify-center gap-3 -mt-6 mb-12">
          <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>Mensal</span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label="Alternar cobrança anual"
            className="relative w-12 h-6 rounded-full transition-colors duration-300"
            style={{ background: annual ? 'linear-gradient(90deg,#7c7cf6,#b9b9ff)' : 'rgba(255,255,255,0.15)' }}
          >
            <span
              className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300"
              style={{ transform: annual ? 'translateX(26px)' : 'translateX(4px)' }}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
            Anual{' '}
            <span className="text-xs font-semibold ml-1 px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(134,239,172,0.12)', color: '#86efac' }}>-20%</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className="h-full rounded-2xl p-6 flex flex-col relative"
                style={
                  plan.highlight
                    ? {
                        background: 'linear-gradient(180deg, rgba(40,32,100,0.7), rgba(10,10,28,0.95))',
                        border: '1px solid rgba(185,185,255,0.5)',
                        boxShadow: '0 10px 60px rgba(124,124,246,0.25)',
                      }
                    : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)' }
                }
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="btn-lavender text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap inline-block">{plan.badge}</span>
                  </div>
                )}

                <div className="mb-5 mt-2">
                  <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm min-h-[40px]">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">{annual ? plan.annual : plan.monthly}</span>
                    <span className="text-gray-500 text-sm mb-1.5">/mês</span>
                  </div>
                  {annual && <p className="text-xs text-gray-500 mt-1">cobrado anualmente</p>}
                </div>

                <ul className="flex-1 mb-6">
                  {plan.features.map((f) => (
                    <FeatureRow key={f.label} label={f.label} value={f.value} />
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`block text-center font-semibold py-3 rounded-xl text-sm ${plan.highlight ? 'btn-lavender' : 'btn-outline-dark'}`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center mt-10 text-gray-500 text-sm">
          Teste grátis · Cancele quando quiser · Configuração assistida pela nossa equipe
        </p>
      </div>
    </section>
  )
}
