import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { type InstancedMesh, Vector3, Object3D, Color } from 'three'

const PARTICLE_COUNT = 800

export default function Scene() {
  const meshRef = useRef<InstancedMesh>(null!)
  const tempObject = useMemo(() => new Object3D(), [])
  const tempColor = useMemo(() => new Color(), [])

  // Generar posiciones en una esfera
  const spherePositions = useMemo(() => {
    const positions: Vector3[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi
      const radius = 2.5

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(theta) * Math.sin(phi)

      positions.push(new Vector3(x, y, z))
    }
    return positions
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime

    spherePositions.forEach((position, i) => {
      // Animación suave basada en tiempo y posición
      const offset = Math.sin(time * 0.5 + i * 0.01) * 0.1
      const scale = 0.8 + Math.sin(time * 0.8 + i * 0.02) * 0.2

      tempObject.position.copy(position)
      tempObject.position.multiplyScalar(1 + offset)
      tempObject.scale.setScalar(scale * 0.05)
      tempObject.updateMatrix()

      // Color basado en posición y tiempo
      const hue = (i / PARTICLE_COUNT + time * 0.1) % 1
      tempColor.setHSL(hue, 0.7, 0.6)

      meshRef.current.setMatrixAt(i, tempObject.matrix)
      meshRef.current.setColorAt(i, tempColor)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 6]} />
      <meshStandardMaterial />
    </instancedMesh>
  )
}
