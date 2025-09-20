import { Link } from 'react-router-dom'

const PROJECTS = [
  { 
    title: 'E-commerce Dashboard', 
    description: 'Panel administrativo moderno con métricas en tiempo real',
    tech: ['React', 'TypeScript', 'Chart.js'],
    url: 'https://example.com/dashboard',
    gradient: 'from-purple-400 to-pink-400'
  },
  { 
    title: 'Landing Page SaaS', 
    description: 'Landing page optimizada para conversión con animaciones suaves',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    url: 'https://example.com/landing',
    gradient: 'from-blue-400 to-cyan-400'
  },
  { 
    title: 'Crypto Widget', 
    description: 'Widget de criptomonedas con datos en tiempo real y gráficos',
    tech: ['Vue.js', 'D3.js', 'WebSocket'],
    url: 'https://example.com/crypto',
    gradient: 'from-green-400 to-blue-500'
  },
  { 
    title: 'Portfolio Creative', 
    description: 'Portfolio interactivo para artista digital con galería inmersiva',
    tech: ['Three.js', 'GSAP', 'WebGL'],
    url: 'https://example.com/portfolio',
    gradient: 'from-orange-400 to-red-400'
  },
  { 
    title: 'Task Manager App', 
    description: 'Aplicación de gestión de tareas con drag & drop y colaboración',
    tech: ['React', 'Redux', 'Socket.io'],
    url: 'https://example.com/tasks',
    gradient: 'from-indigo-400 to-purple-400'
  },
  { 
    title: 'AR Product Viewer', 
    description: 'Visualizador de productos en realidad aumentada para e-commerce',
    tech: ['A-Frame', 'AR.js', 'WebXR'],
    url: 'https://example.com/ar-viewer',
    gradient: 'from-teal-400 to-green-400'
  }
]

export default function WebProjectCards() {
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
        <h1 className="text-3xl font-bold">Web Projects Gallery</h1>
        <p className="text-gray-600">
          Colección de proyectos web destacados con diferentes tecnologías y enfoques.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div key={project.title} className="group">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noreferrer" 
              className="block rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white h-full"
            >
              {/* Imagen placeholder con gradiente */}
              <div className={`aspect-video w-full rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
                <div className="text-white text-4xl opacity-80">
                  {index % 3 === 0 ? '📊' : index % 3 === 1 ? '🚀' : '💡'}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 text-sm font-medium pt-2">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-3">Metodología de desarrollo</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h3 className="font-medium mb-2">🎨 Diseño</h3>
            <ul className="space-y-1 ml-4">
              <li>• Prototipado en Figma</li>
              <li>• Sistema de design tokens</li>
              <li>• Responsive first approach</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">⚡ Performance</h3>
            <ul className="space-y-1 ml-4">
              <li>• Core Web Vitals optimizados</li>
              <li>• Lazy loading de recursos</li>
              <li>• Bundle size optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
