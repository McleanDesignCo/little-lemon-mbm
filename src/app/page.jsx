import About from '@/components/About'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import FoodSpecials from '@/components/FoodSpecials'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Menu from '@/components/Menu'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FoodSpecials />
        <CallToAction />
        <Menu />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
