'use client'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
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
      {/* Soft glow underneath */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(37,99,235,0.1) 0%, transparent 65%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Browser shell */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-[#F8FAFF]">
        {/* Top bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-white border-b border-slate-100">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-slate-100 rounded-lg px-4 py-1.5 text-xs text-slate-400 font-medium">
            app.echojus.com.br
          </div>
        </div>

        {/* App layout */}
        <div className="flex" style={{ height: '340px' }}>
          {/* Sidebar */}
          <aside className="w-52 shrink-0 bg-white border-r border-slate-100 p-4 flex flex-col gap-0.5 hidden sm:flex">
            {[
              { icon: '🤖', label: 'IA & Chat', active: false },
              { icon: '🧮', label: 'Calculadoras', active: true },
              { icon: '📅', label: 'Agenda', active: false },
              { icon: '👥', label: 'Clientes', active: false },
              { icon: '📄', label: 'Documentos', active: false },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium"
                style={{
                  background: item.active ? '#EEF2FF' : 'transparent',
                  color: item.active ? '#2563EB' : '#94A3B8',
                }}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </aside>

          {/* Main area */}
          <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
            {/* Top row — two cards */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Análise card */}
              <div className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col gap-3 shadow-sm">
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Análise de Extrato</p>
                  <p className="text-sm font-semibold text-slate-800">Banco X — Jan/2024</p>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { w: '85%', color: 'linear-gradient(90deg,#2563EB,#7C3AED)' },
                    { w: '60%', color: '#E2E8F0' },
                    { w: '72%', color: '#E2E8F0' },
                    { w: '45%', color: '#E2E8F0' },
                  ].map((bar, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: bar.w, background: bar.color }} />
                    </div>
                  ))}
                </div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  IA identificou 3 cobranças indevidas
                </motion.div>
              </div>

              {/* Calculadora card */}
              <div className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col gap-2 shadow-sm">
                <p className="text-xs text-slate-400 font-medium">Rescisão Contratual</p>
                <p className="text-3xl font-bold text-slate-900">R$ 12.840</p>
                <div className="space-y-1.5 flex-1">
                  {[
                    { label: 'Saldo salário', val: 'R$ 2.133' },
                    { label: 'Férias prop.', val: 'R$ 1.422' },
                    { label: 'FGTS + Multa', val: 'R$ 4.800' },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-xs">
                      <span className="text-slate-400">{r.label}</span>
                      <span className="text-slate-700 font-medium">{r.val}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                  <span>✓</span> Cálculo concluído
                </div>
              </div>
            </div>

            {/* Chat bar */}
            <div className="bg-white rounded-xl border border-slate-100 p-3.5 shadow-sm flex items-start gap-3">
              <div
                className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs"
                style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}
              >
                🤖
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identifiquei <strong className="text-slate-800">3 cobranças indevidas</strong> — tarifa de manutenção em jan, fev e mar/24. Total:{' '}
                <strong className="text-blue-600">R$ 2.340,00</strong>. Deseja que eu elabore a peça?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <FloatingCard className="-left-14 top-20" floatDelay={0} floatDir={-1}>
        <span className="text-base">⚡</span>
        <span>Análise em 4 segundos</span>
      </FloatingCard>

      <FloatingCard className="-right-14 top-14" floatDelay={0.3} floatDir={1}>
        <span className="text-base">🧮</span>
        <span>R$ 12.840 calculado</span>
      </FloatingCard>

      <FloatingCard className="-right-16 bottom-20" floatDelay={0.6} floatDir={-1}>
        <span className="text-base">📅</span>
        <span>3 audiências esta semana</span>
      </FloatingCard>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative pt-28 pb-8 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Radial top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Text block ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Pill */}
          <motion.div {...fadeUp(0)} className="mb-7">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: '#EEF2FF', color: '#2563EB' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Oferta Fundador — 40% OFF para os primeiros 100 assinantes
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)' }}
          >
            Análise de documentos,{' '}
            <span className="gradient-text">cálculos jurídicos</span>
            {' '}e agenda —{' '}
            <br className="hidden md:block" />
            tudo em um lugar, feito com IA.
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            O Echojus substitui planilhas, calculadoras avulsas e horas de trabalho manual.
            Você fecha mais casos, no mesmo tempo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
          >
            <a
              href="#precos"
              className="btn-gradient text-white font-semibold px-8 py-3.5 rounded-full text-base w-full sm:w-auto text-center"
            >
              Testar grátis por 7 dias
            </a>
            <a
              href="#funcionalidades"
              className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-600 font-semibold px-8 py-3.5 rounded-full text-base w-full sm:w-auto hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
            >
              Ver demonstração
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Trust */}
          <motion.p {...fadeUp(0.4)} className="text-sm text-slate-400">
            ✓ Sem cartão de crédito &nbsp;·&nbsp; ✓ 7 dias grátis &nbsp;·&nbsp; ✓ Cancele quando quiser
          </motion.p>
        </div>

        {/* ── Mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.45 }}
          className="px-0 lg:px-20 xl:px-28"
        >
          <MockupUI />
        </motion.div>

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }}
        />
      </div>
    </section>
  )
}
