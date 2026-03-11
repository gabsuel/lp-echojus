import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Echojus — Plataforma Jurídica com IA',
  description: 'Análise de documentos, cálculos jurídicos e agenda — tudo em um lugar, feito com IA. O Echojus substitui planilhas, calculadoras avulsas e horas de trabalho manual.',
  keywords: 'software jurídico, calculadora trabalhista, análise de documentos IA, agenda jurídica, advogado',
  openGraph: {
    title: 'Echojus — Plataforma Jurídica com IA',
    description: 'Você para de perder dinheiro e tempo fazendo na mão o que o Echojus faz em segundos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
