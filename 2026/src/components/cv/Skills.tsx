import type { CVData } from '../../data/cv'

interface SkillsProps {
  cv: CVData
}

export default function Skills({ cv }: SkillsProps) {
  return (
    <section className="card">
      <div className="section-divider">
        <h2>Habilidades clave</h2>
        <div className="line" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
        {cv.keySkills.map(group => (
          <div key={group.title}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem', textAlign: 'center' }}>
              {group.title}
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.75rem', lineHeight: '1.4' }}>
              {group.skills.map((s, i) => (
                <li key={i} style={{ marginBottom: '0.15rem' }}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
