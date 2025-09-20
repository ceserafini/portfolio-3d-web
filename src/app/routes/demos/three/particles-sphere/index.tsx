import Canvas3D from '@/components/three/Canvas3D'
import Scene from './scene'
import { Link } from 'react-router-dom'

export default function ParticlesSphere() {
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
        <h1 className="text-3xl font-bold">Particles Sphere</h1>
        <p className="text-gray-600">
          Sistema de partículas distribuidas en la superficie de una esfera con animación suave.
        </p>
      </div>

      <Canvas3D>
        <Scene />
      </Canvas3D>

      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-3">Características técnicas</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>InstancedMesh:</strong> Renderizado eficiente de múltiples objetos</li>
          <li>• <strong>Distribución esférica:</strong> Algoritmo de distribución uniforme</li>
          <li>• <strong>Animación procedural:</strong> Movimiento basado en ruido y tiempo</li>
          <li>• <strong>Performance optimizada:</strong> Uso de instancing para 1000+ partículas</li>
        </ul>
      </div>
    </main>
  )
}
