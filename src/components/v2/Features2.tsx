'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ConversasMock,
  KanbanMock,
  PrazosMock,
  ProcessosMock,
  RadarMock,
  EchoIAMock,
} from '@/components/mockups/Mockups'
import { GROTESK } from './tokens'

const items = [
  {
    key: 'conversas',
    tag: '01 · Atendimento',
    title: 'Todas as conversas numa caixa de entrada',
    text: 'WhatsApp e Instagram conectados, com etiquetas por área do direito, responsável por conversa e histórico completo.',
    bullets: ['Robô de IA no primeiro contato', 'Atendente assume quando quiser', 'Processo vinculado à conversa'],
    node: <ConversasMock />,
  },
  {
    key: 'funil',
    tag: '02 · Captação',
    title: 'Funil de leads até o contrato assinado',
    text: 'Cada contato vira um card. Arraste entre etapas, veja a origem dos leads e quanto cada campanha fecha.',
    bullets: ['Origem: Instagram, Facebook, orgânico', 'Follow-up automático', 'Etapas do seu jeito'],
    node: <KanbanMock />,
  },
  {
    key: 'prazos',
    tag: '03 · Prazos',
    title: 'Publicações dos tribunais com vencimento em destaque',
    text: 'Veja o que venceu, o que vence em 3 dias e o que já foi tratado, por tribunal e por advogado.',
    bullets: ['Filtro por TJ, TRF e TRT', 'Responsável por publicação', 'Marcar como tratado em um clique'],
    node: <PrazosMock />,
  },
  {
    key: 'processos',
    tag: '04 · Processos',
    title: 'Cada processo no kanban, do distribuído ao arquivado',
    text: 'Acompanhe a fase dos casos, veja quais tiveram novidade e avise o cliente sem sair do sistema.',
    bullets: ['Fases do processo em colunas', 'Atalho “com novidade”', 'Aviso ao cliente pelo WhatsApp'],
    node: <ProcessosMock />,
  },
  {
    key: 'radar',
    tag: '05 · Inteligência',
    title: 'Radar de comarcas: onde cada ação rende mais',
    text: 'Compare quanto cada tipo de ação costuma render por comarca, com base em sentenças públicas de 1º grau.',
    bullets: ['Juizado especial e vara comum', 'Filtro por estado e tipo de ação', 'Compare com o seu escritório'],
    node: <RadarMock />,
  },
  {
    key: 'echoia',
    tag: '06 · Echo IA',
    title: 'Uma IA que adianta o trabalho braçal',
    text: 'Peça resumo de intimação, rascunho de manifestação ou próximos passos. Você revisa e protocola.',
    bullets: ['Sessões por caso', 'Rascunhos para revisão', 'Histórico arquivado'],
    node: <EchoIAMock />,
  },
]

export default function Features2() {
  const [active, setActive] = useState(0)
  const current = items[active]

  return (
    <section id="recursos" className="py-28" style={{ background: '#060b14' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-cyan-400">Recursos</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight" style={GROTESK}>
            Tudo que o escritório usa, no mesmo lugar.
          </h2>
          <p className="mt-4 text-lg text-slate-400">Seis módulos que conversam entre si. Escolha um para ver por dentro.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-2">
            {items.map((it, i) => {
              const on = i === active
              return (
                <button
                  key={it.key}
                  onClick={() => setActive(i)}
                  className="w-full text-left rounded-xl p-5 transition-all"
                  style={{
                    background: on ? 'rgba(37,99,235,0.1)' : 'transparent',
                    border: `1px solid ${on ? 'rgba(59,130,246,0.45)' : 'rgba(148,163,184,0.14)'}`,
                  }}
                  aria-expanded={on}
                >
                  <div className="text-xs font-semibold" style={{ color: on ? '#22d3ee' : '#64748b' }}>{it.tag}</div>
                  <div className="mt-1 font-semibold text-white" style={GROTESK}>{it.title}</div>
                  {on && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{it.text}</p>
                      <ul className="mt-3 space-y-1.5">
                        {it.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className="text-cyan-400">→</span>{b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(34,211,238,0.18), transparent 70%)', filter: 'blur(28px)' }} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  {current.node}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
