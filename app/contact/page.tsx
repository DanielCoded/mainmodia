import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Modia Properties",
  description: "Get in touch with Modia Properties for all your real estate needs.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#3D0C11]">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

