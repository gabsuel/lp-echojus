import { Header3, Hero3 } from '@/components/v3/Top3'
import { Day3, Features3, Intel3 } from '@/components/v3/Mid3'
import { Pricing3, FAQ3, CTA3, Footer3 } from '@/components/v3/Bottom3'

export default function Home() {
  return (
    <main style={{ background: '#f6f5f1' }}>
      <Header3 />
      <Hero3 />
      <Day3 />
      <Features3 />
      <Intel3 />
      <Pricing3 />
      <FAQ3 />
      <CTA3 />
      <Footer3 />
    </main>
  )
}
