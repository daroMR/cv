import { Outlet, Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Layout() {
  const location = useLocation()
  const isPortfolio = location.pathname.includes('portafolio')

  return (
    <div className="container-main" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header
        className="no-print"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem 0',
          marginBottom: '1rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link
            to="/cv/2026/"
            style={{
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: isPortfolio ? 'var(--text-muted)' : 'var(--accent)',
            }}
          >
            CV
          </Link>
          <Link
            to="/cv/2026/portafolio"
            style={{
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: isPortfolio ? 'var(--accent)' : 'var(--text-muted)',
            }}
          >
            Portafolio
          </Link>
        </nav>
        <ThemeToggle minimal />
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer
        className="no-print"
        style={{
          textAlign: 'center',
          padding: '1rem 0',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--border)',
          marginTop: '2rem',
        }}
      >
        Hesvin Dario Molina Rios &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
