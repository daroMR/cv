import { useState, useEffect, useCallback } from 'react'

export type Theme = 'zen-ocean' | 'shadow-pine' | 'paper-ink'

const THEMES: Theme[] = ['zen-ocean', 'shadow-pine', 'paper-ink']
const STORAGE_KEY = 'cv2026-theme'

const themeLabels: Record<Theme, { icon: string; name: string }> = {
  'zen-ocean': { icon: '🌊', name: 'Zen Ocean' },
  'shadow-pine': { icon: '🌲', name: 'Shadow Pine' },
  'paper-ink': { icon: '📜', name: 'Paper & Ink' },
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(STORAGE_KEY) as Theme) || 'zen-ocean'
    }
    return 'zen-ocean'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const cycleTheme = useCallback(() => {
    setThemeState(prev => {
      const idx = THEMES.indexOf(prev)
      return THEMES[(idx + 1) % THEMES.length]
    })
  }, [])

  const current = themeLabels[theme]

  return { theme, cycleTheme, setTheme: setThemeState, current, themes: THEMES, themeLabels }
}
