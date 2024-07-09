# UTUTO

Bienvenido al repositorio del sitio web (no oficial) de UTUTO, la distribución GNU/Linux completamente libre. Este proyecto está desarrollado utilizando NextJS y ReactJS.

## Acerca de UTUTO

UTUTO es una distribución del sistema operativo GNU que utiliza su propio núcleo Linux Libre. El nombre hace referencia a una especie de lagartija (Homonota borelli) del norte de Argentina. UTUTO fue la primera distribución reconocida como totalmente libre por el Proyecto GNU y es conocida por su capacidad de optimización y rendimiento.

### Historia

- **2000**: Primera versión grabada por Diego Saravia de la Universidad Nacional de Salta.
- **2002**: Creación de UTUTO-R por Marcos Zapata, utilizada en escuelas públicas de Buenos Aires.
- **2004**: Nacimiento de UTUTO-e y su evolución a UTUTO XS.
- **2006**: Declaración de Interés Nacional por la Cámara de Diputados de la Nación Argentina.
- **2017**: Última versión antes de la pausa en el desarrollo.
- **2024**: Resurgimiento del proyecto con la versión UTUTO 11.

### Características

- **Completamente Libre**: No contiene software propietario.
- **Basado en Gentoo**: Utiliza ebuilds y el software emerge para la compilación.
- **Optimización**: Compilación de software desde el código fuente para optimizar el rendimiento según el procesador.
- **Diversidad de Entornos de Escritorio**: Incluye GNOME, KDE 4.1, KDE 3.5, e Icewm.
- **Gestor de Paquetes**: Utiliza UTUTO-Get desde la versión XS 2007.

## Instalación y Configuración del Proyecto

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Vite](https://vitejs.dev/).

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/emirchus/ututo-web.git
   cd ututo-web
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

### Comandos Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila el proyecto para producción.
- `pnpm lint`: Ejecuta linters para verificar la calidad del código.
- `pnpm format`: Formatea el código según las reglas establecidas.

### Depuración

Para debugear el proyecto, utiliza el siguiente comando:

```bash
pnpm dev
```

Esto iniciará el servidor de desarrollo y te permitirá depurar el código en tiempo real utilizando las herramientas de desarrollo de tu navegador.

### Despliegue

Para desplegar el proyecto, sigue estos pasos:

1. Compila el proyecto:

   ```bash
   pnpm build
   ```

2. Sirve los archivos compilados:
   ```bash
   pnpm start
   ```

## Contribuciones

¡Contribuciones son bienvenidas! Por favor, abri un issue o envía un pull request con tus mejoras y sugerencias.

## Licencia

Este proyecto está licenciado bajo la [Licencia GPL v3](LICENSE).

---

Esperamos que disfrutes utilizando UTUTO. Para más información, visita nuestro [sitio web oficial](https://ututo.org).