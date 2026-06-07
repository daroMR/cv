import type { Project } from '../../data/cv'
import CaseStudy from './CaseStudy'

interface MasonryWallProps {
  projects: Project[]
}

export default function MasonryWall({ projects }: MasonryWallProps) {
  return (
    <div
      style={{
        columnCount: 2,
        columnGap: '1rem',
      }}
    >
      {projects.map(p => (
        <div key={p.id} style={{ display: 'inline-block', width: '100%', marginBottom: '1rem' }}>
          <CaseStudy project={p} />
        </div>
      ))}
    </div>
  )
}
