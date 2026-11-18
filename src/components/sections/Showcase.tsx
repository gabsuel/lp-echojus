'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/Reveal'
import {
  ConversasMock,
  KanbanMock,
  PrazosMock,
  ProcessosMock,
  RadarMock,
  EchoIAMock,
  InicioMock,
} from '@/components/mockups/Mockups'

const tabs = [
  { key: 'inicio', label: 'Início', desc: 'Leads, consultas e contratos do período num painel só.', node: <InicioMock /> },
  { key: 'conversas', label: 'Conversas', desc: 'WhatsApp e Instagram em uma caixa de entrada, com robô e etiquetas.', node: <ConversasMock /> },
  { key: 'kanban', label: 'Funil', desc: 'Cada lead vira um card: do primeiro contato ao contrato assinado.', node: <KanbanMock /> },
  { key: 'prazos', label: 'Prazos', desc: 'Publicações dos tribunais com vencimento em destaque.', node: <PrazosMock /> },
  { key: 'processos', label: 'Processos', desc: 'A fase de cada caso e quem teve novidade, em kanban.', node: <ProcessosMock /> },
  { key: 'radar', label: 'Radar', desc: 'Onde cada tipo de ação rende mais, comarca por comarca.', node: <RadarMock /> },
  { key: 'echoia', label: 'Echo IA', desc: 'Resumos e rascunhos para você revisar e protocolar.', node: <EchoIAMock /> },
]

export default function Showcase() {
  const [active, setActive] = useState(tabs[0].key)
  const current = tabs.find((t) => t.key === active)!

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#04040b' }}>
      <div className="absolute inset-0 dots-bg opacity-50 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Tudo em um único sistema" title="Conheça o EchoChat por dentro" />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className="px-4 py-2 rounded-full text-sm font-medium transition"
              style={
                t.key === active
                  ? { background: 'linear-gradient(90deg,#7c7cf6,#b9b9ff)', color: '#0a0a1a' }
                  : { background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.09)' }
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="text-center text-gray-400 mb-8 min-h-[24px]">{current.desc}</p>

        <div
          className="rounded-2xl p-2"
          style={{ background: 'linear-gradient(180deg, rgba(185,185,255,0.3), rgba(185,185,255,0.04))', boxShadow: '0 20px 100px rgba(124,124,246,0.2)' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {current.node}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
