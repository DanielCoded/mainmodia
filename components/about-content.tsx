import { Check } from "lucide-react"

export default function AboutContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#3D0C11]">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2018, Modia Properties has quickly established itself as a leader in the Nigerian real estate
            market. Our journey began with a simple yet powerful vision: to transform the way people buy, sell, and
            invest in property.
          </p>
          <p className="text-gray-700 mb-6">
            With a deep understanding of the local market and a commitment to innovation, we've grown from a small
            startup to a trusted name in real estate, serving clients across Nigeria and expanding our reach
            internationally.
          </p>
          <h2 className="text-3xl font-bold my-8 text-[#3D0C11]">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At Modia Properties, our mission is to empower individuals and businesses to make informed real estate
            decisions. We strive to provide unparalleled service, leveraging cutting-edge technology and deep market
            insights to deliver exceptional value to our clients.
          </p>
          <h2 className="text-3xl font-bold my-8 text-[#3D0C11]">What Sets Us Apart</h2>
          <ul className="space-y-4">
            {[
              "Extensive local and international market knowledge",
              "Innovative use of technology in property transactions",
              "Personalized service tailored to each client's needs",
              "Commitment to transparency and ethical practices",
              "Diverse portfolio of properties to suit every requirement",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

