import { useRef } from 'react'
import { type Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

export default function Scene() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.6
      meshRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={'#3b82f6'} />
    </mesh>
  )
}
