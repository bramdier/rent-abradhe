export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ezra Mirael",
      role: "Mahasiswa",
      content: "Pelayanan sangat memuaskan, alat-alat dalam kondisi prima dan harga kompetitif.",
      rating: 5
    },
    {
      id: 2,
      name: "Abraham Siregar",
      role: "Event Organizer",
      content: "Proses sewa mudah dan cepat. Alat datang tepat waktu sesuai kebutuhan event kami.",
      rating: 4
    },
    {
      id: 3,
      name: "Dhea Octa",
      role: "Anggota Gereja",
      content: "Sudah beberapa kali sewa di sini, selalu puas dengan kualitas alat dan pelayanannya.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#1e293b]/80 via-[#00ffe7]/10 to-[#2c5364]/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[var(--accent)] mb-14 drop-shadow-[0_0_16px_#00ffe7] tracking-wide">
          Apa Kata Pelanggan Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-[var(--glass-bg)] p-8 rounded-3xl shadow-[0_0_24px_#00ffe7,0_0_8px_#fff_inset] border border-[var(--accent)] backdrop-blur-xl flex flex-col items-center transition hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < testimonial.rating ? 'text-[var(--accent)] drop-shadow-[0_0_8px_#00ffe7]' : 'text-gray-400'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-[var(--foreground)] mb-6 italic text-center">
                "{testimonial.content}"
              </p>
              <div className="text-center">
                <h4 className="font-bold text-[var(--accent)] text-xl drop-shadow-[0_0_8px_#00ffe7]">{testimonial.name}</h4>
                <p className="text-xs text-[var(--foreground)]/70 mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
