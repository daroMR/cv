import { useState } from 'react'
import type { Project } from '../../data/cv'

interface CarouselProps {
  projects: Project[]
}

export default function Carousel({ projects }: CarouselProps) {
  const [idx, setIdx] = useState(0)
  const current = projects[idx]
  if (!current) return null

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <div
        className="no-print"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <button
          className="btn btn-outline"
          onClick={() => setIdx(i => (i - 1 + projects.length) % projects.length)}
          style={{ padding: '0.4rem 0.7rem', fontSize: '1rem' }}
        >
          ◀
        </button>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            {current.title}
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>
            {current.category}
          </span>
        </div>
        <button
          className="btn btn-outline"
          onClick={() => setIdx(i => (i + 1) % projects.length)}
          style={{ padding: '0.4rem 0.7rem', fontSize: '1rem' }}
        >
          ▶
        </button>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
        {current.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', justifyContent: 'center' }}>
        {current.tech.map(t => (
          <span
            key={t}
            style={{
              fontSize: '0.7rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '999px',
              background: 'var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        {idx + 1} / {projects.length}
      </span>
    </div>
  )
}
