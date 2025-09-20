#!/bin/bash

# Script para conectar el repositorio local con GitHub
# Instrucciones de uso:
# 1. Crea el repositorio en GitHub.com con el nombre: portfolio-3d-web
# 2. Reemplaza "TU-USUARIO" por tu nombre de usuario de GitHub
# 3. Ejecuta este script: ./connect-github.sh

echo "🚀 Conectando repositorio local con GitHub..."

# Reemplaza TU-USUARIO por tu nombre de usuario de GitHub
GITHUB_USER="TU-USUARIO"
REPO_NAME="portfolio-3d-web"

echo "📡 Agregando remote origin..."
git remote add origin git@github.com:${GITHUB_USER}/${REPO_NAME}.git

echo "🔄 Subiendo código a GitHub..."
git push -u origin main

echo "✅ ¡Listo! Tu repositorio está en:"
echo "🔗 https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""
echo "🌐 Para deployar en GitHub Pages, ve a:"
echo "   Settings > Pages > Deploy from a branch > main / root"

echo ""
echo "📋 Próximos pasos sugeridos:"
echo "   1. Configurar GitHub Pages para deploy automático"
echo "   2. Agregar GitHub Actions para CI/CD"
echo "   3. Configurar Vercel/Netlify para preview branches"
