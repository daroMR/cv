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
              marginBottom: i < cv.experience.length - 1 ? '1rem' : 0,
              paddingBottom: i < cv.experience.length - 1 ? '1rem' : 0,
              borderBottom: i < cv.experience.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent)', margin: '0 0 0.15rem' }}>
              {exp.company}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 0.35rem' }}>
              {exp.role} | {exp.period}
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.82rem', lineHeight: '1.4' }}>
              {exp.highlights.map((h, j) => (
                <li key={j} style={{ marginBottom: '0.15rem' }}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
