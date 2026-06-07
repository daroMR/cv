import type { CVData } from '../../data/cv'
import ZenShape from '../three/ZenShape'

interface HeroProps {
  cv: CVData
}

export default function Hero({ cv }: HeroProps) {
  return (
    <header
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '260px',
        justifyContent: 'center',
      }}
    >
      <ZenShape />
      <img
        src={cv.photo}
        alt={cv.name}
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid var(--border)',
          boxShadow: '0 2px 8px var(--shadow)',
          position: 'relative',
          zIndex: 1,
        }}
      />
      <h1 style={{ fontSize: '1.75rem', fontWeight: 900, margin: 0, color: 'var(--text)', position: 'relative', zIndex: 1 }}>
        {cv.name}
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: 0, fontWeight: 600, position: 'relative', zIndex: 1 }}>
        {cv.title}
      </p>
      <p style={{ fontSize: '0.9rem', color: 'var(--accent)', margin: 0, position: 'relative', zIndex: 1 }}>
        {cv.tagline}
      </p>
    </header>
  )
}
