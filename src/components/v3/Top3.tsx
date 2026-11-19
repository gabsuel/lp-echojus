'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ConversasMock, Logo } from '@/components/mockups/Mockups'
import { SITE } from '@/lib/config'
import Ripples from './Ripples'
import { INK, PAPER, BLUE, SERIF } from './tokens'

const links = [
  { label: 'Um dia no escritório', href: '#dia' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export function Header3() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5" aria-label="EchoChat">
          <Logo size={34} />
          <span className="text-2xl" style={{ ...SERIF, color: INK }}>EchoChat</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ color: INK }}>{l.label}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <a href={SITE.loginUrl} className="text-sm font-medium" style={{ color: INK }}>Entrar</a>
          <a href={SITE.signupUrl} className="text-sm font-semibold text-white px-5 py-2.5 rounded-md" style={{ background: INK }}>Testar grátis</a>
        </div>
        <button className="lg:hidden p-2" style={{ color: INK }} onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden mx-4 rounded-xl p-4 flex flex-col shadow-xl" style={{ background: '#fff' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm font-medium" style={{ color: INK }}>{l.label}</a>
          ))}
          <a href={SITE.signupUrl} className="mt-2 text-center text-sm font-semibold text-white py-3 rounded-md" style={{ background: INK }}>Testar grátis</a>
        </div>
      )}
    </header>
  )
}

const EASE = [0.22, 1, 0.36, 1] as const

function Bubble({ className, text, who, delay }: { className: string; text: string; who: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.9 + delay, duration: 0.5, ease: EASE }}
      className={`absolute hidden md:block rounded-2xl px-4 py-3 shadow-xl max-w-[230px] ${className}`}
      style={{ background: '#fff', border: '1px solid rgba(12,26,51,0.08)' }}
    >
      <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: BLUE }}>{who}</div>
      <div className="mt-1 text-[13px] leading-snug" style={{ color: INK }}>{text}</div>
    </motion.div>
  )
}

export function Hero3() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24" style={{ background: PAPER }}>
      <Ripples className="absolute -right-60 -top-40 w-[1000px] h-[1000px]" opacity={0.2} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-sm font-semibold tracking-wide uppercase mb-6"
            style={{ color: BLUE }}
          >
            CRM + gestão processual · advocacia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="leading-[0.98] tracking-tight"
            style={{ ...SERIF, color: INK, fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}
          >
            Seu escritório responde.
            <br />
            <em style={{ color: BLUE }}>O prazo, também.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="mt-7 text-lg leading-relaxed max-w-md"
            style={{ color: '#4a5878' }}
          >
            Atendimento no WhatsApp e Instagram, funil de clientes, publicações dos tribunais e processos.
            Um cadastro só para cada cliente.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a href={SITE.signupUrl} className="text-white font-semibold px-7 py-3.5 rounded-md" style={{ background: BLUE, boxShadow: '0 12px 30px rgba(37,99,235,0.35)' }}>
              Testar grátis
            </a>
            <a href={SITE.whatsappUrl} className="font-semibold underline underline-offset-8 decoration-2" style={{ color: INK, textDecorationColor: BLUE }}>
              Falar com a equipe →
            </a>
          </motion.div>
          <p className="mt-6 text-sm" style={{ color: '#6b7794' }}>Sem cartão de crédito · Sem fidelidade</p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="lg:col-span-7 relative lg:-mr-24"
        >
          <div className="rounded-2xl" style={{ boxShadow: '0 40px 90px -20px rgba(12,26,51,0.35)' }}>
            <ConversasMock />
          </div>
          <Bubble className="-left-10 -top-6" who="Novo contato · Instagram" text="Oi, fui demitido e queria saber meus direitos." delay={0} />
          <Bubble className="left-10 -bottom-8" who="Robô EchoChat" text="Posso te ajudar. Em que cidade você trabalhava?" delay={0.35} />
        </motion.div>
      </div>
    </section>
  )
}
