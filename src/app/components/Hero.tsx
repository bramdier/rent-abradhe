import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] overflow-hidden mt-15">
      {/* Glassmorphism card */}
      <div className="relative z-10 max-w-3xl mx-auto p-10 rounded-3xl backdrop-blur-2xl bg-[var(--glass-bg)] shadow-[0_0_32px_#00ffe7,0_0_8px_#fff_inset] border-2 border-[var(--accent)]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--accent)] drop-shadow-[0_0_16px_#00ffe7] mb-6 tracking-tight">
          Sewa HT & Alat Futuristik untuk Event Anda
        </h1>
        <p className="text-xl text-[var(--foreground)] mb-8 opacity-90 font-medium">
          Temukan alat berkualitas tinggi dengan teknologi terbaru. Kami siap mendukung kesuksesan event Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

