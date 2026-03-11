'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

/* ─── shared sub-components ─── */

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold"
        style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}
      >
        ✓
      </span>
      <span className="text-slate-600 text-sm leading-relaxed">{text}</span>
    </li>
  )
}

/* ─── browser-frame screenshot wrapper ─── */

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-100">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-slate-100 rounded-md px-3 py-1 text-xs text-slate-400 font-medium truncate">
          app.echojus.com.br
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative w-full" style={{ paddingBottom: '62%' }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

/* ─── features data ─── */

const features = [
  {
    icon: '🤖',
    title: 'Chat IA & Análise de Documentos',
    description: 'Suba o extrato. Em segundos, a IA identifica cobranças indevidas, calcula o dano e sugere a tese jurídica completa.',
    bullets: ['Análise em segundos', 'Identifica cobranças indevidas', 'Sugere teses jurídicas'],
    screenshot: '/img/screenshots/screencapture-echojus-br-chat-2026-03-11-01_18_42.png',
    screenshotAlt: 'Chat IA do Echojus',
  },
  {
    icon: '🧮',
    title: '18+ Calculadoras Jurídicas',
    description: 'Calculadoras especializadas em trabalhista, previdenciário e bancário. Resultado em segundos, com memória de cálculo auditável.',
    bullets: ['Rescisão, férias, FGTS e mais', 'Resultado com memória de cálculo', 'Atualizado pela legislação vigente'],
    screenshot: '/img/screenshots/screencapture-echojus-br-ferramentas-2026-03-11-01_18_13.png',
    screenshotAlt: 'Calculadoras jurídicas do Echojus',
  },
  {
    icon: '📅',
    title: 'Agenda Jurídica Inteligente',
    description: 'Agenda com recorrência, detecção automática de conflitos e sincronização com Google Calendar e Outlook.',
    bullets: ['Conflitos detectados automaticamente', 'Sincronização com Google Calendar', 'Notificações inteligentes'],
    screenshot: '/img/screenshots/screencapture-echojus-br-agenda-2026-03-11-01_18_29.png',
    screenshotAlt: 'Agenda do Echojus',
  },
  {
    icon: '👥',
    title: 'Gestão de Clientes',
    description: 'Do lead ao contrato fechado. Acompanhe cada cliente, status do caso e documentos pendentes em um painel claro.',
    bullets: ['Pipeline visual de casos', 'Documentos organizados por cliente', 'Status em tempo real'],
    screenshot: '/img/screenshots/screencapture-echojus-br-clientes-2026-03-11-01_18_57.png',
    screenshotAlt: 'Gestão de clientes do Echojus',
  },
]

/* ─── scroll-driven 3D feature row ─── */

function FeatureRow({ feature, isEven }: { feature: typeof features[0]; isEven: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale   = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.68, 0.85, 1.04, 0.85, 0.68])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.15, 0.5,  1,    0.5,  0.15])
  const rotateX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [18,   7,    0,    -7,   -18])

  const glowOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0, 0, 1, 0, 0])

  return (
    <div ref={ref} className="relative py-28" style={{ perspective: '1200px' }}>
      {/* Radial spotlight */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 pointer-events-none rounded-3xl"
      >
        <div
          className="w-full h-full rounded-3xl"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)' }}
        />
      </motion.div>

      <motion.div
        style={{ scale, opacity, rotateX }}
        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center will-change-transform"
      >
        {/* Text */}
        <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-3xl mb-6 shadow-sm"
            style={{ background: 'linear-gradient(135deg,#EEF2FF,#E0E7FF)' }}
          >
            {feature.icon}
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5 leading-tight">{feature.title}</h3>
          <p className="text-slate-500 text-lg leading-relaxed mb-7">{feature.description}</p>
          <ul className="space-y-4 mb-8">
            {feature.bullets.map((b) => <CheckItem key={b} text={b} />)}
          </ul>
          <a href="#precos" className="btn-gradient inline-block text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-lg">
            Começar agora →
          </a>
        </div>

        {/* Screenshot */}
        <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
          <BrowserFrame src={feature.screenshot} alt={feature.screenshotAlt} />
        </div>
      </motion.div>
    </div>
  )
}

/* ─── section ─── */

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="funcionalidades" className="overflow-hidden" style={{ background: '#F8FAFF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div ref={headerRef} className="text-center pt-24 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: '#EEF2FF', color: '#2563EB' }}>
              Funcionalidades
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Tudo que seu escritório precisa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Cada funcionalidade foi construída para o dia a dia do advogado brasileiro.
            Sem complexidade, com resultado imediato.
          </motion.p>
        </div>

        {/* Scroll-driven 3-D rows */}
        {features.map((feature, i) => (
          <FeatureRow key={feature.title} feature={feature} isEven={i % 2 === 1} />
        ))}

        <div className="pb-16" />
      </div>
    </section>
  )
}
