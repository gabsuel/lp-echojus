'use client'

/* Cartão com brilho que acompanha o ponteiro (ou o dedo). */
export default function SpotCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="spot-card h-full rounded-2xl p-5 sm:p-7"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
      }}
    >
      {children}
    </div>
  )
}
