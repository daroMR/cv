import type { CVData } from '../../data/cv'

interface ProfileProps {
  cv: CVData
}

export default function Profile({ cv }: ProfileProps) {
  return (
    <section className="card">
      <div className="section-divider">
        <h2>Perfil profesional</h2>
        <div className="line" />
      </div>
      <div style={{ fontSize: '0.85rem', lineHeight: '1.5', textAlign: 'justify' }}>
        {cv.profile.map((p, i) => (
          <p key={i} style={{ marginBottom: '0.5rem', textIndent: '1.5em' }}>{p}</p>
        ))}
      </div>
    </section>
  )
}
