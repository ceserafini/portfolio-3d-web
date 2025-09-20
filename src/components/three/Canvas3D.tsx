import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, type PropsWithChildren } from 'react'

interface Canvas3DProps extends PropsWithChildren {
  className?: string
}

export default function Canvas3D({ children, className = '' }: Canvas3DProps) {
  return (
    <div className={`h-[70vh] w-full rounded-2xl border ${className}`}>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {children}
          <OrbitControls enableDamping makeDefault />
        </Suspense>
      </Canvas>
    </div>
  )
}
