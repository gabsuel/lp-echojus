import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-14" style={{ background: '#F8FAFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/img/logo/echo-dark-mode.png"
              alt="Echojus"
              width={120}
              height={32}
              className="h-7 w-auto mb-4"
            />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Plataforma jurídica com IA para advogados trabalhistas, previdenciários e de consumidor.
            </p>
            <div className="flex gap-2 mt-5">
              {['LinkedIn', 'Instagram', 'WhatsApp'].map((s) => (
                <a
                  key={s}
                  href="#"
                  title={s}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold text-slate-500 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-800 text-sm font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Termos de Uso', href: '/termos' },
                { label: 'Política de Privacidade', href: '/privacidade' },
                { label: 'Login', href: '/login' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-slate-800 text-sm font-semibold mb-5">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@echojus.com.br" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  contato@echojus.com.br
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400" style={{ borderTop: '1px solid #E2E8F0' }}>
          <span>© {year} Echojus. Todos os direitos reservados.</span>
          <span className="text-xs">Feito com ❤️ para advogados brasileiros</span>
        </div>
      </div>
    </footer>
  )
}
