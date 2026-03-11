'use client'
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. O Echojus é 100% web. Você acessa pelo navegador, em qualquer dispositivo, sem instalar nada.',
  },
  {
    q: 'Os cálculos são confiáveis juridicamente?',
    a: 'Sim. Todos os cálculos são baseados na legislação vigente e atualizados automaticamente. Cada cálculo gera uma memória de cálculo completa e auditável, que pode ser anexada à sua petição.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Sem problema. Você tem 7 dias de teste gratuito sem precisar informar cartão. Se decidir assinar e em 30 dias não estiver satisfeito, devolvemos o valor integralmente.',
  },
  {
    q: 'Funciona para qualquer área do direito?',
    a: 'Hoje o Echojus é especializado em direito trabalhista, previdenciário e bancário/consumidor. Os módulos de direito tributário e cível estão em desenvolvimento e serão lançados em breve.',
  },
  {
    q: 'Meus dados são seguros?',
    a: 'Sim. Os dados são armazenados em infraestrutura Supabase com criptografia em trânsito e em repouso. Jamais vendemos ou compartilhamos seus dados com terceiros.',
  },
  {
    q: 'Posso usar no celular?',
    a: 'Sim. O Echojus é totalmente responsivo e funciona bem em smartphones e tablets. Ideal para consultar a agenda ou acessar um cálculo rapidamente.',
  },
]

function FAQItem({ faq, index, inView }: { faq: typeof faqs[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
      className="rounded-xl overflow-hidden border transition-colors duration-200"
      style={{
        borderColor: open ? '#BFDBFE' : '#E2E8F0',
        background: open ? '#F0F7FF' : 'white',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-slate-800 font-medium text-base">{faq.q}</span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 text-sm font-bold"
          style={{
            background: open ? 'linear-gradient(135deg,#2563EB,#7C3AED)' : '#EEF2FF',
            color: open ? 'white' : '#2563EB',
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" ref={ref} className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: '#EEF2FF', color: '#2563EB' }}
            >
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900"
          >
            Perguntas frequentes
          </motion.h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
