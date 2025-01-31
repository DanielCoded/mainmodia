import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Modia Properties",
  description: "Learn about Modia Properties and our commitment to excellence in real estate.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}

