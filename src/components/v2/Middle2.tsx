import Reveal from '@/components/ui/Reveal'
import { SITE } from '@/lib/config'
import { GROTESK } from './tokens'

/* ───────── Fluxo: do lead à sentença ───────── */
const steps = [
  { n: '01', icon: '💬', title: 'Lead chega', text: 'Pelo WhatsApp, Instagram ou anúncio, já com a origem registrada.' },
  { n: '02', icon: '🤖', title: 'Robô qualifica', text: 'A IA faz o primeiro atendimento e passa para o advogado.' },
  { n: '03', icon: '✍️', title: 'Contrato fechado', text: 'O card avança no funil até a assinatura.' },
  { n: '04', icon: '⚖️', title: 'Processo e prazo', text: 'O caso vira processo, e as publicações caem no responsável.' },
]

export function Flow2() {
  return (
    <section id="fluxo" className="py-28 relative" style={{ background: '#080f1d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-cyan-400">Fluxo</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight" style={GROTESK}>
            Do primeiro WhatsApp ao prazo cumprido.
          </h2>
        </div>
        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }} />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative text-center md:text-left">
                <div
                  className="relative mx-auto md:mx-0 w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: '#0c1424', border: '1px solid rgba(59,130,246,0.4)', boxShadow: '0 0 40px rgba(37,99,235,0.2)' }}
                >
                  {s.icon}
                </div>
                <div className="mt-5 text-xs font-semibold text-cyan-400">{s.n}</div>
                <h3 className="mt-1 text-lg font-semibold text-white" style={GROTESK}>{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Comparativo em tabela ───────── */
const rows: [string, boolean, boolean][] = [
  ['Conversas de WhatsApp e Instagram em um só painel', false, true],
  ['Histórico e responsável por cliente', false, true],
  ['Funil de leads com origem da campanha', false, true],
  ['Publicações dos tribunais com prazo calculado', false, true],
  ['Processos ligados ao cadastro do cliente', false, true],
  ['IA para resumo e rascunho (com revisão humana)', false, true],
]

export function Compare2() {
  return (
    <section id="comparativo" className="py-28" style={{ background: '#060b14' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-cyan-400">Comparativo</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight" style={GROTESK}>
            Planilha, WhatsApp e CRM soltos <span className="text-slate-500">ou</span> um sistema só?
          </h2>
        </div>
        <Reveal>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(148,163,184,0.16)', background: '#0a1220' }}>
            <div className="grid grid-cols-[1fr_90px_110px] sm:grid-cols-[1fr_160px_160px] text-xs sm:text-sm font-semibold" style={{ background: '#0e1829' }}>
              <div className="px-5 py-4 text-slate-400">Capacidade</div>
              <div className="px-2 py-4 text-center text-slate-400">Ferramentas soltas</div>
              <div className="px-2 py-4 text-center text-white" style={{ background: 'rgba(37,99,235,0.25)' }}>EchoChat</div>
            </div>
            {rows.map(([label, a, b]) => (
              <div key={label} className="grid grid-cols-[1fr_90px_110px] sm:grid-cols-[1fr_160px_160px] items-center" style={{ borderTop: '1px solid rgba(148,163,184,0.1)' }}>
                <div className="px-5 py-4 text-sm text-slate-300">{label}</div>
                <div className="text-center text-lg" style={{ color: a ? '#4ade80' : '#475569' }}>{a ? '✓' : '✗'}</div>
                <div className="text-center text-lg py-4 font-bold" style={{ color: b ? '#22d3ee' : '#475569', background: 'rgba(37,99,235,0.08)' }}>{b ? '✓' : '✗'}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── Para quem ───────── */
const audiences = [
  { tag: 'Autônomo', title: 'Advogado solo', text: 'Saia do WhatsApp pessoal. Tenha cliente, processo e prazo organizados sem equipe de apoio.', points: ['1 número de WhatsApp', 'Agenda e kanban', 'Robô de atendimento'], plan: 'Essencial' },
  { tag: 'Equipe', title: 'Escritório', text: 'Distribua conversas e publicações por responsável e acompanhe a produtividade.', points: ['Publicações e prazos', 'Processos monitorados', 'Indicadores da equipe'], plan: 'Escritório', featured: true },
  { tag: 'Volume', title: 'Banca e captação', text: 'Capte no Instagram e Facebook, meça a origem dos leads e escolha onde focar.', points: ['Radar de comarcas', 'Echo IA', 'Onboarding 1:1'], plan: 'Banca' },
]

export function Audience2() {
  return (
    <section className="py-28" style={{ background: '#080f1d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-cyan-400">Para quem</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight" style={GROTESK}>
            Do advogado solo à grande banca.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div
                className="h-full rounded-2xl p-7 flex flex-col"
                style={{
                  background: a.featured ? 'linear-gradient(180deg, rgba(37,99,235,0.18), #0a1220)' : '#0a1220',
                  border: `1px solid ${a.featured ? 'rgba(59,130,246,0.5)' : 'rgba(148,163,184,0.16)'}`,
                }}
              >
                <span className="self-start text-xs font-semibold px-2.5 py-1 rounded-md" style={{ background: 'rgba(34,211,238,0.12)', color: '#67e8f9' }}>{a.tag}</span>
                <h3 className="mt-4 text-2xl font-bold text-white" style={GROTESK}>{a.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{a.text}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-300"><span className="text-cyan-400">✓</span>{p}</li>
                  ))}
                </ul>
                <a href="#planos" className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300">Ver plano {a.plan} →</a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          Não sabe qual escolher? <a href={SITE.whatsappUrl} className="text-blue-400 hover:text-blue-300">Fale com a nossa equipe</a>.
        </p>
      </div>
    </section>
  )
}
