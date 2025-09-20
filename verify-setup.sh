#!/bin/bash

# Script de verificación para Portfolio 3D & Web
echo "🚀 Verificando configuración del proyecto Portfolio 3D & Web"
echo "================================================="

# Verificar Node.js
echo -n "✓ Node.js version: "
node --version

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 22 ]; then
    echo "  ✅ Node.js version is compatible (v22+)"
else
    echo "  ❌ Node.js version is too old. Please upgrade to v22+"
    echo "  📖 See NODE_SETUP.md for installation instructions"
    exit 1
fi

# Verificar npm
echo -n "✓ npm version: "
npm --version

# Verificar dependencias
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "⚠️  Dependencies not installed. Running npm install..."
    npm install
fi

# Verificar TypeScript
echo "✓ TypeScript compilation..."
npm run type-check
if [ $? -eq 0 ]; then
    echo "✅ TypeScript compilation successful"
else
    echo "❌ TypeScript compilation failed"
    exit 1
fi

# Verificar lint
echo "✓ ESLint check..."
npm run lint
if [ $? -eq 0 ]; then
    echo "✅ ESLint passed"
else
    echo "⚠️  ESLint found issues (run 'npm run lint:fix' to auto-fix)"
fi

# Verificar build
echo "✓ Build test..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎉 All checks passed! Ready to develop."
echo ""
echo "Commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run preview - Preview production build"
echo ""
