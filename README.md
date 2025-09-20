# Portfolio 3D & Web

Portfolio extensible para demos de **Three.js** y proyectos web construido con **React + TypeScript + Vite**.

## 🚀 Características

- **Modular**: Fácil de agregar nuevos demos sin romper la aplicación
- **Three.js**: Integración completa con React Three Fiber y Drei
- **TypeScript**: Tipado estricto para mejor desarrollo
- **Responsive**: Diseño adaptativo con Tailwind CSS
- **Performance**: Optimizado para carga rápida y smooth animations

## 🛠️ Stack Tecnológico

### Core
- **React 18** + **TypeScript**
- **Vite** para bundling y desarrollo
- **React Router** para navegación

### 3D Graphics
- **Three.js** - Motor 3D
- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers y componentes útiles

### UI & Styling
- **Tailwind CSS** - Framework de CSS utilitario
- **PostCSS** + **Autoprefixer**

### Development Tools
- **ESLint** + **Prettier** para code quality
- **TypeScript** strict mode
- **Vite plugins** para paths y SVG

## 📦 Instalación

### Requisitos
- **Node.js 22+** (recomendado 22.12.0+)
- **npm 10+**

```bash
# Verificar versiones
node --version  # >= v22.0.0
npm --version   # >= 10.0.0

# Si necesitas instalar Node.js 22, ver NODE_SETUP.md

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🎯 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linter
npm run lint:fix     # Fix automático de linting
npm run format       # Format código con Prettier
npm run type-check   # Verificar tipos TypeScript
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── routes/           # Páginas de la aplicación
│   │   ├── index.tsx     # Home (grid de demos)
│   │   └── demos/        # Demos organizadas por tipo
│   │       ├── three/    # Demos de Three.js
│   │       └── web/      # Demos web
│   └── AppRouter.tsx     # Configuración de rutas
├── components/
│   ├── three/            # Componentes 3D reutilizables
│   └── ui/               # Componentes UI
├── config/
│   └── demos.registry.ts # Registro central de demos
├── types/
│   └── index.ts          # Tipos TypeScript
├── styles/
│   └── globals.css       # Estilos globales + Tailwind
└── main.tsx              # Entry point
```

## ➕ Agregar Nueva Demo

### 1. Crear la Demo

```bash
# Para demo de Three.js
src/app/routes/demos/three/mi-nueva-demo/
├── index.tsx    # Página principal
└── scene.tsx    # Lógica 3D

# Para demo web
src/app/routes/demos/web/mi-nueva-demo/
└── index.tsx    # Página principal
```

### 2. Registrar en el Registry

Agregar en `src/config/demos.registry.ts`:

```typescript
{
  slug: 'mi-nueva-demo',
  title: 'Mi Nueva Demo',
  summary: 'Descripción de la demo',
  cover: '/images/covers/mi-demo.jpg',
  kind: 'three', // o 'web'
  route: '/demos/three/mi-nueva-demo',
  tech: ['three', 'r3f', 'typescript']
}
```

### 3. Agregar Ruta

En `src/app/AppRouter.tsx`:

```typescript
{
  path: '/demos/three/mi-nueva-demo',
  element: <MiNuevaDemo />
}
```

## 🎨 Componentes Clave

### Canvas3D
Wrapper reutilizable para escenas de Three.js:

```tsx
import Canvas3D from '@/components/three/Canvas3D'

<Canvas3D>
  <MiEscena />
</Canvas3D>
```

### Demo Registry
Sistema centralizado para gestionar demos:

```typescript
// Automáticamente aparece en el home
// Tipado estricto con TypeScript
// Fácil mantenimiento
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist/
```

### GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## ⚡ Características Modernas (Node.js 22)

- **ES2024 Support**: Sintaxis JavaScript más moderna
- **Vite 7**: Build tool ultra-rápido con HMR mejorado
- **TypeScript 5.8**: Strict mode con características avanzadas
- **React 19**: Última versión con Server Components ready
- **Optimizaciones**: Tree-shaking y code-splitting automático

## 🛠️ Scripts Útiles

```bash
npm run verify        # Verificar configuración completa
npm run setup         # Configuración inicial (install + checks)
npm run demo:add      # Asistente para crear nuevas demos
npm run clean         # Limpiar archivos temporales
```

### Crear Nueva Demo
```bash
# Demo de Three.js
npm run demo:add three mi-nueva-demo

# Demo web
npm run demo:add web mi-proyecto-web
```

## 🎯 Roadmap

- [ ] Tema oscuro/claro con Zustand
- [ ] Layout con Navbar y Footer
- [ ] SEO con react-helmet-async
- [ ] Página 404 personalizada
- [ ] CI/CD con GitHub Actions
- [ ] Tests con Vitest + Playwright
- [ ] Progressive Web App (PWA)
- [ ] Storybook para componentes

## 📝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-demo`)
3. Commit tus cambios (`git commit -m 'Add: nueva demo de partículas'`)
4. Push a la rama (`git push origin feature/nueva-demo`)
5. Abre un Pull Request

## 📄 Licencia

MIT License
