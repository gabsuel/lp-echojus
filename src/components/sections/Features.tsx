'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

function ChatMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0"
          style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}
        >
          🤖
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-800">Assistente Echojus</div>
          <div className="text-xs text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Online
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2.5 items-start">
          <div
            className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs"
            style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white' }}
          >
            🤖
          </div>
          <div className="bg-blue-50 text-slate-800 rounded-xl rounded-tl-none px-3 py-2.5 text-sm leading-relaxed max-w-xs">
            Analisei o extrato. Identifiquei <strong>3 cobranças indevidas</strong> no valor de R$ 2.340,00. Tarifa de manutenção cobrada sem contrato.
          </div>
        </div>

        <div className="flex gap-2.5 items-start justify-end">
          <div className="bg-slate-100 text-slate-700 rounded-xl rounded-tr-none px-3 py-2.5 text-sm max-w-xs">
            Elabore a peça para revisão contratual
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-300 shrink-0 flex items-center justify-center text-xs font-semibold text-slate-600">
            MS
          </div>
        </div>

        <div className="flex gap-2.5 items-start">
          <div
            className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs"
            style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white' }}
          >
            🤖
          </div>
          <div className="bg-blue-50 text-slate-800 rounded-xl rounded-tl-none px-3 py-2.5 text-sm max-w-xs">
            <span className="text-blue-600 font-medium">Gerando peça processual...</span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}>|</motion.span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
        <input className="flex-1 bg-transparent text-sm text-slate-500 outline-none" placeholder="Digite sua pergunta…" readOnly />
        <button
          className="text-xs font-semibold text-white px-3 py-1.5 rounded-lg"
          style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

function CalculatorMockup() {
  const calcs = [
    { name: 'Rescisão Contratual', icon: '🧾', active: true },
    { name: 'Horas Extras', icon: '⏰' },
    { name: 'FGTS + Multa', icon: '💰' },
    { name: 'Férias Prop.', icon: '🏖️' },
    { name: 'BPC/LOAS', icon: '🤝' },
    { name: 'Revisão Benefício', icon: '🔄' },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {calcs.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition"
            style={{
              background: c.active ? '#EEF2FF' : 'white',
              borderColor: c.active ? '#2563EB' : '#E2E8F0',
              color: c.active ? '#2563EB' : '#475569',
            }}
          >
            <span>{c.icon}</span>
            <span className="text-xs leading-tight">{c.name}</span>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div className="text-xs text-slate-400 font-medium mb-3">Rescisão Contratual — Resultado</div>
        <div className="space-y-2">
          {[
            { label: 'Saldo de salário', value: 'R$ 2.133,33' },
            { label: 'Férias proporcionais', value: 'R$ 1.422,22' },
            { label: '13º proporcional', value: 'R$ 1.066,67' },
            { label: 'FGTS + Multa (40%)', value: 'R$ 4.800,00' },
            { label: 'Aviso prévio', value: 'R$ 3.200,00' },
          ].map((row) => (
            <div key={row.label} className="flex justify-between text-sm">
              <span className="text-slate-500">{row.label}</span>
              <span className="font-medium text-slate-800">{row.value}</span>
            </div>
          ))}
          <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between text-sm font-bold">
            <span className="text-slate-900">Total</span>
            <span className="text-green-600">R$ 12.622,22</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarMockup() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const highlighted = [11, 13, 17, 22, 26]
  const today = 11
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-slate-800 text-sm">Março 2026</span>
        <div className="flex gap-1">
          <button className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 text-xs hover:bg-slate-200 transition">←</button>
          <button className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 text-xs hover:bg-slate-200 transition">→</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {['D','S','T','Q','Q','S','S'].map((d, i) => (
          <div key={i} className="text-slate-400 py-1 font-medium">{d}</div>
        ))}
        {[...Array(6)].map((_, i) => <div key={`e${i}`} />)}
        {days.map((d) => (
          <div
            key={d}
            className="py-1.5 rounded-lg text-xs cursor-pointer transition"
            style={{
              background: d === today
                ? 'linear-gradient(135deg,#2563EB,#7C3AED)'
                : highlighted.includes(d)
                ? '#EEF2FF'
                : 'transparent',
              color: d === today
                ? 'white'
                : highlighted.includes(d)
                ? '#2563EB'
                : '#94A3B8',
              fontWeight: highlighted.includes(d) || d === today ? 600 : 400,
            }}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="space-y-2 mt-1">
        {[
          { time: '09:00', label: 'Audiência — Vara do Trabalho 3ª', color: '#2563EB' },
          { time: '14:30', label: 'Perícia Médica INSS — Dr. Carlos', color: '#7C3AED' },
        ].map((ev, i) => (
          <div key={i} className="flex gap-3 items-center bg-slate-50 border border-slate-100 rounded-xl p-3">
            <span className="text-xs text-slate-400 font-medium w-10 shrink-0">{ev.time}</span>
            <span className="flex-1 text-xs font-medium text-slate-700 truncate">{ev.label}</span>
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: ev.color }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ClientsMockup() {
  const clients = [
    { name: 'Maria Silva', initials: 'MS', case: 'Revisão Aposentadoria', status: 'Em andamento', statusColor: '#2563EB', statusBg: '#EEF2FF' },
    { name: 'João Santos', initials: 'JS', case: 'Rescisão Indevida', status: 'Aguardando docs', statusColor: '#D97706', statusBg: '#FEF3C7' },
    { name: 'Ana Costa', initials: 'AC', case: 'Revisão de Contrato', status: 'Concluído', statusColor: '#16A34A', statusBg: '#DCFCE7' },
    { name: 'Carlos Lima', initials: 'CL', case: 'Benefício INSS', status: 'Em andamento', statusColor: '#2563EB', statusBg: '#EEF2FF' },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 space-y-3">
      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mb-2">
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
        </svg>
        <span className="text-xs text-slate-400">Buscar cliente…</span>
      </div>
      {clients.map((c) => (
        <div key={c.name} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
            style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}
          >
            {c.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-slate-800 truncate">{c.name}</div>
            <div className="text-xs text-slate-400 truncate">{c.case}</div>
          </div>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0"
            style={{ background: c.statusBg, color: c.statusColor }}
          >
            {c.status}
          </span>
        </div>
      ))}
    </div>
  )
}

const features = [
  {
    icon: '🤖',
    title: 'Chat IA & Análise de Documentos',
    description: 'Suba o extrato. Em segundos, a IA identifica cobranças indevidas, calcula o dano e sugere a tese jurídica completa.',
    bullets: ['Análise em segundos', 'Identifica cobranças indevidas', 'Sugere teses jurídicas'],
    visual: <ChatMockup />,
  },
  {
    icon: '🧮',
    title: '18+ Calculadoras Jurídicas',
    description: 'Calculadoras especializadas em trabalhista, previdenciário e bancário. Resultado em segundos, com memória de cálculo auditável.',
    bullets: ['Rescisão, férias, FGTS e mais', 'Resultado com memória de cálculo', 'Atualizado pela legislação vigente'],
    visual: <CalculatorMockup />,
  },
  {
    icon: '📅',
    title: 'Agenda Jurídica Inteligente',
    description: 'Agenda com recorrência, detecção automática de conflitos e sincronização com Google Calendar e Outlook.',
    bullets: ['Conflitos detectados automaticamente', 'Sincronização com Google Calendar', 'Notificações inteligentes'],
    visual: <CalendarMockup />,
  },
  {
    icon: '👥',
    title: 'Gestão de Clientes',
    description: 'Do lead ao contrato fechado. Acompanhe cada cliente, status do caso e documentos pendentes em um painel claro.',
    bullets: ['Pipeline visual de casos', 'Documentos organizados por cliente', 'Status em tempo real'],
    visual: <ClientsMockup />,
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="funcionalidades" ref={ref} className="py-24" style={{ background: '#F8FAFF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: '#EEF2FF', color: '#2563EB' }}
            >
              Funcionalidades
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Tudo que seu escritório precisa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Cada funcionalidade foi construída para o dia a dia do advogado brasileiro. Sem complexidade, com resultado imediato.
          </motion.p>
        </div>

        {/* Alternating rows */}
        <div className="space-y-24">
          {features.map((feature, i) => {
            const isEven = i % 2 === 1
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Text block */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl text-2xl mb-6"
                    style={{ background: '#EEF2FF' }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <CheckItem key={b} text={b} />
                    ))}
                  </ul>
                  <a
                    href="#precos"
                    className="btn-gradient inline-block text-white font-semibold px-6 py-3 rounded-full text-sm"
                  >
                    Começar agora →
                  </a>
                </div>

                {/* Visual */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  {feature.visual}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
