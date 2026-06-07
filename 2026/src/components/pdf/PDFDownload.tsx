import { useCallback, useState } from 'react'

export default function PDFDownload() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const html2pdf = (await import('html2pdf.js')).default
      const element = document.getElementById('cv-content')

      if (!element) {
        throw new Error('No se encontró el contenido del CV')
      }

      const opt = {
        margin: [5, 5, 5, 5] as [number, number, number, number],
        filename: 'CV_Hesvin_Dario_Molina_Rios_2026.pdf',
        image: { type: 'jpeg' as const, quality: 0.92 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait' as const,
        },
        pagebreak: { mode: 'avoid-all' },
      }

      await html2pdf().set(opt).from(element).save()
    } catch (err) {
      console.error('Error al generar PDF:', err)
      setError('No se pudo generar el PDF. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <>
      <button
        className="btn"
        onClick={handleDownload}
        disabled={loading}
        title="Descargar CV en PDF"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
        </svg>
        {loading ? 'Generando PDF...' : 'Descargar PDF'}
      </button>
      {error && (
        <p style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
          {error}
        </p>
      )}
    </>
  )
}
