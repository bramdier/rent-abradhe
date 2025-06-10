import WhatsAppButton from './WhatsAppButton'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-dark text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/logo.png" // Ganti dengan path logo kamu
              alt="Abradhe Rent"
              width={120}       // Sesuaikan ukuran sesuai kebutuhan
              height={40}
              priority
            />
            <p className="text-primary-light">
              Menyediakan berbagai alat berkualitas untuk mendukung event anda dengan harga terjangkau.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-2 text-primary-light">
              <li>Jl. Tanjung Duren Timur 6 No.45A 10, RT.10/RW.2, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470</li>
              <li>Email: info@rental-alat.com</li>
              <li>Telepon: (021) 12345678</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sewa Sekarang</h4>
            <WhatsAppButton />
          </div>
        </div>

        <div className="border-t border-primary mt-8 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} RentalAlat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
