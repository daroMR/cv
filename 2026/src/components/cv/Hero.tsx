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
        gap: '0.4rem',
        padding: '1.25rem',
      }}
    >
      <img
        src={cv.photo}
        alt={cv.name}
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid var(--border)',
          boxShadow: '0 2px 8px var(--shadow)',
        }}
      />
      <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, color: 'var(--text)' }}>
        {cv.name}
      </h1>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, fontWeight: 600 }}>
        {cv.title}
      </p>
      <p style={{ fontSize: '0.8rem', color: 'var(--accent)', margin: 0 }}>
        {cv.tagline}
      </p>
    </header>
  )
}
