import { Product } from '../types/Product'
import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-[var(--glass-bg)] rounded-2xl shadow-xl border border-[var(--accent)] backdrop-blur-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="h-64 bg-gradient-to-tr from-[#00ffe7]/20 to-[#1e293b]/40 overflow-hidden flex items-center justify-center">
        <img 
          src={`/images/${product.image}`} 
          alt={product.name}
          className="w-4/5 h-4/5 object-contain drop-shadow-lg"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-[var(--accent)] drop-shadow-neon">{product.name}</h3>
          <span className="bg-[var(--accent)]/20 text-[var(--accent)] text-xs px-3 py-1 rounded-full border border-[var(--accent)]">
            {product.category}
          </span>
        </div>
        <p className="text-[var(--foreground)]/80 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-[var(--accent)]">{product.price}</span>
          <WhatsAppButton small />
        </div>
      </div>
    </div>
  )
}
