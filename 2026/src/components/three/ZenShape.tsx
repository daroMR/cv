import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AdaptiveDpr, PerformanceMonitor } from '@react-three/drei'
import * as THREE from 'three'

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null)
  const startTime = useRef(Date.now())

  useFrame(() => {
    if (!meshRef.current) return
    const elapsed = (Date.now() - startTime.current) / 1000
    meshRef.current.rotation.x = Math.sin(elapsed * 0.1) * 0.3
    meshRef.current.rotation.y = elapsed * 0.05
  })

  useEffect(() => {
    const updateColor = () => {
      if (!meshRef.current) return
      const root = document.documentElement
      const accent = getComputedStyle(root).getPropertyValue('--accent').trim()
      if (accent && meshRef.current.material) {
        const mat = meshRef.current.material as THREE.MeshStandardMaterial
        mat.color.set(accent)
      }
    }
    updateColor()
    const obs = new MutationObserver(updateColor)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.35, 128, 16]} />
      <meshStandardMaterial wireframe transparent opacity={0.15} color="#4a7c9b" />
    </mesh>
  )
}

export default function ZenShape() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => setVisible(window.innerWidth > 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!visible) return null

  return (
    <div className="no-print" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ width: '100%', height: '100%' }}>
        <AdaptiveDpr pixelated />
        <PerformanceMonitor />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <TorusKnot />
      </Canvas>
    </div>
  )
}
