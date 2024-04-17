# Aplicativo Web para la gestión y control de la alimentación, inventario y salud de las gallinas de un galpón avícola.

## Instalación local 
Requisitos necesario: tener instalado en su comojtadora PHP8.1 o superior, composer y Node.js.

Pasos para la instalación:
1. Descargar el proyecto (o clonar usando GIT)
2. Cambiar el nombre de  `.env.example` a `.env` y configurar las credenciales de la base de datos.
3. Navegar a la carpeta raíz del projecto usando la terminal.
4. Ejecutar el comando `composer install`
5. Generar la clave de encriptación ejecutando `php artisan key:generate --ansi`
6. Ejecutar las migraciones de la base de datos `php artisan migrate --seed`
7. Iniciar el servidor local usando `php artisan serve`
8. Abrir una nueva terminal y navegar a la carpeta `react` 
9. Cambiar el nombre de `react/.env.example` a `.env` y ajustar la variable `VITE_API_BASE_URL` a un puerto disponible
9. Ejecutar `npm install`
10. Ejecutar `npm run dev` para iniciar el servidor de Vite y empezar usar la app.
11. Navegar a la dirección dónde se está ejecutando el aplicativo.
