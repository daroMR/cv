import type { CVData } from '../../data/cv'

interface ContactProps {
  cv: CVData
}

export default function Contact({ cv }: ContactProps) {
  return (
    <section className="card">
      <div className="section-divider">
        <h2>Contacto</h2>
        <div className="line" />
      </div>
      <div style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text)' }}>
        <p>📞 {cv.phone}</p>
        <p>📧 {cv.email}</p>
        <p>🌐 <a href={cv.website} target="_blank" rel="noopener noreferrer">{cv.website}</a></p>
        <p>📍 {cv.location}</p>
        <p>{cv.age}</p>
        <p>💰 Pretensión mensual: {cv.objectiveSalary}</p>
      </div>
    </section>
  )
}
