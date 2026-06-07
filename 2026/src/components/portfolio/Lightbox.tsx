import { useEffect, useCallback } from 'react'
import type { Project } from '../../data/cv'

interface LightboxProps {
  project: Project
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ project, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1200,
        padding: '2rem',
      }}
      onClick={onClose}
    >
      <div style={{ maxWidth: '700px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          {project.title}
        </h2>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>
          {project.description}
        </p>
        <div style={{ color: '#aaa', fontSize: '0.85rem', textAlign: 'left', marginBottom: '1rem' }}>
          <p><strong>Problema:</strong> {project.problem}</p>
          <p><strong>Enfoque:</strong> {project.approach}</p>
          <p><strong>Resultado:</strong> {project.result}</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-outline" onClick={e => { e.stopPropagation(); onPrev() }} style={{ color: '#fff', borderColor: '#555' }}>◀ Anterior</button>
          <button className="btn btn-outline" onClick={e => { e.stopPropagation(); onNext() }} style={{ color: '#fff', borderColor: '#555' }}>Siguiente ▶</button>
          <button className="btn" onClick={onClose}>Cerrar ✕</button>
        </div>
      </div>
    </div>
  )
}
