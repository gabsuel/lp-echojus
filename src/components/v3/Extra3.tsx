import Reveal from '@/components/ui/Reveal'
import Chip from './Chip'
import Icon from './Icon'
import { INK, PAPER, BLUE, SERIF } from './tokens'

const h2 = { ...SERIF, color: INK, fontSize: 'clamp(2.1rem, 3.6vw, 3.1rem)' }

/* ───────── Como funciona ───────── */
const steps = [
  { t: 'Conecte', d: 'Leia o QR Code do WhatsApp e conecte o Instagram. Nossa equipe ajuda na configuração.' },
  { t: 'Importe', d: 'Traga seus contatos e processos. Etiquetas, funil e robôs saem prontos para o seu escritório.' },
  { t: 'Atenda', d: 'O robô faz o primeiro atendimento e qualifica o lead. Você assume a conversa quando quiser.' },
  { t: 'Acompanhe', d: 'Prazos, publicações e processos no mesmo cadastro do cliente, com alerta de vencimento.' },
]

export function Steps3() {
  return (
    <section id="como" className="py-14 sm:py-20" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
          <Chip>Como funciona</Chip>
          <h2 className="mt-4 leading-[1.02] tracking-tight" style={h2}>
            Do primeiro contato <em style={{ color: BLUE }}>ao prazo cumprido.</em>
          </h2>
        </div>
        <ol className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {steps.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.05}>
              <li className="list-none h-full">
                <span className="inline-flex w-10 h-10 rounded-xl items-center justify-center text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}>{i + 1}</span>
                <h3 className="mt-3 text-xl sm:text-2xl" style={{ ...SERIF, color: INK }}>{x.t}</h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed" style={{ color: '#4a5878' }}>{x.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ───────── Para o seu perfil ───────── */
const profiles = [
  { icon: 'user', c: '#2563eb', t: 'Advogado solo', d: 'Atenda e controle prazos sem equipe de apoio.', items: ['Caixa única de WhatsApp e Instagram', 'Prazos e publicações em destaque', 'Cadastro único por cliente'] },
  { icon: 'building', c: '#4f46e5', t: 'Banca contenciosa', d: 'Muitos processos, vários advogados, nenhum prazo perdido.', items: ['Responsável por conversa e por publicação', 'Processos por fase com novidades', 'Radar de comarcas e Echo IA'] },
  { icon: 'funnel', c: '#0ea5e9', t: 'Captação de clientes', d: 'Anúncios que viram contratos, com origem rastreada.', items: ['Funil do lead ao contrato', 'Origem: Instagram, Facebook, orgânico', 'Robô qualifica antes de você'] },
]

export function Profiles3() {
  return (
    <section id="perfis" className="py-14 sm:py-20" style={{ background: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12 mx-auto text-center lg:mx-0 lg:text-left">
          <Chip>Para o seu perfil</Chip>
          <h2 className="mt-4 leading-[1.02] tracking-tight" style={h2}>
            Do solo à banca, <em style={{ color: BLUE }}>no seu ritmo.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {profiles.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl p-7" style={{ background: '#fff', border: '1px solid rgba(12,26,51,0.08)' }}>
                <span className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: p.c, boxShadow: `0 10px 22px -8px ${p.c}` }}><Icon name={p.icon} size={22} /></span>
                <h3 className="mt-5 text-2xl" style={{ ...SERIF, color: INK }}>{p.t}</h3>
                <p className="mt-2 text-sm" style={{ color: '#4a5878' }}>{p.d}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm" style={{ color: INK }}>
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-emerald-500" />{it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Comparativo (cartões, sem rolagem lateral) ───────── */
type Cell = { k: 'no' | 'mid' | 'yes'; t: string }
const rows: { q: string; c: [Cell, Cell, Cell] }[] = [
  { q: 'WhatsApp e Instagram', c: [{ k: 'no', t: 'Não tem' }, { k: 'mid', t: 'Parcial' }, { k: 'yes', t: 'Caixa única com robô' }] },
  { q: 'Funil até o contrato', c: [{ k: 'no', t: 'Planilha à mão' }, { k: 'mid', t: 'Parcial' }, { k: 'yes', t: 'Cards com origem do lead' }] },
  { q: 'Prazos e publicações', c: [{ k: 'no', t: 'Anotados à mão' }, { k: 'mid', t: 'Parcial' }, { k: 'yes', t: 'Alerta de vencimento' }] },
  { q: 'Processos por fase', c: [{ k: 'no', t: 'Manual' }, { k: 'mid', t: 'Básico' }, { k: 'yes', t: 'Com novidades em destaque' }] },
  { q: 'Cliente, conversa e processo', c: [{ k: 'no', t: 'Separados' }, { k: 'no', t: 'Separados' }, { k: 'yes', t: 'Um cadastro só' }] },
  { q: 'Implantação', c: [{ k: 'no', t: 'Por conta própria' }, { k: 'mid', t: 'Varia' }, { k: 'yes', t: 'Assistida pela equipe' }] },
]

function CellView({ cell, hero }: { cell: Cell; hero?: boolean }) {
  const color = cell.k === 'no' ? '#ef4444' : cell.k === 'mid' ? '#94a3b8' : BLUE
  return (
    <div
      className="flex flex-col items-center justify-center text-center gap-1 rounded-xl px-1.5 py-3 min-h-[84px]"
      style={hero ? { background: 'rgba(37,99,235,0.09)', border: '1px solid rgba(37,99,235,0.2)' } : undefined}
    >
      <span style={{ color }}><Icon name={cell.k === 'no' ? 'x' : 'check'} size={18} /></span>
      <span className="text-[12px] sm:text-sm leading-tight font-medium break-words" style={{ color: hero ? BLUE : cell.k === 'no' ? '#94a3b8' : '#475569' }}>{cell.t}</span>
    </div>
  )
}

export function Compare3() {
  return (
    <section id="comparativo" className="py-14 sm:py-20" style={{ background: '#fff' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10 mx-auto text-center">
          <Chip>Comparativo</Chip>
          <h2 className="mt-4 leading-[1.02] tracking-tight" style={h2}>
            Planilha, sistema genérico ou <em style={{ color: BLUE }}>EchoChat.</em>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 px-3 sm:px-5 pb-3 text-center text-[11px] sm:text-xs font-bold uppercase tracking-wide" style={{ color: '#64748b' }}>
          <span>Planilhas</span>
          <span>Sistema genérico</span>
          <span style={{ color: BLUE }}>EchoChat</span>
        </div>

        <div className="space-y-3">
          {rows.map((r) => (
            <div key={r.q} className="rounded-2xl p-3 sm:p-5" style={{ background: PAPER, border: '1px solid rgba(12,26,51,0.08)' }}>
              <h3 className="text-base sm:text-lg px-1 pb-3 mb-3" style={{ ...SERIF, color: INK, borderBottom: '1px solid rgba(12,26,51,0.08)' }}>{r.q}</h3>
              <div className="grid grid-cols-3 gap-2">
                <CellView cell={r.c[0]} />
                <CellView cell={r.c[1]} />
                <CellView cell={r.c[2]} hero />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
