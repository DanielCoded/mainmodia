import Header from '@/components/header'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Properties from '@/components/properties'
import GlobalNetwork from '@/components/global-network'
import Services from '@/components/services'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Properties />
        <GlobalNetwork />
        <Services />
      </main>
    </>
  )
}

