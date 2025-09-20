#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

// Obtener argumentos de línea de comandos
const args = process.argv.slice(2)
if (args.length < 2) {
  console.log('Usage: npm run demo:add <type> <name>')
  console.log('  type: three | web')
  console.log('  name: demo-name (kebab-case)')
  console.log('')
  console.log('Example: npm run demo:add three rotating-torus')
  process.exit(1)
}

const [type, name] = args
const validTypes = ['three', 'web']

if (!validTypes.includes(type)) {
  console.error(`❌ Invalid type "${type}". Must be: ${validTypes.join(' | ')}`)
  process.exit(1)
}

if (!/^[a-z0-9-]+$/.test(name)) {
  console.error('❌ Demo name must be kebab-case (lowercase, numbers, hyphens only)')
  process.exit(1)
}

// Generar nombres y rutas
const pascalName = name.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join('')

const title = name.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join(' ')

const demoPath = join(projectRoot, 'src', 'app', 'routes', 'demos', type, name)
const route = `/demos/${type}/${name}`

console.log(`🚀 Creating ${type} demo: ${title}`)
console.log(`📁 Path: ${demoPath}`)
console.log(`🌐 Route: ${route}`)

try {
  // Crear directorio
  mkdirSync(demoPath, { recursive: true })
  
  // Crear index.tsx
  const indexTemplate = type === 'three' ? `import Canvas3D from '@/components/three/Canvas3D'
import Scene from './scene'
import { Link } from 'react-router-dom'

export default function ${pascalName}() {
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
        <h1 className="text-3xl font-bold">${title}</h1>
        <p className="text-gray-600">
          Descripción de la demo ${title}.
        </p>
      </div>

      <Canvas3D>
        <Scene />
      </Canvas3D>

      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-3">Características técnicas</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Three.js:</strong> Motor 3D para renderizado</li>
          <li>• <strong>React Three Fiber:</strong> Renderer React para Three.js</li>
          <li>• <strong>Animación:</strong> Hook useFrame para animación suave</li>
        </ul>
      </div>
    </main>
  )
}` : `import { Link } from 'react-router-dom'

export default function ${pascalName}() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>

      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">${title}</h1>
        <p className="text-gray-600">
          Descripción de la demo ${title}.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-3">Contenido de la demo</h2>
        <p className="text-gray-700">
          Implementa aquí el contenido de tu demo web.
        </p>
      </div>
    </main>
  )
}`

  writeFileSync(join(demoPath, 'index.tsx'), indexTemplate)
  console.log('✅ Created index.tsx')

  // Crear scene.tsx solo para demos de Three.js
  if (type === 'three') {
    const sceneTemplate = `import { useRef } from 'react'
import { type Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

export default function Scene() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      {/* Cambia la geometría por la que necesites */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#6366f1'} />
    </mesh>
  )
}`

    writeFileSync(join(demoPath, 'scene.tsx'), sceneTemplate)
    console.log('✅ Created scene.tsx')
  }

  console.log('')
  console.log('📋 Next steps:')
  console.log(`1. Add route to src/app/AppRouter.tsx:`)
  console.log(`   { path: '${route}', element: <${pascalName} /> }`)
  console.log('')
  console.log(`2. Register in src/config/demos.registry.ts:`)
  console.log(`   {`)
  console.log(`     slug: '${name}',`)
  console.log(`     title: '${title}',`)
  console.log(`     summary: 'Descripción breve',`)
  console.log(`     cover: '/images/covers/${name}.jpg',`)
  console.log(`     kind: '${type}',`)
  console.log(`     route: '${route}',`)
  console.log(`     tech: ['react', '${type === 'three' ? 'three, r3f' : 'typescript'}']`)
  console.log(`   }`)
  console.log('')
  console.log(`3. Import in AppRouter.tsx:`)
  console.log(`   import ${pascalName} from './routes/demos/${type}/${name}'`)

} catch (error) {
  console.error('❌ Error creating demo:', error.message)
  process.exit(1)
}
