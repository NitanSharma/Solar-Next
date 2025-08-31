import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Portfolio />
      <CTA />
    </div>
  )
}
