import WhatsAppButton from './WhatsAppButton'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[var(--glass-bg)] border-t-2 border-[var(--accent)] py-8 backdrop-blur-lg">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-[var(--foreground)] mb-2">
          &copy; {new Date().getFullYear()} Rent Abradhe. All rights reserved.
        </p>
        <p className="text-xs text-[var(--accent)]">
          Sewa HT & alat event profesional di Jabodetabek dan sekitarnya.
        </p>
      </div>
    </footer>
  )
}
