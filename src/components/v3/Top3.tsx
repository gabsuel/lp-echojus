'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ConversasMock, Logo } from '@/components/mockups/Mockups'
import { SITE } from '@/lib/config'
import Chip from './Chip'
import Icon from './Icon'
import { INK, SERIF } from './tokens'

const links = [
  { label: 'Perfis', href: '#perfis' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Comparativo', href: '#comparativo' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

const GRAD = 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)'

export function Header3() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-4">
      <div
        className="max-w-5xl mx-auto h-14 sm:h-16 pl-4 sm:pl-5 pr-2.5 sm:pr-3 flex items-center justify-between rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(20,36,70,0.86), rgba(12,26,51,0.74))',
          backdropFilter: 'blur(22px) saturate(160%)',
          WebkitBackdropFilter: 'blur(22px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.16)',
          boxShadow: '0 12px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.22)',
        }}
      >
        <a href="/" className="flex items-center gap-2" aria-label="EchoChat">
          <Logo size={30} />
          <span className="text-xl sm:text-2xl text-white" style={SERIF}>EchoChat</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href={SITE.loginUrl} className="text-sm font-medium text-white/90">Entrar</a>
          <a href={SITE.signupUrl} className="text-sm font-semibold text-white px-5 py-2.5 rounded-full" style={{ background: GRAD, boxShadow: '0 8px 22px rgba(37,99,235,0.45)' }}>Comece agora</a>
        </div>
        <button
          className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M5 9h14M5 15h14" />}
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="lg:hidden max-w-5xl mx-auto mt-2 rounded-3xl p-3 flex flex-col"
          style={{ background: 'rgba(12,26,51,0.92)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid rgba(255,255,255,0.14)' }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-3 text-sm font-medium text-white/85">{l.label}</a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a href={SITE.loginUrl} className="text-center text-sm font-semibold text-white py-3 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>Entrar</a>
            <a href={SITE.signupUrl} className="text-center text-sm font-semibold text-white py-3 rounded-full" style={{ background: GRAD }}>Comece agora</a>
          </div>
        </div>
      )}
    </header>
  )
}

const EASE = [0.22, 1, 0.36, 1] as const

function Float({ className, icon, title, sub, delay }: { className: string; icon: string; title: string; sub: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.5, ease: EASE }}
      className={`absolute z-10 flex items-center gap-2.5 rounded-xl sm:rounded-2xl pl-2 pr-3.5 py-2 shadow-2xl ${className}`}
      style={{ background: '#fff', border: '1px solid rgba(12,26,51,0.06)' }}
    >
      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white shrink-0" style={{ background: GRAD }}>
        <Icon name={icon} size={16} />
      </span>
      <span className="leading-tight">
        <span className="block text-[11px] sm:text-xs font-semibold" style={{ color: INK }}>{title}</span>
        <span className="block text-[10px] sm:text-[11px]" style={{ color: '#6b7794' }}>{sub}</span>
      </span>
    </motion.div>
  )
}

export function Hero3() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-24"
      style={{ background: `radial-gradient(ellipse 90% 55% at 50% -5%, rgba(59,130,246,0.38), transparent 70%), radial-gradient(ellipse 60% 40% at 90% 40%, rgba(14,165,233,0.12), transparent 70%), ${INK}` }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-10 items-center">
        <div className="lg:col-span-5 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <Chip dark icon="shield">Atendimento + processos + prazos</Chip>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-6 leading-[1.02] tracking-tight text-white"
            style={{ ...SERIF, fontWeight: 700, fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)' }}
          >
            CRM para advogados:
            <br />
            atenda no WhatsApp e <em style={{ color: '#60a5fa' }}>não perca prazos.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
            style={{ color: 'rgba(219,234,254,0.78)' }}
          >
            Responda clientes do WhatsApp e Instagram, acompanhe seus processos e receba alerta de cada prazo, tudo em um sistema só.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto lg:mx-0"
          >
            <a href={SITE.signupUrl} className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-full" style={{ background: GRAD, boxShadow: '0 14px 34px rgba(37,99,235,0.45)' }}>
              Comece agora <Icon name="arrow" size={18} />
            </a>
            <a href={SITE.whatsappUrl} className="inline-flex items-center justify-center font-semibold px-7 py-4 rounded-full text-white" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.22)' }}>
              Falar conosco
            </a>
          </motion.div>
          <p className="mt-5 text-xs sm:text-sm inline-flex items-start sm:items-center gap-2 text-left max-w-xs sm:max-w-none" style={{ color: 'rgba(191,219,254,0.7)' }}>
            <Icon name="shield" size={16} className="shrink-0 mt-0.5 sm:mt-0 text-sky-400" />
            Garantia de 7 dias: não gostou, devolvemos o seu dinheiro
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="lg:col-span-7 relative lg:-mr-24 mt-4 lg:mt-0"
        >
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 40px 90px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)' }}>
            <ConversasMock />
          </div>
          <Float className="left-2 -top-4 sm:-left-6 sm:-top-5" icon="chat" title="Novo contato" sub="Instagram · agora" delay={0} />
          <Float className="right-2 -bottom-4 sm:right-6 sm:-bottom-6" icon="bell" title="Prazo em 3 dias" sub="TJ-SP · responsável definido" delay={0.3} />
        </motion.div>
      </div>
    </section>
  )
}
