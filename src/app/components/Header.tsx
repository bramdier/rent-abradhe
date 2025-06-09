import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-dark">
          Abradhe Rent
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#products" className="text-gray-700 hover:text-primary transition">
            Produk
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-primary transition">
            Testimoni
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-primary transition">
            Kontak
          </Link>
        </nav>
        
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
