import Background from '@/components/Background'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Story from '@/components/Story'
import ScrollFeatures from '@/components/ScrollFeatures'
import Pricing from '@/components/Pricing'
import Process from '@/components/Process'
import CtaBand from '@/components/CtaBand'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <ScrollFeatures />
        <Pricing />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
