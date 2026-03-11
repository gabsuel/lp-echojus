'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const trustCards = [
  {
    icon: '🔒',
    title: 'Criptografia de ponta a ponta',
    description: 'Todos os dados são criptografados em trânsito e em repouso com padrão AES-256.',
  },
  {
    icon: '🇧🇷',
    title: 'Conformidade com LGPD',
    description: 'Operamos em total conformidade com a Lei Geral de Proteção de Dados Pessoais.',
  },
  {
    icon: '🏛️',
    title: 'Infraestrutura Supabase',
    description: 'Hospedado na infraestrutura Supabase com uptime de 99,9% e redundância total.',
  },
  {
    icon: '👁️',
    title: 'Você controla seus dados',
    description: 'Seus documentos são seus. Nunca compartilhamos ou vendemos dados de clientes.',
  },
  {
    icon: '🔐',
    title: 'Autenticação segura',
    description: 'Login protegido com suporte a autenticação de dois fatores (2FA).',
  },
  {
    icon: '📵',
    title: 'Sem acesso não autorizado',
    description: 'Nenhum funcionário acessa seus dados sem autorização explícita e auditada.',
  },
]

export default function Security() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
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
              Segurança & Privacidade
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Seus dados, protegidos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Documentos jurídicos são sensíveis. Por isso o Echojus foi construído com os mais altos padrões de segurança da indústria.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border border-slate-100 rounded-2xl p-6 bg-white hover:shadow-md transition-all duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: '#EEF2FF' }}
              >
                {card.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-sm">
            Tem dúvidas sobre privacidade?{' '}
            <a href="mailto:contato@echojus.com.br" className="text-blue-600 hover:underline font-medium">
              Fale com a nossa equipe
            </a>
            {' '}ou consulte nossa{' '}
            <a href="/privacidade" className="text-blue-600 hover:underline font-medium">
              Política de Privacidade
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
