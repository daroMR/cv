import { useState } from 'react'
import type { Project } from '../../data/cv'

interface CaseStudyProps {
  project: Project
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className="card"
      style={{ cursor: 'pointer', transition: 'all 0.2s' }}
      onClick={() => setExpanded(!expanded)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            {project.title}
          </h3>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--accent)',
              fontWeight: 600,
            }}
          >
            {project.category}
          </span>
        </div>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          {expanded ? '▲' : '▼'}
        </span>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: '0 0 0.5rem' }}>
        {project.description}
      </p>

      {expanded && (
        <div style={{ fontSize: '0.82rem', lineHeight: '1.5', borderTop: '1px solid var(--border)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Problema:</strong> {project.problem}
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Enfoque:</strong> {project.approach}
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Resultado:</strong> {project.result}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' }}>
            {project.tech.map(t => (
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
        </div>
      )}
    </article>
  )
}
