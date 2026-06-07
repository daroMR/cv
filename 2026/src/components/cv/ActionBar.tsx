import type { CVData } from '../../data/cv'
import PDFDownload from '../pdf/PDFDownload'

interface ActionBarProps {
  cv: CVData
}

export default function ActionBar({ cv }: ActionBarProps) {
  return (
    <div
      className="no-print"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.75rem',
        marginTop: '1.5rem',
        marginBottom: '0.5rem',
      }}
    >
      <PDFDownload />

      <button className="btn" onClick={() => window.open(cv.social.telegram, '_blank')} title="Telegram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.036 16.477l-.398 4.012c.57 0 .816-.244 1.115-.537l2.67-2.53 5.537 4.04c1.014.558 1.736.264 1.99-.94l3.61-16.84c.33-1.53-.553-2.13-1.54-1.76l-21.1 8.13c-1.44.558-1.42 1.36-.25 1.72l5.39 1.68 12.52-7.89c.59-.38 1.13-.17.69.24"/></svg>
        Telegram
      </button>

      <button className="btn" onClick={() => window.open(cv.social.linkedin, '_blank')} title="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
        LinkedIn
      </button>

      <button className="btn btn-outline" onClick={() => window.open(cv.social.github, '_blank')} title="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </button>
    </div>
  )
}
