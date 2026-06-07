import { useEffect, useState } from 'react'

export function usePrint() {
  const [isPrinting, setIsPrinting] = useState(false)

  useEffect(() => {
    const before = () => setIsPrinting(true)
    const after = () => setIsPrinting(false)

    window.addEventListener('beforeprint', before)
    window.addEventListener('afterprint', after)

    const mql = window.matchMedia('print')
    const handler = (e: MediaQueryListEvent) => setIsPrinting(e.matches)
    mql.addEventListener('change', handler)

    return () => {
      window.removeEventListener('beforeprint', before)
      window.removeEventListener('afterprint', after)
      mql.removeEventListener('change', handler)
    }
  }, [])

  return isPrinting
}
