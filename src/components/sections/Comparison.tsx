import Reveal, { SectionTitle } from '@/components/ui/Reveal'
import { Logo } from '@/components/mockups/Mockups'

const others = [
  ['WhatsApp pessoal', 'Mensagens perdidas, sem histórico nem responsável'],
  ['Planilha de prazos', 'Atualizada na mão, esquecida na correria'],
  ['CRM + sistema de processos', 'Dois sistemas, dados duplicados'],
]
const echo = [
  ['Conversas centralizadas', 'Histórico, etiqueta e responsável por cliente'],
  ['Publicações e prazos', 'Chegam organizados, com alerta de vencimento'],
  ['Lead ao processo', 'Tudo ligado no mesmo cadastro'],
]

function Col({ label, dot, items, accent }: { label: string; dot: string; items: string[][]; accent: string }) {
  return (
    <div className="card-dark p-5 h-full" style={{ borderColor: accent }}>
      <div className="flex justify-center mb-5">
        <span className="chip"><span className="w-1.5 h-1.5 rounded-full" style={{ background: dot }} />{label}</span>
      </div>
      <div className="space-y-3">
        {items.map(([t, d]) => (
          <div key={t} className="rounded-xl p-3.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-sm font-semibold text-white">{t}</div>
            <div className="text-xs text-gray-400 mt-0.5">{d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Comparison() {
  return (
    <section id="comparativo" className="py-24" style={{ background: '#050507' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={
            <>
              Enquanto outros métodos exigem várias ferramentas, o EchoChat{' '}
              <span className="serif-accent" style={{ fontSize: '1.1em' }}>faz tudo funcionar junto.</span>
            </>
          }
          sub="Menos abas abertas, menos cópia e cola, menos prazo no susto."
        />
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          <Reveal>
            <Col label="Sem EchoChat" dot="#ef4444" items={others} accent="rgba(239,68,68,0.25)" />
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="h-full min-h-[220px] rounded-[18px] flex items-center justify-center relative overflow-hidden"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(124,124,246,0.35), rgba(8,8,20,0.2) 65%)', border: '1px solid rgba(124,124,246,0.2)' }}
            >
              <div className="absolute inset-0 dots-bg opacity-60" />
              <div className="relative flex flex-col items-center gap-3">
                <div style={{ filter: 'drop-shadow(0 0 40px rgba(124,124,246,0.8))' }}><Logo size={96} /></div>
                <span className="text-xs text-gray-300 font-medium">Um único sistema</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Col label="Com EchoChat" dot="#7c7cf6" items={echo} accent="rgba(124,124,246,0.35)" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
