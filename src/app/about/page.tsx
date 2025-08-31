import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import CompanyValues from '@/components/CompanyValues'
import TeamSection from '@/components/TeamSection'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'About Us - SS Solar | Leading Solar Installation Company',
  description: 'Learn about SS Solar\'s mission to provide sustainable energy solutions. Discover our story, values, and the team behind Texas\' premier solar installation company.',
  keywords: 'about SS Solar, solar company mission, solar installation team, company values, solar energy experts',
}

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <CompanyValues />
      <Timeline />
      <TeamSection />
    </div>
  )
}
