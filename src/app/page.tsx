import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import ToolsGrid from '@/components/sections/ToolsGrid'
import ForWhom from '@/components/sections/ForWhom'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <ToolsGrid />
      <ForWhom />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
