import type { Metadata } from 'next'
import { Inter, Instrument_Serif, Space_Grotesk, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EchoChat — CRM e gestão processual para advogados',
  description:
    'Atenda clientes no WhatsApp, capte leads, receba publicações dos tribunais e acompanhe processos e prazos em um só lugar.',
  keywords: 'crm para advogados, whatsapp para escritório de advocacia, publicações e prazos, gestão de processos, software jurídico',
  openGraph: {
    title: 'EchoChat — Do primeiro WhatsApp ao prazo cumprido',
    description: 'CRM de atendimento + gestão de processos e prazos para advogados.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${serif.variable} ${grotesk.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  )
}
