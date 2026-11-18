'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ConversasMock, Logo } from '@/components/mockups/Mockups'
import { SITE } from '@/lib/config'

import { GROTESK, BLUE_GRAD } from './tokens'

const links = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Fluxo', href: '#fluxo' },
  { label: 'Comparativo', href: '#comparativo' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

export function Header2() {
  const [open, setOpen] = useState(false)
  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{ background: 'rgba(6,11,20,0.85)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(148,163,184,0.14)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/v2" className="flex items-center gap-2.5" aria-label="EchoChat">
          <Logo size={30} />
          <span className="text-lg font-bold text-white" style={GROTESK}>EchoChat</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={SITE.loginUrl} className="text-sm text-slate-300 hover:text-white px-3 py-2">Entrar</a>
          <a href={SITE.signupUrl} className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg" style={{ background: '#2563eb' }}>
            Testar grátis
          </a>
        </div>
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col" style={{ borderTop: '1px solid rgba(148,163,184,0.14)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-slate-300">{l.label}</a>
          ))}
          <a href={SITE.signupUrl} className="mt-2 text-center font-semibold text-white py-3 rounded-lg" style={{ background: '#2563eb' }}>
            Testar grátis
          </a>
        </div>
      )}
    </header>
  )
}

const EASE = [0.22, 1, 0.36, 1] as const

function Notice({ className, icon, title, sub, delay }: { className: string; icon: string; title: string; sub: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{ opacity: { delay: 0.8 + delay, duration: 0.5 }, y: { delay: 0.8 + delay, duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      className={`absolute hidden md:flex items-center gap-3 rounded-xl px-4 py-3 ${className}`}
      style={{ background: 'rgba(12,20,36,0.92)', border: '1px solid rgba(148,163,184,0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}
    >
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-xs font-semibold text-white">{title}</div>
        <div className="text-[11px] text-slate-400">{sub}</div>
      </div>
    </motion.div>
  )
}

export function Hero2() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#060b14' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 70% 30%, #000 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, #000 0%, transparent 70%)',
        }}
      />
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.14), transparent 65%)' }} />
      <div className="absolute top-20 -left-40 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.16), transparent 65%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold mb-6"
            style={{ background: 'rgba(59,130,246,0.12)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            CRM + gestão processual para advogados
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="font-bold text-white leading-[1.02] tracking-tight"
            style={{ ...GROTESK, fontSize: 'clamp(2.4rem, 4.6vw, 4rem)' }}
          >
            Nenhum lead sem resposta.
            <br />
            <span style={{ background: BLUE_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Nenhum prazo sem dono.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            Atenda no WhatsApp e Instagram, receba as publicações dos tribunais e acompanhe cada processo.
            Tudo no mesmo cadastro do cliente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={SITE.signupUrl} className="font-semibold text-white px-7 py-3.5 rounded-lg shadow-lg" style={{ background: '#2563eb', boxShadow: '0 10px 30px rgba(37,99,235,0.4)' }}>
              Testar grátis
            </a>
            <a href={SITE.whatsappUrl} className="font-semibold text-slate-200 px-7 py-3.5 rounded-lg hover:bg-white/5 transition" style={{ border: '1px solid rgba(148,163,184,0.3)' }}>
              Agendar demonstração
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"
          >
            {['Sem cartão de crédito', 'Configuração assistida', 'Sem fidelidade'].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="text-cyan-400">✓</span>{t}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="lg:col-span-6 relative"
        >
          <div className="absolute -inset-4 rounded-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.3), transparent 70%)', filter: 'blur(30px)' }} />
          <div className="relative" style={{ transform: 'perspective(1800px) rotateY(-6deg) rotateX(2deg)' }}>
            <ConversasMock />
          </div>
          <Notice className="-left-6 top-14" icon="⏰" title="Prazo vence em 2 dias" sub="TJAM · Intimação" delay={0} />
          <Notice className="-right-4 bottom-16" icon="🤖" title="Robô respondeu em 8s" sub="Novo lead · Consumidor" delay={0.4} />
        </motion.div>
      </div>
    </section>
  )
}

export function Channels() {
  const items = ['WhatsApp', 'Instagram', 'Facebook', 'TJ · TRF · TRT', 'Echo IA']
  return (
    <div style={{ background: '#060b14', borderTop: '1px solid rgba(148,163,184,0.1)', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
        <span className="text-slate-500">Conecta com</span>
        {items.map((i) => (
          <span key={i} className="font-semibold text-slate-300" style={GROTESK}>{i}</span>
        ))}
      </div>
    </div>
  )
}
