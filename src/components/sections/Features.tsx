import Reveal, { SectionTitle } from '@/components/ui/Reveal'
import {
  ConversasMock,
  KanbanMock,
  PrazosMock,
  ProcessosMock,
  RadarMock,
  EchoIAMock,
} from '@/components/mockups/Mockups'

type Feature = {
  icon: string
  title: string
  text: string
  mock: React.ReactNode
  light?: boolean
}

const columns: Feature[][] = [
  [
    {
      icon: '✦',
      title: 'Echo IA integrada ao caso',
      text: 'Resuma intimações, gere rascunhos e descubra os próximos passos. Você revisa, a IA adianta.',
      mock: <EchoIAMock />,
    },
    {
      icon: '⚖',
      title: 'Processos no kanban',
      text: 'Do distribuído ao arquivado, veja a fase de cada caso e quais tiveram novidade.',
      mock: <ProcessosMock />,
    },
  ],
  [
    {
      icon: '▥',
      title: 'Funil de leads e controle total',
      text: 'Origem dos leads, consultas marcadas e contratos fechados, com indicadores da equipe.',
      mock: <KanbanMock />,
      light: true,
    },
    {
      icon: '💬',
      title: 'Conversas em um só lugar',
      text: 'WhatsApp e Instagram numa caixa de entrada, com etiquetas por área e robô no primeiro contato.',
      mock: <ConversasMock />,
    },
  ],
  [
    {
      icon: '⏰',
      title: 'Publicações e prazos',
      text: 'Publicações dos tribunais com prazo vencido, a vencer e tratado, por advogado.',
      mock: <PrazosMock />,
    },
    {
      icon: '◎',
      title: 'Radar de comarcas',
      text: 'Descubra onde cada tipo de ação rende mais, com base em sentenças públicas de 1º grau.',
      mock: <RadarMock />,
      light: true,
    },
  ],
]

function FeatureCard({ f }: { f: Feature }) {
  return (
    <div
      className={f.light ? 'rounded-[18px] overflow-hidden' : 'card-dark overflow-hidden'}
      style={f.light ? { background: '#f4f5ff', border: '1px solid #e0e1ff' } : {}}
    >
      <div className="relative h-60 overflow-hidden">
        <div style={{ width: '170%', transform: 'scale(0.588)', transformOrigin: 'top left', padding: 16 }}>{f.mock}</div>
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{ background: f.light ? 'linear-gradient(transparent,#f4f5ff)' : 'linear-gradient(transparent, rgba(10,9,24,1))' }}
        />
      </div>
      <div className="p-5 pt-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm mb-3"
          style={f.light ? { background: '#e4e5ff', color: '#4f46e5' } : { background: 'rgba(124,124,246,0.15)', color: '#b9b9ff' }}
        >
          {f.icon}
        </div>
        <h3 className="font-semibold mb-1.5" style={{ color: f.light ? '#0b0b14' : '#fff' }}>{f.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: f.light ? '#64748b' : '#9ca3af' }}>{f.text}</p>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="funcionalidades" className="relative py-28" style={{ background: '#050507' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={
            <>
              Mais que tecnologia. Você ganha{' '}
              <span className="serif-accent" style={{ fontSize: '1.1em' }}>visão, prazo e controle</span>
              <br className="hidden sm:block" /> sobre tudo que impacta o seu escritório.
            </>
          }
          sub="Atendimento, captação, processos e prazos integrados. Tudo funcionando junto, no ritmo da advocacia."
        />
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {columns.map((col, ci) => (
            <div key={ci} className={`space-y-5 ${ci === 1 ? 'md:mt-12' : ''}`}>
              {col.map((f, i) => (
                <Reveal key={f.title} delay={ci * 0.08 + i * 0.05}>
                  <FeatureCard f={f} />
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
