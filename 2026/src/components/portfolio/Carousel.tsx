import { useState, useEffect, useRef } from 'react'
import type { Project } from '../../data/cv'

interface CarouselProps {
  projects: Project[]
  onSelectProject?: (project: Project) => void
}

export default function Carousel({ projects, onSelectProject }: CarouselProps) {
  const [idx, setIdx] = useState(0)
  const [imgIdx, setImgIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [animActive] = useState(true)

  const progressInterval = useRef<number | null>(null)
  const current = projects[idx]

  const handlePrev = () => { setIdx(i => (i - 1 + projects.length) % projects.length); setImgIdx(0) }
  const handleNext = () => { setIdx(i => (i + 1) % projects.length); setImgIdx(0) }

  useEffect(() => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
    }

    if (!isPlaying) {
      setProgress(0)
      return
    }

    const duration = 6500 // 6.5s per project
    const step = 50 // update every 50ms
    let elapsed = 0

    progressInterval.current = window.setInterval(() => {
      elapsed += step
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)

      if (elapsed >= duration) {
        handleNext()
      }
    }, step)

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [isPlaying, idx])

  if (!current) return null

  const image = current.images[imgIdx]

  return (
    <div 
      className="carousel-glass no-print"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Progress Bar Indicator */}
      <div className="carousel-progress-container">
        <div 
          className="carousel-progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="carousel-grid">
        {/* Left Column: Interactive Image Gallery */}
        <div className="carousel-image-pane">
          {image ? (
            <img 
              src={image} 
              alt={current.title} 
              className={`carousel-img ${animActive ? 'opacity-100' : 'opacity-40'}`}
              onClick={() => onSelectProject?.(current)}
              style={{ cursor: onSelectProject ? 'zoom-in' : 'default' }}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
              Sin imagen
            </div>
          )}

          {/* Navigation Arrows */}
          <button 
            className="carousel-arrow carousel-arrow-prev" 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            title="Proyecto anterior"
            aria-label="Proyecto anterior"
          >
            ◀
          </button>
          <button 
            className="carousel-arrow carousel-arrow-next" 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            title="Siguiente proyecto"
            aria-label="Siguiente proyecto"
          >
            ▶
          </button>

          {/* Image Bullet Points overlay */}
          {current.images.length > 1 && (
            <div className="carousel-indicator-dots">
              {current.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                  className={`carousel-dot ${i === imgIdx ? 'active' : ''}`}
                  title={`Imagen ${i + 1}`}
                  aria-label={`Ver imagen ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Project Details & Meta */}
        <div className={`carousel-info carousel-fade ${animActive ? 'active' : ''}`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="carousel-badge">{current.category}</span>
              
              {/* Autoplay play/pause control */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                className="play-pause-btn"
                title={isPlaying ? "Pausar reproducción" : "Reproducir automáticamente"}
              >
                {isPlaying ? (
                  <>⏸ Pausar</>
                ) : (
                  <>▶ Auto</>
                )}
              </button>
            </div>

            <h3 
              style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0.2rem 0 0', color: 'var(--text)', cursor: onSelectProject ? 'pointer' : 'default' }}
              onClick={() => onSelectProject?.(current)}
            >
              {current.title}
            </h3>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0.5rem', lineHeight: '1.45' }}>
              {current.description}
            </p>

            {/* Micro details: Problem, Approach, Result */}
            <div className="carousel-case-study-details">
              <div>
                <strong>Problema:</strong> <span style={{ color: 'var(--text-muted)' }}>{current.problem}</span>
              </div>
              <div>
                <strong>Enfoque:</strong> <span style={{ color: 'var(--text-muted)' }}>{current.approach}</span>
              </div>
              <div>
                <strong>Resultado:</strong> <span style={{ color: 'var(--text-muted)' }}>{current.result}</span>
              </div>
            </div>
          </div>

          <div>
            {/* Tech Stack List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.5rem' }}>
              {current.tech.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>

            {/* Numerical Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid color-mix(in srgb, var(--border) 40%, transparent)', paddingTop: '0.4rem' }}>
              <span>Mini-galería: {imgIdx + 1} de {current.images.length}</span>
              <span style={{ fontWeight: 600 }}>{idx + 1} / {projects.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

