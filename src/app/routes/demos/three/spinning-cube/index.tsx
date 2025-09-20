import Canvas3D from '@/components/three/Canvas3D'
import Scene from './scene'
import { Link } from 'react-router-dom'

export default function SpinningCube() {
  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Spinning Cube</h1>
        <p className="text-gray-600">
          Demo básico de Three.js con React Three Fiber. Cubo que rota con controles orbitales.
        </p>
      </div>

      <Canvas3D>
        <Scene />
      </Canvas3D>

      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-3">Características técnicas</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>@react-three/fiber:</strong> Renderer React para Three.js</li>
          <li>• <strong>@react-three/drei:</strong> OrbitControls para navegación</li>
          <li>• <strong>useFrame:</strong> Hook para animación en el loop de render</li>
          <li>• <strong>Suspense:</strong> Carga asíncrona de recursos 3D</li>
        </ul>
      </div>
    </main>
  )
}
