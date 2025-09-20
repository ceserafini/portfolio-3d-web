import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './routes'
import SpinningCube from './routes/demos/three/spinning-cube'
import ParticlesSphere from './routes/demos/three/particles-sphere'
import WebProjectCards from './routes/demos/web/project-cards'

// GitHub Pages URL redirect handler
function GitHubPagesRedirectHandler() {
  useEffect(() => {
    const path = window.location.search
    if (path && path.startsWith('?/')) {
      const route = path.slice(2).replace(/~and~/g, '&')
      window.history.replaceState(null, '', route || '/')
    }
  }, [])
  
  return null
}

const router = createBrowserRouter([
  { 
    path: '/', 
    element: (
      <>
        <GitHubPagesRedirectHandler />
        <Home />
      </>
    ) 
  },
  { 
    path: '/demos/three/spinning-cube', 
    element: <SpinningCube /> 
  },
  { 
    path: '/demos/three/particles-sphere', 
    element: <ParticlesSphere /> 
  },
  { 
    path: '/demos/web/cards', 
    element: <WebProjectCards /> 
  }
], {
  basename: import.meta.env.DEV ? '/' : '/portfolio-3d-web'
})

export default function AppRouter() {
  return <RouterProvider router={router} />
}
