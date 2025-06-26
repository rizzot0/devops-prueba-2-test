# Usar la imagen oficial de Node.js como base
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies para build)
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Eliminar dependencias de desarrollo y node_modules
RUN npm prune --production

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"] 