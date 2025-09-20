import { DEMOS } from '@/config/demos.registry'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Portfolio 3D & Web</h1>
        <p className="text-gray-600 text-lg">
          Colección extensible de demos de Three.js y proyectos web interactivos
        </p>
      </div>
      
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEMOS.map((demo) => (
          <Link 
            key={demo.slug} 
            to={demo.route} 
            className="group block rounded-2xl border p-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white"
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center mb-4">
              <div className="text-4xl opacity-30">
                {demo.kind === 'three' ? '🎲' : '🌐'}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {demo.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 mb-3">{demo.summary}</p>
              <div className="flex flex-wrap gap-1">
                {demo.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
