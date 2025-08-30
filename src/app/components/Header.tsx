import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--glass-bg)] backdrop-blur-xl border-b border-[var(--accent)] shadow-neon">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold text-[var(--accent)] drop-shadow-neon tracking-wide">
          Rent Abradhe
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="#products" className="text-[var(--foreground)] hover:text-[var(--accent)] transition font-semibold">
              Produk
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-[var(--foreground)] hover:text-[var(--accent)] transition font-semibold">
              Testimoni
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-[var(--foreground)] hover:text-[var(--accent)] transition font-semibold">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
