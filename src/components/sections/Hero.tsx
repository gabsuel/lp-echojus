'use client'
import { motion } from 'framer-motion'
import { ConversasMock } from '@/components/mockups/Mockups'
import { SITE } from '@/lib/config'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
})

export default function Hero() {
  return (
    <section id="overview" className="relative pt-36 pb-0 overflow-hidden" style={{ background: '#050507' }}>
      {/* Horizonte curvo brilhante */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          bottom: -520,
          width: '170%',
          height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124,124,246,0.35) 0%, rgba(60,50,160,0.18) 30%, transparent 62%)',
          borderTop: '1px solid rgba(185,185,255,0.35)',
          boxShadow: '0 -30px 120px rgba(100,90,240,0.25)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,124,246,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="chip">CRM jurídico com IA integrada</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-bold tracking-tight text-white leading-[1.04]"
            style={{ fontSize: 'clamp(2.4rem, 6.4vw, 5.2rem)' }}
          >
            Do primeiro WhatsApp
            <br />
            <span className="serif-accent" style={{ fontSize: '1.08em' }}>ao prazo cumprido.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-7 text-lg font-medium text-white">
            Quem usa o EchoChat não perde cliente nem prazo. Organize.
          </motion.p>
          <motion.p {...fadeUp(0.2)} className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Atendimento no WhatsApp e Instagram, funil de leads, publicações dos tribunais, processos e Echo IA —
            tudo fluindo em um sistema criado para o escritório de advocacia.
          </motion.p>

          <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-3 justify-center mt-8">
            <a href="#precos" className="btn-lavender text-sm font-semibold px-6 py-3 rounded-full">
              Consultar planos
            </a>
            <a href={SITE.whatsappUrl} className="btn-outline-dark text-sm font-semibold px-6 py-3 rounded-full">
              Agendar demo ↗
            </a>
          </motion.div>
        </div>

        {/* Produto */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="relative mt-16 max-w-4xl mx-auto"
        >
          <div
            className="rounded-t-2xl p-2 pb-0"
            style={{
              background: 'linear-gradient(180deg, rgba(185,185,255,0.35), rgba(185,185,255,0.04))',
              boxShadow: '0 -10px 80px rgba(124,124,246,0.28)',
            }}
          >
            <div className="rounded-t-xl overflow-hidden" style={{ maxHeight: 420 }}>
              <ConversasMock />
            </div>
          </div>
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, transparent, #050507)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
