import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { HowItWorks } from '@/components/HowItWorks'
import { TargetAudience } from '@/components/TargetAudience'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

const Page = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <TargetAudience />
      <CTA />
      <Footer />
    </main>
  )
}

export default Page

