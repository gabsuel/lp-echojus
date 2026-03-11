'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
})

function FloatingCard({
  children,
  className,
  floatDelay = 0,
  floatDir = -1,
}: {
  children: React.ReactNode
  className?: string
  floatDelay?: number
  floatDir?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, floatDir * 8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: floatDelay + 0.8 },
        scale: { duration: 0.5, delay: floatDelay + 0.8 },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: floatDelay + 0.8 },
      }}
      className={`absolute hidden lg:flex items-center gap-2.5 bg-white border border-slate-100 shadow-lg rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ${className}`}
    >
      {children}
    </motion.div>
  )
}

function MockupUI() {
  return (
    <div className="relative">
      {/* Soft glow */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(37,99,235,0.12) 0%, transparent 65%)',
          filter: 'blur(28px)',
        }}
      />

      {/* Browser shell */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80">
        {/* Top bar */}
        <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-slate-100">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-slate-100 rounded-lg px-4 py-1.5 text-xs text-slate-400 font-medium">
            app.echojus.com.br
          </div>
        </div>

        {/* Dashboard screenshot */}
        <div className="relative w-full" style={{ paddingBottom: '62%' }}>
          <Image
            src="/img/screenshots/screencapture-echojus-br-2026-03-11-01_17_38.png"
            alt="Dashboard do Echojus"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
        </div>
      </div>

      {/* Floating chips */}
      <FloatingCard className="-left-12 top-16" floatDelay={0} floatDir={-1}>
        <span className="text-base">⚡</span>
        <span>Análise em 4 segundos</span>
      </FloatingCard>

      <FloatingCard className="-right-12 top-12" floatDelay={0.3} floatDir={1}>
        <span className="text-base">🧮</span>
        <span>R$ 12.840 calculado</span>
      </FloatingCard>

      <FloatingCard className="-right-14 bottom-16" floatDelay={0.6} floatDir={-1}>
        <span className="text-base">📅</span>
        <span>3 audiências esta semana</span>
      </FloatingCard>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative pt-24 pb-16 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Subtle radial glow top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 0%, rgba(37,99,235,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh] lg:min-h-0 lg:py-12">

          {/* ── Left: Text ── */}
          <div className="flex flex-col justify-center">
            {/* Pill */}
            <motion.div {...fadeUp(0)} className="mb-7">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
                style={{ background: '#EEF2FF', color: '#2563EB' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Oferta Fundador — 40% OFF · Apenas 100 vagas
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}
            >
              Seu escritório,{' '}
              <span className="gradient-text">10× mais rápido.</span>
              <br />
              Sem abrir 4 ferramentas diferentes.
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              Cálculos trabalhistas, análise de extratos, agenda e gestão de clientes —
              tudo em uma plataforma pensada do zero para o advogado brasileiro.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <a
                href="#precos"
                className="btn-gradient text-white font-semibold px-8 py-3.5 rounded-full text-base text-center shadow-lg"
              >
                Testar grátis por 7 dias
              </a>
              <a
                href="#funcionalidades"
                className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-600 font-semibold px-8 py-3.5 rounded-full text-base hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
              >
                Ver como funciona
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Trust */}
            <motion.p {...fadeUp(0.32)} className="text-sm text-slate-400">
              ✓ Sem cartão de crédito &nbsp;·&nbsp; ✓ 7 dias grátis &nbsp;·&nbsp; ✓ Cancele quando quiser
            </motion.p>
          </div>

          {/* ── Right: Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
            className="relative lg:pl-6"
          >
            <MockupUI />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
