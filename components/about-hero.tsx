import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
        alt="Modern cityscape"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Modia Properties</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">Redefining real estate excellence in Nigeria and beyond</p>
      </div>
    </section>
  )
}

