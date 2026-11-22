'use client'
import { useState } from 'react'
import Reveal, { SectionTitle } from '@/components/ui/Reveal'
import { SITE } from '@/lib/config'

// Planos e valores definidos pelo cliente (tabela de preços EchoChat).
// `from: true` = o preço é o início de uma faixa ("a partir de").
export const plans = [
  {
    name: 'Solo',
    monthly: 'R$ 147',
    annual: 'R$ 147',
    from: true,
    description: 'Advogado sozinho',
    cta: 'Assinar agora',
    highlight: false,
    href: SITE.signupUrl,
    features: [
      { label: 'Usuários', value: '1' },
      { label: 'Processos', value: '100' },
      { label: 'CRM de atendimento', value: true },
      { label: 'Petição', value: 'Cota mensal' },
    ],
  },
  {
    name: 'Escritório',
    monthly: 'R$ 297',
    annual: 'R$ 297',
    from: false,
    description: '2 a 3 advogados',
    cta: 'Assinar agora',
    highlight: true,
    badge: 'Mais escolhido',
    href: SITE.signupUrl,
    features: [
      { label: 'Usuários', value: '3' },
      { label: 'Processos', value: '300' },
      { label: 'CRM de atendimento', value: true },
      { label: 'Petição', value: 'Ampliada' },
      { label: 'Assinatura digital', value: true },
    ],
  },
  {
    name: 'Profissional',
    monthly: 'R$ 597',
    annual: 'R$ 597',
    from: true,
    description: 'Escritório com equipe',
    cta: 'Assinar agora',
    highlight: false,
    href: SITE.signupUrl,
    features: [
      { label: 'Usuários', value: '8' },
      { label: 'Processos', value: '1.500' },
      { label: 'CRM de atendimento', value: true },
      { label: 'Petição e assinatura digital', value: true },
      { label: 'Atendimento automático e robôs', value: true },
    ],
  },
  {
    name: 'Pleno',
    monthly: 'R$ 1.297',
    annual: 'R$ 1.297',
    from: true,
    description: 'Banca grande',
    cta: 'Assinar agora',
    highlight: false,
    href: SITE.signupUrl,
    features: [
      { label: 'Usuários', value: '20' },
      { label: 'Processos', value: '5.000' },
      { label: 'CRM de atendimento', value: true },
      { label: 'Petição e assinatura digital', value: true },
      { label: 'Atendimento automático e robôs', value: true },
    ],
  },
]

// Plano fora da tabela: proposta comercial.
export const customPlan = {
  name: 'Sob medida',
  description: 'Casos fora da tabela. Volume de usuários e processos contratado sob proposta.',
  cta: 'Pedir proposta',
  href: SITE.whatsappUrl,
}

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
          sub="Garantia de 7 dias: se não gostar, devolvemos o seu dinheiro."
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
          Garantia de 7 dias · Configuração assistida pela nossa equipe
        </p>
      </div>
    </section>
  )
}
