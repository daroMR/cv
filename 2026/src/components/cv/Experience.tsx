import type { CVData } from '../../data/cv'

interface ExperienceProps {
  cv: CVData
}

export default function Experience({ cv }: ExperienceProps) {
  if (cv.experience.length === 0) return null

  return (
    <section className="card">
      <div className="section-divider">
        <h2>Experiencia profesional</h2>
        <div className="line" />
      </div>
      <div>
        {cv.experience.map((exp, i) => (
          <div
            key={i}
            style={{
              marginBottom: i < cv.experience.length - 1 ? '0.75rem' : 0,
              paddingBottom: i < cv.experience.length - 1 ? '0.75rem' : 0,
              borderBottom: i < cv.experience.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', margin: '0 0 0.1rem' }}>
              {exp.company}
            </h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 0.25rem' }}>
              {exp.role} | {exp.period}
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.75rem', lineHeight: '1.35' }}>
              {exp.highlights.map((h, j) => (
                <li key={j} style={{ marginBottom: '0.1rem' }}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
