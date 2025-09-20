#!/bin/bash

# Basado en tu email de Git, asumo que tu usuario es cserafini
# Si es diferente, cambia la siguiente línea:
GITHUB_USER="cserafini"
REPO_NAME="portfolio-3d-web"

echo "🚀 Conectando con GitHub..."
echo "Usuario: ${GITHUB_USER}"
echo "Repositorio: ${REPO_NAME}"
echo ""

# Agregar remote origin
echo "📡 Configurando remote origin..."
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

# Subir código
echo "⬆️ Subiendo código a GitHub..."
git push -u origin main

echo ""
echo "✅ ¡Repositorio subido exitosamente!"
echo "🔗 Ver en: https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""
echo "🌐 Para GitHub Pages:"
echo "   1. Ve a Settings > Pages"
echo "   2. Source: Deploy from a branch"  
echo "   3. Branch: main / root"
echo "   4. Save"
echo ""
echo "⚡ Para deploy en Vercel:"
echo "   1. Ve a vercel.com"
echo "   2. Import Git Repository"
echo "   3. Conecta tu GitHub"
echo "   4. Deploy automático configurado!"
