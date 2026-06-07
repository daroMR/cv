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
      <div style={{ fontSize: '0.8rem', lineHeight: '1.5', color: 'var(--text)' }}>
        <p style={{ margin: '0.15rem 0' }}>📞 {cv.phone}</p>
        <p style={{ margin: '0.15rem 0' }}>📧 {cv.email}</p>
        <p style={{ margin: '0.15rem 0' }}>🌐 <a href={cv.website} target="_blank" rel="noopener noreferrer">{cv.website}</a></p>
        <p style={{ margin: '0.15rem 0' }}>📍 {cv.location}</p>
      </div>
    </section>
  )
}
