

export default function WhatsAppButton({ small }: { small?: boolean }) {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold rounded-full transition
        ${small ? 'px-4 py-2 text-sm' : 'px-8 py-3 text-lg'}
        bg-[var(--accent)] text-gray-900 shadow-neon hover:scale-105`}
      style={{
        boxShadow: '0 0 16px 2px var(--accent), 0 0 4px 1px #fff inset'
      }}
    >
      WhatsApp
    </a>
  )
}

