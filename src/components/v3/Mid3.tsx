import Reveal from '@/components/ui/Reveal'
import Chip from './Chip'
import Icon from './Icon'
import SpotCard from './SpotCard'
import { INK, SERIF } from './tokens'

/* Recursos em grade compacta: sem telas do sistema, só o que há dentro. */
const features = [
  { n: '01', icon: 'chat', title: 'Caixa única de conversas', text: 'WhatsApp e Instagram no mesmo painel, com etiqueta por área do direito, responsável e histórico completo.' },
  { n: '02', icon: 'user', title: 'Equipe organizada', text: 'Cada conversa tem um responsável, com etiqueta por área do direito e a origem do anúncio registrada.' },
  { n: '03', icon: 'funnel', title: 'Funil até o contrato', text: 'Cada contato vira um card. Arraste entre etapas e veja quanto cada campanha fecha.' },
  { n: '04', icon: 'bell', title: 'Prazos e publicações', text: 'Publicações dos tribunais com vencimento em destaque: vencido, a vencer e tratado.' },
  { n: '05', icon: 'folder', title: 'Processos por fase', text: 'Do distribuído ao arquivado, com aviso ao cliente pelo WhatsApp sem sair do sistema.' },
  { n: '06', icon: 'sparkle', title: 'Radar de comarcas e Echo IA', text: 'Dados para escolher a causa e rascunhos de manifestação para você revisar e protocolar.' },
]

export function Features3() {
  return (
    <section id="recursos" className="relative overflow-hidden py-14 sm:py-20" style={{ background: INK }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12 mx-auto text-center lg:mx-0 lg:text-left">
          <Chip dark icon="layers">Recursos</Chip>
          <h2 className="mt-4 leading-[1.02] tracking-tight text-white" style={{ ...SERIF, fontSize: 'clamp(2.1rem, 3.6vw, 3.1rem)' }}>
            Menos abas abertas. <em className="text-blue-300">Mais causas ganhas.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.04}>
              <SpotCard>
                <span className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 10px 22px -8px rgba(37,99,235,0.8)' }}><Icon name={f.icon} size={22} /></span>
                <h3 className="mt-4 text-xl text-white" style={SERIF}>{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/70">{f.text}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
