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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {cv.keySkills.map(group => (
          <div key={group.title}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem', textAlign: 'center' }}>
              {group.title}
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.8rem', lineHeight: '1.5' }}>
              {group.skills.map((s, i) => (
                <li key={i} style={{ marginBottom: '0.2rem' }}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
