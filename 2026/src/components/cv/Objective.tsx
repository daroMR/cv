import type { CVData } from '../../data/cv'

interface ObjectiveProps {
  cv: CVData
}

export default function Objective({ cv }: ObjectiveProps) {
  return (
    <section className="card">
      <div className="section-divider">
        <h2>Objetivo profesional</h2>
        <div className="line" />
      </div>
      <p style={{ fontSize: '0.8rem', lineHeight: '1.4', textAlign: 'justify', margin: 0 }}>
        {cv.objective}
      </p>
    </section>
  )
}
