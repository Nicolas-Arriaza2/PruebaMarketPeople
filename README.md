# Instrucciones de Instalación y Despliegue

Asegúrate de cumplir con los requisitos previos y sigue las instrucciones detalladas a continuación para una correcta configuración de tu proyecto.

## Requerimientos Previos

- **Docker**: Es esencial para crear y gestionar los contenedores de tus servicios.
- **npm**: Gestiona las dependencias y scripts del proyecto frontend.
- **Node.js**: Necesario para ejecutar el servidor de desarrollo frontend.

## Configuración con Docker Compose

1. **Despliegue con Docker Compose**: Desde el directorio que contiene el archivo `docker-compose.yml`, ejecuta:

   ```
   docker-compose up
   ```

## Configuración del Backend

1. **Listar contenedores activos**: Ejecuta el siguiente comando para ver todos los contenedores en ejecución:

   ```
   docker ps
   ```

   Identifica el ID del contenedor que representa el backend de tu aplicación.

2. **Ingresar al contenedor del backend**: Con el ID previamente identificado, accede al shell del contenedor:

   ```
   docker exec -it [ID_DEL_BACKEND] bash
   ```

3. **Navega al directorio de tu aplicación**:

   ```
   cd myapp
   ```

4. **Instalación o actualización de dependencias**:

   ```
   bundle install
   ```

5. **Lanzamiento del servidor backend**:

   ```
   rails s -b 0.0.0.0
   ```

## Configuración del Frontend

1. **Navegación al directorio del frontend**:

   ```
   cd \frontend
   ```

2. **Instalación de dependencias**:

   ```
   npm install
   ```

3. **Lanzamiento del servidor de desarrollo**:

   ```
   npm start
   ```

   > **Nota**: Es probable que se te solicite confirmar si deseas ejecutar el servidor en un puerto distinto al default debido a conflictos de puertos. Simplemente confirma que deseas continuar.
