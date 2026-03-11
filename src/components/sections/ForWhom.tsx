'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const forYes = [
  'Você advoga em trabalhista, previdenciário ou consumidor',
  'Você ainda usa planilha para calcular verbas rescisórias',
  'Você tem clientes mas perde tempo demais em análise manual',
  'Você quer escalar o escritório sem contratar mais pessoas',
]

const forNo = [
  'Você só trabalha com direito penal ou empresarial puro (ainda)',
  'Você não quer usar tecnologia de jeito nenhum',
]

export default function ForWhom() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24" style={{ background: '#F8FAFF' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Para quem é?
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900"
          >
            O Echojus foi feito para você?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For you */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-7 border"
            style={{ background: '#F0FDF4', borderColor: '#86EFAC' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: '#DCFCE7' }}
              >
                ✅
              </div>
              <h3 className="text-xl font-bold text-slate-900">O Echojus foi feito para você se:</h3>
            </div>
            <ul className="space-y-4">
              {forYes.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl p-7 border flex flex-col"
            style={{ background: '#FFF7F7', borderColor: '#FECACA' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: '#FEE2E2' }}
              >
                ❌
              </div>
              <h3 className="text-xl font-bold text-slate-900">Não é para você se:</h3>
            </div>
            <ul className="space-y-4">
              {forNo.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-400 mt-0.5 shrink-0 font-bold">✗</span>
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div
              className="mt-auto pt-6 border-t border-red-100"
            >
              <div
                className="rounded-xl p-4"
                style={{ background: '#EEF2FF', border: '1px solid rgba(37,99,235,0.15)' }}
              >
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="text-blue-600 font-semibold">Em breve:</span>{' '}
                  Expansão para tributário, cível e empresarial. Cadastre-se agora e seja avisado primeiro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
