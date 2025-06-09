import { Product } from '../types/Product'
import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-95 bg-gray-200 overflow-hidden">
        <img 
          src={`/images/${product.image}`} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <span className="bg-primary-light text-primary-dark text-sm px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">{product.price}</span>
          <WhatsAppButton small />
        </div>
      </div>
    </div>
  )
}
