# Configuración Node.js 22

Este proyecto requiere Node.js 22+ para usar las últimas características y optimizaciones.

## Instalación de Node.js 22

### Usando NVM (Recomendado)

```bash
# Instalar NVM si no está instalado
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Reiniciar terminal o ejecutar:
source ~/.bashrc

# Instalar Node.js 22
nvm install 22
nvm use 22

# Verificar versión
node --version  # Debe mostrar v22.x.x
npm --version   # Debe mostrar 10.x.x+
```

### Usando NodeSource (Ubuntu/Debian)

```bash
# Agregar repositorio de NodeSource
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

# Instalar Node.js
sudo apt-get install -y nodejs

# Verificar versión
node --version
```

### Usando Snap (Ubuntu)

```bash
sudo snap install node --channel=22/stable
```

### Usando Homebrew (macOS)

```bash
brew install node@22
```

## Configuración del Proyecto

Una vez instalado Node.js 22:

```bash
# Instalar dependencias
npm install

# Verificar que no hay warnings de versión
npm run dev
```

## Beneficios de Node.js 22

- **Performance**: Mejoras significativas en V8 Engine
- **API modernas**: Soporte para las últimas características de JavaScript
- **Compatibilidad**: Mejor soporte para ESM y TypeScript
- **Herramientas**: Versiones más recientes de npm y tooling

## Troubleshooting

Si encuentras errores relacionados con la versión de Node:

```bash
# Verificar versión actual
node --version

# Si usas nvm, cambiar a Node 22
nvm use 22

# Limpiar caché de npm
npm cache clean --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```
