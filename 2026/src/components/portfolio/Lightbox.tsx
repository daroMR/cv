import { useEffect, useCallback, useState } from 'react'
import type { Project } from '../../data/cv'

interface LightboxProps {
  project: Project
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ project, onClose, onPrev, onNext }: LightboxProps) {
  const [imgIdx, setImgIdx] = useState(0)

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') { setImgIdx(i => (i + 1) % Math.max(project.images.length, 1)); onNext() }
    if (e.key === 'ArrowLeft') { setImgIdx(i => (i - 1 + Math.max(project.images.length, 1)) % Math.max(project.images.length, 1)); onPrev() }
  }, [onClose, onNext, onPrev, project.images.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  const image = project.images[imgIdx]

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1200, padding: '2rem' }} onClick={onClose}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
        {image && (
          <div style={{ width: '100%', maxHeight: '50vh', overflow: 'hidden', borderRadius: '0.5rem', marginBottom: '1rem', background: '#111' }}>
            <img src={image} alt={project.title} style={{ width: '100%', height: 'auto', maxHeight: '50vh', objectFit: 'contain', display: 'block' }} />
          </div>
        )}
        {project.images.length > 1 && (
          <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
            {project.images.map((_, i) => (
              <button key={i} onClick={() => setImgIdx(i)} style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', background: i === imgIdx ? 'var(--accent)' : '#555', cursor: 'pointer', padding: 0 }} />
            ))}
          </div>
        )}
        <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.title}</h2>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.description}</p>
        <div style={{ color: '#aaa', fontSize: '0.85rem', textAlign: 'left', marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.35rem' }}><strong>Problema:</strong> {project.problem}</p>
          <p style={{ marginBottom: '0.35rem' }}><strong>Enfoque:</strong> {project.approach}</p>
          <p style={{ marginBottom: '0.35rem' }}><strong>Resultado:</strong> {project.result}</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-outline" onClick={onPrev} style={{ color: '#fff', borderColor: '#555' }}>◀ Anterior</button>
          <button className="btn btn-outline" onClick={onNext} style={{ color: '#fff', borderColor: '#555' }}>Siguiente ▶</button>
          <button className="btn" onClick={onClose}>Cerrar ✕</button>
        </div>
      </div>
    </div>
  )
}
