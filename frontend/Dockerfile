# Utiliza una imagen base de Node.js
FROM node:16 

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si está disponible) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor HTTP simple para servir la aplicación
RUN npm install -g serve

# Indica al contenedor que escuche en el puerto 5000 (el puerto predeterminado de serve)
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["serve", "-s", "build"]
