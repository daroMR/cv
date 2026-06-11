import { useState } from 'react'
import cv from '../data/cv'
import Carousel from '../components/portfolio/Carousel'
import MasonryWall from '../components/portfolio/MasonryWall'
import Lightbox from '../components/portfolio/Lightbox'
import type { Project } from '../data/cv'

export default function Portafolio() {
  const [lightbox, setLightbox] = useState<Project | null>(null)
  const projects = cv.projects

  const findIndex = (p: Project) => projects.findIndex(x => x.id === p.id)
  const showPrev = (p: Project) => {
    const i = (findIndex(p) - 1 + projects.length) % projects.length
    setLightbox(projects[i])
  }
  const showNext = (p: Project) => {
    const i = (findIndex(p) + 1) % projects.length
    setLightbox(projects[i])
  }

  return (
    <div>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
          Proyectos destacados
        </h2>
        <Carousel projects={projects} onSelectProject={setLightbox} />
      </section>

      <section>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
          Todos los proyectos
        </h2>
        <MasonryWall projects={projects} />
      </section>

      {lightbox && (
        <Lightbox
          project={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => showPrev(lightbox)}
          onNext={() => showNext(lightbox)}
        />
      )}
    </div>
  )
}
