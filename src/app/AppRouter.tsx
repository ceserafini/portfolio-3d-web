import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes'
import SpinningCube from './routes/demos/three/spinning-cube'
import ParticlesSphere from './routes/demos/three/particles-sphere'
import WebProjectCards from './routes/demos/web/project-cards'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home /> 
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
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
