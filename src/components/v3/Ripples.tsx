import { BLUE } from './tokens'

/** Arcos concêntricos, o "eco" da logo, usados como textura de fundo. */
export default function Ripples({
  className = '',
  color = BLUE,
  opacity = 0.18,
  count = 7,
}: {
  className?: string
  color?: string
  opacity?: number
  count?: number
}) {
  return (
    <svg viewBox="0 0 800 800" className={`pointer-events-none ${className}`} fill="none" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const r = 90 + i * 85
        return (
          <circle
            key={i}
            cx="400"
            cy="400"
            r={r}
            stroke={color}
            strokeWidth={i % 2 ? 1 : 2.5}
            opacity={Math.max(0.05, opacity - i * (opacity / (count + 1)))}
            strokeDasharray={i % 3 === 0 ? '0' : '2 7'}
          />
        )
      })}
    </svg>
  )
}
