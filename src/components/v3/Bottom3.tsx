'use client'
import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { Logo } from '@/components/mockups/Mockups'
import { plans } from '@/components/sections/Pricing'
import { faqs } from '@/components/sections/FAQ'
import { SITE } from '@/lib/config'
import Ripples from './Ripples'
import { INK, PAPER, BLUE, SERIF } from './tokens'

export function Pricing3() {
  const [annual, setAnnual] = useState(false)
  return (
    <section id="planos" className="py-28" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: BLUE }}>Planos</p>
          <h2 className="mt-4 leading-[1.02] tracking-tight" style={{ ...SERIF, color: INK, fontSize: 'clamp(2.2rem, 3.8vw, 3.3rem)' }}>
            Do advogado solo <em style={{ color: BLUE }}>à banca.</em>
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#4a5878' }}>Teste grátis, sem cartão. Evolua quando a operação crescer.</p>
        </div>

        <div className="flex justify-center my-10">
          <div className="inline-flex items-center gap-4 text-sm font-medium" style={{ color: INK }}>
            <span style={{ opacity: annual ? 0.5 : 1 }}>Mensal</span>
            <button
              onClick={() => setAnnual(!annual)}
              role="switch"
              aria-checked={annual}
              aria-label="Cobrança anual"
              className="relative w-14 h-8 rounded-full transition-colors"
              style={{ background: annual ? BLUE : '#cbd3e3' }}
            >
              <span className="absolute top-1 w-6 h-6 rounded-full bg-white transition-all" style={{ left: annual ? 28 : 4 }} />
            </button>
            <span style={{ opacity: annual ? 1 : 0.5 }}>Anual <b style={{ color: BLUE }}>−20%</b></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => {
            const dark = !!p.highlight
            return (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <div
                  className="h-full rounded-3xl p-8 flex flex-col relative"
                  style={dark ? { background: INK, color: '#fff', boxShadow: '0 30px 70px -20px rgba(12,26,51,0.5)' } : { background: PAPER, color: INK, border: '1px solid rgba(12,26,51,0.08)' }}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-8 text-xs font-bold text-white px-3 py-1 rounded-full" style={{ background: BLUE }}>{p.badge}</span>
                  )}
                  <h3 className="text-3xl" style={SERIF}>{p.name}</h3>
                  <p className="mt-2 text-sm min-h-[40px]" style={{ opacity: 0.7 }}>{p.description}</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-6xl leading-none" style={SERIF}>{annual ? p.annual : p.monthly}</span>
                    <span className="mb-1 opacity-60">/mês</span>
                  </div>
                  {annual && <p className="text-xs mt-1 opacity-60">cobrado anualmente</p>}
                  <ul className="mt-7 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3 text-sm" style={{ opacity: f.value === false ? 0.4 : 1 }}>
                        <span className="mt-0.5 font-bold" style={{ color: dark ? '#93c5fd' : BLUE }}>{f.value === false ? '–' : '✓'}</span>
                        <span>
                          {f.label}
                          {typeof f.value === 'string' && <b className="font-semibold"> · {f.value}</b>}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.href}
                    className="mt-8 block text-center font-semibold py-3.5 rounded-md text-sm"
                    style={dark ? { background: BLUE, color: '#fff' } : { border: `1.5px solid ${INK}`, color: INK }}
                  >
                    {p.cta}
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FAQ3() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="duvidas" className="py-28" style={{ background: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: BLUE }}>Dúvidas</p>
          <h2 className="mt-4 leading-[1.02] tracking-tight" style={{ ...SERIF, color: INK, fontSize: 'clamp(2.1rem, 3.4vw, 3rem)' }}>
            O que os advogados <em style={{ color: BLUE }}>perguntam.</em>
          </h2>
          <p className="mt-4" style={{ color: '#4a5878' }}>
            Não achou a sua? <a href={SITE.whatsappUrl} className="font-semibold underline underline-offset-4" style={{ color: INK }}>Fale com a gente</a>.
          </p>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => {
            const on = open === i
            return (
              <div key={f.q} style={{ borderTop: '1px solid rgba(12,26,51,0.15)', borderBottom: i === faqs.length - 1 ? '1px solid rgba(12,26,51,0.15)' : undefined }}>
                <button onClick={() => setOpen(on ? null : i)} className="w-full flex items-center justify-between gap-6 text-left py-6" aria-expanded={on}>
                  <span className="text-xl leading-snug" style={{ ...SERIF, color: INK }}>{f.q}</span>
                  <span className="text-2xl shrink-0" style={{ color: BLUE }}>{on ? '−' : '+'}</span>
                </button>
                {on && <p className="pb-6 pr-10 leading-relaxed" style={{ color: '#4a5878' }}>{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CTA3() {
  return (
    <section className="relative overflow-hidden py-28 text-center" style={{ background: BLUE }}>
      <Ripples className="absolute left-1/2 -translate-x-1/2 -top-72 w-[1200px] h-[1200px]" color="#fff" opacity={0.3} count={9} />
      <div className="relative max-w-3xl mx-auto px-4">
        <h2 className="leading-[1] tracking-tight text-white" style={{ ...SERIF, fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
          Seu próximo cliente <em>já está no WhatsApp.</em>
        </h2>
        <p className="mt-5 text-lg text-blue-100">Comece a atender e a controlar prazos hoje mesmo.</p>
        <div className="mt-9 flex flex-wrap gap-4 justify-center">
          <a href={SITE.signupUrl} className="font-semibold px-8 py-4 rounded-md bg-white" style={{ color: INK }}>Testar grátis</a>
          <a href={SITE.whatsappUrl} className="font-semibold px-8 py-4 rounded-md text-white" style={{ border: '1.5px solid rgba(255,255,255,0.6)' }}>Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export function Footer3() {
  return (
    <footer style={{ background: INK, color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo size={34} />
            <span className="text-2xl" style={SERIF}>EchoChat</span>
          </div>
          <p className="mt-4 text-sm text-blue-100/60 max-w-xs">CRM e gestão processual para advogados: atendimento, prazos e processos em um só lugar.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Produto</h4>
          <ul className="space-y-2 text-sm text-blue-100/70">
            <li><a href="#dia" className="hover:text-white">Um dia no escritório</a></li>
            <li><a href="#recursos" className="hover:text-white">Recursos</a></li>
            <li><a href="#planos" className="hover:text-white">Planos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Conta</h4>
          <ul className="space-y-2 text-sm text-blue-100/70">
            <li><a href={SITE.loginUrl} className="hover:text-white">Entrar</a></li>
            <li><a href={SITE.signupUrl} className="hover:text-white">Testar grátis</a></li>
            <li><a href={SITE.whatsappUrl} className="hover:text-white">Falar com vendas</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-blue-100/40" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        © {new Date().getFullYear()} EchoChat. Todos os direitos reservados.
      </div>
    </footer>
  )
}
