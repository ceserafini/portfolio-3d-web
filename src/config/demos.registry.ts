import type { DemoItem } from '@/types'

export const DEMOS: DemoItem[] = [
  {
    slug: 'spinning-cube',
    title: 'Spinning Cube',
    summary: 'Cube + OrbitControls + soft light',
    cover: '/images/covers/spinning-cube.jpg',
    kind: 'three',
    route: '/demos/three/spinning-cube',
    tech: ['three', 'r3f', 'drei']
  },
  {
    slug: 'particles-sphere',
    title: 'Particles Sphere',
    summary: 'Instanced particles on sphere surface',
    cover: '/images/covers/particles-sphere.jpg',
    kind: 'three',
    route: '/demos/three/particles-sphere',
    tech: ['three', 'r3f']
  },
  {
    slug: 'project-cards',
    title: 'Web Project Cards',
    summary: 'Galería de proyectos con imágenes',
    cover: '/images/covers/web-cards.jpg',
    kind: 'web',
    route: '/demos/web/cards',
    tech: ['react', 'tailwind']
  }
]
