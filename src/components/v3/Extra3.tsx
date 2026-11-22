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
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 md:mx-0 md:px-0 md:overflow-visible">
          {profiles.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06} className="snap-center shrink-0 w-[82%] sm:w-[60%] md:w-auto">
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

/* ───────── Comparativo ───────── */
const rows: [string, string, string, string][] = [
  ['Atendimento no WhatsApp e Instagram', '–', 'Parcial', '✓'],
  ['Funil de captação até o contrato', '–', 'Parcial', '✓'],
  ['Prazos e publicações dos tribunais', 'Manual', 'Parcial', '✓'],
  ['Processos por fase', 'Manual', '✓', '✓'],
  ['Cliente, conversa e processo no mesmo cadastro', '–', '–', '✓'],
  ['Implantação assistida pela equipe', '–', 'Varia', '✓'],
]

export function Compare3() {
  return (
    <section id="comparativo" className="py-14 sm:py-20" style={{ background: '#fff' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10 mx-auto text-center lg:mx-0 lg:text-left">
          <Chip>Comparativo</Chip>
          <h2 className="mt-4 leading-[1.02] tracking-tight" style={h2}>
            Planilha, sistema genérico ou <em style={{ color: BLUE }}>EchoChat.</em>
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(12,26,51,0.1)' }}>
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr style={{ background: PAPER, color: INK }}>
                <th className="text-left font-semibold p-4" />
                <th className="p-4 font-semibold">Planilhas</th>
                <th className="p-4 font-semibold">Sistema genérico</th>
                <th className="p-4 font-semibold text-white" style={{ background: BLUE }}>EchoChat</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} style={{ borderTop: '1px solid rgba(12,26,51,0.08)', color: INK }}>
                  <td className="p-4 font-medium">{r[0]}</td>
                  <td className="p-4 text-center opacity-60">{r[1]}</td>
                  <td className="p-4 text-center opacity-60">{r[2]}</td>
                  <td className="p-4 text-center font-bold" style={{ color: BLUE, background: 'rgba(37,99,235,0.06)' }}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
