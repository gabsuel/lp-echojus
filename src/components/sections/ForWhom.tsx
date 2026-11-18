import Reveal, { SectionTitle } from '@/components/ui/Reveal'
import { SITE } from '@/lib/config'

const segments = [
  { icon: '👩‍⚖️', title: 'Advogado autônomo', text: 'Saia do WhatsApp pessoal e tenha cliente, processo e prazo organizados sozinho.', chips: ['Conversas', 'Agenda'] },
  { icon: '🏛️', title: 'Escritórios com equipe', text: 'Distribua conversas e publicações por responsável e acompanhe a produtividade.', chips: ['Equipe', 'Indicadores'] },
  { icon: '📣', title: 'Advocacia de volume e captação', text: 'Capte no Instagram e Facebook, meça a origem dos leads e feche mais contratos.', chips: ['Funil', 'Origem'] },
  { icon: '🛠️', title: 'Trabalhista e previdenciário', text: 'Controle de prazos, audiências e novidades de cada processo sem perder nada.', chips: ['Prazos', 'Processos'] },
  { icon: '🏦', title: 'Consumidor e bancário', text: 'Use o Radar de comarcas para saber onde cada ação rende mais e onde focar.', chips: ['Radar', 'Echo IA'] },
]

export default function ForWhom() {
  return (
    <section className="py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          light
          eyebrow="Feito para a sua advocacia"
          title={
            <>
              Do autônomo à grande banca.
              <br />
              <span className="serif-accent-dark" style={{ fontSize: '1.1em' }}>Do lead à sentença.</span>
            </>
          }
          sub="Se você capta, atende, controla prazos e acompanha processos, o EchoChat é para você."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group">
                <div
                  className="relative h-44 rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ background: 'radial-gradient(circle at 50% 0%, #6d5df0 0%, #2a1f78 45%, #0d0b25 100%)' }}
                >
                  <div className="absolute inset-0 dots-bg opacity-40" />
                  <div className="relative text-5xl drop-shadow-[0_0_24px_rgba(185,185,255,0.8)]">{s.icon}</div>
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {s.chips.map((c) => (
                      <span key={c} className="text-[10px] font-semibold text-white/90 bg-white/15 backdrop-blur px-2 py-1 rounded-md">{c}</span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <div
              className="h-full min-h-[240px] rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ background: 'radial-gradient(circle at 50% 0%, #1e1a52 0%, #07070f 80%)' }}
            >
              <p className="text-white font-semibold leading-snug mb-5">
                Se você precisa captar mais com menos atrito, o EchoChat foi feito para a sua necessidade.
              </p>
              <a href={SITE.signupUrl} className="btn-lavender text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full">
                Assinar agora
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
