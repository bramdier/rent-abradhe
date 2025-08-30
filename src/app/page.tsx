import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { products } from './data/Product'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        
        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-[var(--accent)] mb-14 drop-shadow-[0_0_16px_#00ffe7] tracking-wide">
              Alat yang Tersedia
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
