<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio 3D & Web - Copilot Instructions

This is a extensible React + TypeScript + Vite portfolio for Three.js demos and web projects.

## Project Structure
- `/src/app/routes/` - Route components organized by demo type (three/web)
- `/src/components/` - Reusable UI and 3D components
- `/src/config/` - Demo registry and configuration
- `/src/three/` - Three.js utilities and hooks
- `/public/models/` - GLB/GLTF models and assets

## Key Technologies
- React 18 + TypeScript
- Vite with path mapping (@/ -> src/)
- Three.js + @react-three/fiber + @react-three/drei
- React Router for routing
- Tailwind CSS for styling
- Zustand for optional state management

## Development Guidelines
- Each demo should be in its own folder with `index.tsx` (page) and `scene.tsx` (3D logic)
- Register new demos in `/src/config/demos.registry.ts`
- Use the `Canvas3D` wrapper component for consistent 3D scenes
- Follow the modular pattern for easy extension
- Keep assets in `/public/` and reference by path

## Code Style
- Use TypeScript with strict mode
- Prefer function components with hooks
- Use Tailwind classes for styling
- Keep 3D logic separate from UI logic
