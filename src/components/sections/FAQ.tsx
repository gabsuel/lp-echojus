'use client'
import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'

export const faqs = [
  {
    q: 'Qual a diferença entre o EchoChat e um CRM tradicional?',
    a: 'CRMs tradicionais só organizam contatos. O EchoChat junta atendimento no WhatsApp e Instagram, funil de leads e o módulo jurídico: publicações, prazos, processos, radar de comarcas e Echo IA.',
  },
  {
    q: 'Como as publicações dos tribunais chegam?',
    a: 'Você cadastra seus processos e as publicações aparecem organizadas por tribunal e responsável, com atalhos para prazo vencido, a vencer e tratado.',
  },
  {
    q: 'Como funciona a garantia de 7 dias?',
    a: 'Você assina e usa o EchoChat por 7 dias. Se não gostar, devolvemos o valor que você pagou.',
  },
  {
    q: 'Posso usar meu número de WhatsApp atual?',
    a: 'Sim. Você conecta o número lendo um QR Code e continua atendendo pelo painel, com histórico, etiquetas e responsável por conversa.',
  },
  {
    q: 'A IA responde sozinha aos meus clientes?',
    a: 'Só se você quiser. O robô faz o primeiro atendimento e qualifica o lead, e o atendente assume quando quiser. A Echo IA gera rascunhos que você sempre revisa antes de enviar ou protocolar.',
  },
  {
    q: 'Como funciona a implantação e o treinamento?',
    a: 'Nossa equipe ajuda a conectar o WhatsApp, configurar etiquetas, etapas do funil e robôs, e a importar seus processos.',
  },
  {
    q: 'Meus dados e os dos meus clientes estão seguros?',
    a: 'Os dados ficam separados por escritório e o acesso é controlado por usuário. Os detalhes de segurança e LGPD constam no contrato.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const [query, setQuery] = useState('')
  const list = faqs.filter((f) => (f.q + f.a).toLowerCase().includes(query.toLowerCase()))

  return (
    <section id="faq" className="py-28" style={{ background: '#050507' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2">
          <span className="chip mb-5">Perguntas frequentes</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            Provavelmente você tenha alguma dessas dúvidas
          </h2>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar respostas"
            aria-label="Buscar respostas"
            className="mt-8 w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#7c7cf6]"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
          />
        </Reveal>

        <div className="lg:col-span-3">
          {list.length === 0 && <p className="text-gray-500 text-sm">Nenhuma pergunta encontrada.</p>}
          {list.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium" style={{ color: isOpen ? '#b9b9ff' : '#fff' }}>{f.q}</span>
                  <span
                    className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-sm"
                    style={isOpen ? { background: '#7c7cf6', color: '#0a0a1a' } : { border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}
                  >
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                {isOpen && <p className="pb-5 pr-10 text-sm text-gray-400 leading-relaxed">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
