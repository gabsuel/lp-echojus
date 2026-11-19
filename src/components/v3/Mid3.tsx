import Reveal from '@/components/ui/Reveal'
import { KanbanMock, PrazosMock, ProcessosMock, RadarMock, EchoIAMock, ConversasMock } from '@/components/mockups/Mockups'
import Ripples from './Ripples'
import { INK, PAPER, BLUE, SERIF } from './tokens'

/* ───────── Um dia no escritório ───────── */
const day = [
  { time: '08:12', title: 'Um lead chega pelo Instagram', text: 'O robô faz as primeiras perguntas, identifica a área do direito e registra a origem do anúncio.', tag: 'Atendimento' },
  { time: '09:40', title: 'Chega uma intimação', text: 'A publicação do tribunal cai com o prazo calculado e o advogado responsável já definido.', tag: 'Prazos' },
  { time: '11:05', title: 'Contrato assinado', text: 'O card vai para a última coluna do funil e vira cadastro de cliente, sem redigitar nada.', tag: 'Funil' },
  { time: '14:30', title: 'Processo ganha novidade', text: 'O caso aparece em destaque no kanban de fases, pronto para você avisar o cliente.', tag: 'Processos' },
  { time: '17:50', title: 'Cliente avisado, prazo tratado', text: 'A mensagem sai pelo WhatsApp do escritório e a publicação é marcada como tratada.', tag: 'Rotina' },
]

export function Day3() {
  return (
    <section id="dia" className="py-28" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: BLUE }}>Um dia no escritório</p>
            <h2 className="mt-4 leading-[1.02] tracking-tight" style={{ ...SERIF, color: INK, fontSize: 'clamp(2.2rem, 3.8vw, 3.3rem)' }}>
              Do primeiro WhatsApp <em style={{ color: BLUE }}>ao prazo cumprido.</em>
            </h2>
            <p className="mt-5 text-lg" style={{ color: '#4a5878' }}>
              Cinco momentos de uma terça-feira comum. Nenhum deles depende de planilha, de bloco de notas ou de memória.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ol className="relative">
            <div className="absolute left-[39px] top-2 bottom-2 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(37,99,235,0.35) 8%, rgba(37,99,235,0.35) 92%, transparent)' }} />
            {day.map((d, i) => (
              <Reveal key={d.time} delay={i * 0.05}>
                <li className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="shrink-0 w-20 text-center">
                    <span className="relative z-10 inline-block rounded-full px-3 py-1 text-sm font-semibold tabular-nums" style={{ background: INK, color: '#fff' }}>{d.time}</span>
                  </div>
                  <div className="flex-1 rounded-2xl p-6" style={{ background: PAPER, border: '1px solid rgba(12,26,51,0.07)' }}>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: BLUE }}>{d.tag}</span>
                    <h3 className="mt-2 text-2xl" style={{ ...SERIF, color: INK }}>{d.title}</h3>
                    <p className="mt-2 leading-relaxed" style={{ color: '#4a5878' }}>{d.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ───────── Recursos em zigue-zague ───────── */
const features = [
  { n: '01', title: 'Todas as conversas, uma só caixa', text: 'WhatsApp e Instagram conectados, com etiqueta por área do direito, responsável por conversa e histórico completo. O robô atende no primeiro contato e você assume quando quiser.', points: ['Processo vinculado à conversa', 'Respostas rápidas e mensagens automáticas'], node: <ConversasMock /> },
  { n: '02', title: 'Funil de captação até o contrato', text: 'Cada contato vira um card. Arraste entre as etapas, veja de onde vieram os leads e quanto cada campanha fecha.', points: ['Origem: Instagram, Facebook, orgânico', 'Etapas do seu jeito'], node: <KanbanMock /> },
  { n: '03', title: 'Prazos que ninguém esquece', text: 'Publicações dos tribunais com vencimento em destaque: o que venceu, o que vence em 3 dias e o que já foi tratado.', points: ['Filtro por TJ, TRF e TRT', 'Responsável por publicação'], node: <PrazosMock /> },
  { n: '04', title: 'Processos por fase, sem planilha', text: 'Do distribuído ao arquivado, em colunas. Veja quais casos tiveram novidade e avise o cliente sem sair do sistema.', points: ['Atalho “com novidade”', 'Aviso ao cliente pelo WhatsApp'], node: <ProcessosMock /> },
]

export function Features3() {
  return (
    <section id="recursos" className="py-28" style={{ background: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: BLUE }}>Recursos</p>
          <h2 className="mt-4 leading-[1.02] tracking-tight" style={{ ...SERIF, color: INK, fontSize: 'clamp(2.2rem, 3.8vw, 3.3rem)' }}>
            Menos abas abertas. <em style={{ color: BLUE }}>Mais causas ganhas.</em>
          </h2>
        </div>
        <div className="space-y-28">
          {features.map((f, i) => (
            <Reveal key={f.n}>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <div className="leading-none" style={{ ...SERIF, color: 'rgba(37,99,235,0.22)', fontSize: '5rem' }}>{f.n}</div>
                  <h3 className="mt-2 leading-tight" style={{ ...SERIF, color: INK, fontSize: '2rem' }}>{f.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed" style={{ color: '#4a5878' }}>{f.text}</p>
                  <ul className="mt-6 space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-3" style={{ color: INK }}>
                        <span className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[11px] text-white" style={{ background: BLUE }}>✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl" style={{ boxShadow: '0 30px 70px -25px rgba(12,26,51,0.3)' }}>{f.node}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Faixa escura: inteligência ───────── */
export function Intel3() {
  return (
    <section className="relative overflow-hidden py-28" style={{ background: INK }}>
      <Ripples className="absolute -left-72 top-0 w-[1100px] h-[1100px]" color="#60a5fa" opacity={0.16} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">Inteligência</p>
          <h2 className="mt-4 leading-[1.02] tracking-tight text-white" style={{ ...SERIF, fontSize: 'clamp(2.2rem, 3.8vw, 3.3rem)' }}>
            Dados para escolher a causa. <em className="text-blue-300">IA para adiantar a peça.</em>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}><RadarMock /></div>
            <h3 className="mt-6 text-3xl text-white" style={SERIF}>Radar de comarcas</h3>
            <p className="mt-2 text-blue-100/70 leading-relaxed">Compare quanto cada tipo de ação costuma render por comarca, com base em sentenças públicas de 1º grau.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}><EchoIAMock /></div>
            <h3 className="mt-6 text-3xl text-white" style={SERIF}>Echo IA</h3>
            <p className="mt-2 text-blue-100/70 leading-relaxed">Peça resumo de intimação, rascunho de manifestação ou próximos passos. Você revisa e protocola.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
