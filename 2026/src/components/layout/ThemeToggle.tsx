import { useTheme, type Theme } from '../../hooks/useTheme'

interface ThemeToggleProps {
  minimal?: boolean
}

export default function ThemeToggle({ minimal }: ThemeToggleProps) {
  const { cycleTheme, current, theme, themeLabels, setTheme } = useTheme()

  if (minimal) {
    return (
      <button
        onClick={cycleTheme}
        className="no-print"
        title={`Tema: ${current.name} (click para cambiar)`}
        style={{
          background: 'none',
          border: '1px solid var(--border)',
          borderRadius: '999px',
          padding: '0.35rem 0.7rem',
          cursor: 'pointer',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          transition: 'all 0.2s',
        }}
      >
        {current.icon}
      </button>
    )
  }

  return (
    <div className="no-print" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
      {(Object.keys(themeLabels) as Theme[]).map(t => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          title={themeLabels[t].name}
          style={{
            background: t === theme ? 'var(--accent)' : 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '0.35rem',
            padding: '0.25rem 0.5rem',
            cursor: 'pointer',
            fontSize: '0.8rem',
            color: t === theme ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s',
          }}
        >
          {themeLabels[t].icon}
        </button>
      ))}
    </div>
  )
}
