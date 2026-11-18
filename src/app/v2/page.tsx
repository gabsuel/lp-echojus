import type { Metadata } from 'next'
import { Header2, Hero2, Channels } from '@/components/v2/Top'
import Features2 from '@/components/v2/Features2'
import { Flow2, Compare2, Audience2 } from '@/components/v2/Middle2'
import { Pricing2, FAQ2, CTA2, Footer2 } from '@/components/v2/Bottom2'

export const metadata: Metadata = {
  title: 'EchoChat — Nenhum lead sem resposta, nenhum prazo sem dono',
  description: 'CRM e gestão processual para advogados: WhatsApp, funil de leads, publicações, processos e Echo IA.',
}

export default function V2() {
  return (
    <main style={{ background: '#060b14' }}>
      <Header2 />
      <Hero2 />
      <Channels />
      <Features2 />
      <Flow2 />
      <Compare2 />
      <Audience2 />
      <Pricing2 />
      <FAQ2 />
      <CTA2 />
      <Footer2 />
    </main>
  )
}
