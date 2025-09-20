import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react({
      // Usar el nuevo JSX transform
      jsxRuntime: 'automatic',
    }),
    tsconfigPaths(),
    svgr()
  ],
  base: command === 'build' ? '/portfolio-3d-web/' : '/',
  server: { 
    port: 5173,
    host: true, // Permitir acceso desde red
    open: true  // Abrir automáticamente en el navegador
  },
  build: {
    target: 'es2022', // Usar sintaxis moderna compatible
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  }
}))
