'use client'
import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { Logo } from '@/components/mockups/Mockups'
import { plans } from '@/components/sections/Pricing'
import { faqs } from '@/components/sections/FAQ'
import { SITE } from '@/lib/config'
import { GROTESK } from './tokens'

/* ───────── Planos ───────── */
export function Pricing2() {
  const [annual, setAnnual] = useState(false)
  return (
    <section id="planos" className="py-28" style={{ background: '#060b14' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold text-cyan-400">Planos</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight" style={GROTESK}>
            Um plano para o tamanho do seu escritório.
          </h2>
          <p className="mt-4 text-slate-400">Teste grátis, sem cartão. Evolua quando a operação crescer.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1" style={{ background: '#0c1424', border: '1px solid rgba(148,163,184,0.16)' }}>
            {[false, true].map((v) => (
              <button
                key={String(v)}
                onClick={() => setAnnual(v)}
                className="px-5 py-2 text-sm font-semibold rounded-md transition"
                style={annual === v ? { background: '#2563eb', color: '#fff' } : { color: '#94a3b8' }}
              >
                {v ? 'Anual · -20%' : 'Mensal'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <div
                className="h-full rounded-2xl p-7 flex flex-col relative"
                style={
                  p.highlight
                    ? { background: 'linear-gradient(180deg, rgba(37,99,235,0.2), #0a1220 60%)', border: '1px solid rgba(59,130,246,0.6)', boxShadow: '0 20px 60px rgba(37,99,235,0.2)' }
                    : { background: '#0a1220', border: '1px solid rgba(148,163,184,0.16)' }
                }
              >
                {p.badge && (
                  <span className="absolute -top-3 right-6 text-xs font-bold text-white px-3 py-1 rounded-md" style={{ background: '#2563eb' }}>{p.badge}</span>
                )}
                <h3 className="text-xl font-bold text-white" style={GROTESK}>{p.name}</h3>
                <p className="mt-2 text-sm text-slate-400 min-h-[40px]">{p.description}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-bold text-white" style={GROTESK}>{annual ? p.annual : p.monthly}</span>
                  <span className="text-slate-500 mb-2">/mês</span>
                </div>
                {annual && <p className="text-xs text-slate-500 mt-1">cobrado anualmente</p>}

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5" style={{ color: f.value === false ? '#475569' : '#22d3ee' }}>{f.value === false ? '✗' : '✓'}</span>
                      <span style={{ color: f.value === false ? '#64748b' : '#cbd5e1' }}>
                        {f.label}
                        {typeof f.value === 'string' && <b className="text-white font-semibold"> · {f.value}</b>}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  className="mt-8 block text-center font-semibold py-3 rounded-lg text-sm transition"
                  style={p.highlight ? { background: '#2563eb', color: '#fff' } : { border: '1px solid rgba(148,163,184,0.3)', color: '#e2e8f0' }}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── FAQ ───────── */
export function FAQ2() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="py-28" style={{ background: '#080f1d' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-cyan-400">FAQ</span>
          <h2 className="mt-3 text-4xl font-bold text-white tracking-tight" style={GROTESK}>Perguntas frequentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const on = open === i
            return (
              <div key={f.q} className="rounded-xl overflow-hidden" style={{ background: '#0a1220', border: `1px solid ${on ? 'rgba(59,130,246,0.45)' : 'rgba(148,163,184,0.14)'}` }}>
                <button onClick={() => setOpen(on ? null : i)} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4" aria-expanded={on}>
                  <span className="font-medium text-white">{f.q}</span>
                  <span className="text-cyan-400 text-xl leading-none">{on ? '−' : '+'}</span>
                </button>
                {on && <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────── CTA + Footer ───────── */
export function CTA2() {
  return (
    <section className="py-24" style={{ background: '#060b14' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl px-6 py-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)' }}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight" style={GROTESK}>
              Seu próximo cliente já está no WhatsApp.
            </h2>
            <p className="mt-4 text-blue-100 text-lg">Comece a atender e a controlar prazos hoje mesmo.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href={SITE.signupUrl} className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-lg shadow-lg">Testar grátis</a>
              <a href={SITE.whatsappUrl} className="font-semibold text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition" style={{ border: '1px solid rgba(255,255,255,0.5)' }}>Falar no WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer2() {
  return (
    <footer style={{ background: '#04080f', borderTop: '1px solid rgba(148,163,184,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo size={30} />
            <span className="text-lg font-bold text-white" style={GROTESK}>EchoChat</span>
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-xs">CRM e gestão processual para advogados: atendimento, prazos e processos em um só lugar.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Produto</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#recursos" className="hover:text-white">Recursos</a></li>
            <li><a href="#fluxo" className="hover:text-white">Fluxo</a></li>
            <li><a href="#planos" className="hover:text-white">Planos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Conta</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href={SITE.loginUrl} className="hover:text-white">Entrar</a></li>
            <li><a href={SITE.signupUrl} className="hover:text-white">Testar grátis</a></li>
            <li><a href={SITE.whatsappUrl} className="hover:text-white">Falar com vendas</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-600" style={{ borderTop: '1px solid rgba(148,163,184,0.1)' }}>
        © {new Date().getFullYear()} EchoChat. Todos os direitos reservados.
      </div>
    </footer>
  )
}
