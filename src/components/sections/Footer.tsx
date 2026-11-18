import { Logo } from '@/components/mockups/Mockups'
import { SITE } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo size={26} />
          <span className="font-semibold text-white">EchoChat</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#funcionalidades" className="hover:text-white">Funcionalidades</a>
          <a href="#precos" className="hover:text-white">Planos</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href={SITE.loginUrl} className="hover:text-white">Login</a>
        </nav>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} EchoChat. Todos os direitos reservados.</p>
      </div>
      <div
        className="select-none text-center font-black leading-none pb-2 pointer-events-none"
        aria-hidden
        style={{
          fontSize: 'clamp(4rem, 17vw, 14rem)',
          letterSpacing: '-0.04em',
          background: 'linear-gradient(180deg, rgba(124,124,246,0.35), rgba(124,124,246,0))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        ECHOCHAT
      </div>
    </footer>
  )
}
