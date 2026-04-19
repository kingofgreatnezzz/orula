import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Coaches from '@/components/Coaches'
import Pricing from '@/components/Pricing'
import Registration from '@/components/Registration'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-orula-cream to-white">
      <Hero />
      <About />
      <Programs />
      <Coaches />
      <Pricing />
      <Registration />
      <Contact />
    </div>
  )
}