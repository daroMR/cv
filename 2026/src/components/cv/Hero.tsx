import type { CVData } from '../../data/cv'

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
      }}
    >
      <div className="three-container no-print" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
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
        }}
      />
      <h1 style={{ fontSize: '1.75rem', fontWeight: 900, margin: 0, color: 'var(--text)' }}>
        {cv.name}
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: 0, fontWeight: 600 }}>
        {cv.title}
      </p>
      <p style={{ fontSize: '0.9rem', color: 'var(--accent)', margin: 0 }}>
        {cv.tagline}
      </p>
    </header>
  )
}
