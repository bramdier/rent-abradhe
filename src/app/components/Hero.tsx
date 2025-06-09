import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative bg-primary-light">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sewa HT & Alat Profesional untuk Event Anda
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Temukan berbagai alat berkualitas tinggi dengan harga terjangkau. Kami siap mendukung kesuksesan event Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  )
}
