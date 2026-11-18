import Reveal from '@/components/ui/Reveal'
import { SITE } from '@/lib/config'

export default function FinalCTA() {
  return (
    <section className="pb-24 pt-4" style={{ background: '#050507' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-16 text-center"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(124,124,246,0.35), rgba(10,10,28,0.95) 70%)',
              border: '1px solid rgba(124,124,246,0.25)',
            }}
          >
            <div className="absolute inset-0 dots-bg opacity-40 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4">
                Pare de perder cliente e prazo{' '}
                <span className="serif-accent" style={{ fontSize: '1.1em' }}>por desorganização.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Teste o EchoChat grátis e veja o seu escritório inteiro em um só painel.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={SITE.signupUrl} className="btn-lavender text-sm font-semibold px-7 py-3 rounded-full">Testar grátis</a>
                <a href={SITE.whatsappUrl} className="btn-outline-dark text-sm font-semibold px-7 py-3 rounded-full">Falar no WhatsApp ↗</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
