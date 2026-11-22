import Icon from './Icon'
import { BLUE } from './tokens'

export default function Chip({ children, icon, dark }: { children: React.ReactNode; icon?: string; dark?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
      style={
        dark
          ? { color: '#93c5fd', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)' }
          : { color: BLUE, background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.16)' }
      }
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  )
}
