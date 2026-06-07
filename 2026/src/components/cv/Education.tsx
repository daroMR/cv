import type { CVData } from '../../data/cv'

interface EducationProps {
  cv: CVData
}

export default function Education({ cv }: EducationProps) {
  return (
    <section className="card">
      <div className="section-divider">
        <h2>Educación y formación</h2>
        <div className="line" />
      </div>
      <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.8rem', lineHeight: '1.5' }}>
        {cv.education.map((edu, i) => (
          <li key={i} style={{ marginBottom: '0.15rem' }}>
            <strong>{edu.title}</strong> — {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  )
}
