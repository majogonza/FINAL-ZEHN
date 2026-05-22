# ZEHN LIVING

Zehn Living es una plataforma web enfocada en experiencias artísticas, eventos culturales y galerías digitales. El proyecto permite explorar obras, historias y eventos de manera interactiva mediante una interfaz moderna, responsive y optimizada para producción.

## Tabla de contenidos

* Características
* Tecnologías
* Requisitos previos
* Instalación
* Ejecución
* Scripts disponibles
* Estructura del proyecto
* Variables de entorno
* Despliegue
* Contribución
* Roadmap
* Autores
* Licencia

# Características

* Galería interactiva de obras y experiencias artísticas.
* Visualización de eventos culturales y exposiciones.
* Diseño responsive adaptable a dispositivos móviles.
* Sistema de navegación dinámico con React Router.
* Integración con Swiper para sliders interactivos.
* Optimización y minificación de CSS y JavaScript.
* SEO básico implementado para posicionamiento web.
* Integración con Firebase.
* Componentes reutilizables y estructura modular.
* Alertas interactivas con SweetAlert2.
* Diseño responsive adaptable a diferentes dispositivos.
* Gestión moderna del proyecto con Vite.


# Tecnologías

## Frontend

* React
* Vite
* React Router DOM
* CSS3

## Backend / Servicios
* Firebase

## Librerías

* Swiper
* Font Awesome
* SweetAlert2

## Herramientas

* Firebase Hosting
* Git & GitHub
* PurgeCSS
* ESLint


# Requisitos previos

Antes de ejecutar el proyecto necesitas:

* Node.js (versión recomendada: 20 o superior)
* npm
* Git


# Instalación

1. Clonar el repositorio
git clone https://github.com/majogonza/FINAL-ZEHN.git

2. Entrar al proyecto
cd FINAL-ZEHN

3. Instalar dependencias
npm install


# Ejecución

Para iniciar el entorno de desarrollo ejecuta:

```bash
npm run dev
```

Luego abre en el navegador:

```bash
http://localhost:5173
```

# Scripts disponibles

```bash
npm run dev
```
Levanta el entorno de desarrollo.

```bash
npm run build
```
Genera la versión optimizada para producción.

```bash
npm run preview
```
Previsualiza el proyecto compilado localmente.

```bash
npm run lint
```
Ejecuta validaciones y análisis del código.


# Estructura del proyecto

# Estructura del proyecto

.
├── .firebase/                 # Archivos de configuración de Firebase Hosting
│
├── public/                    # Recursos públicos accesibles directamente
│   ├── database/              # Datos estáticos o archivos JSON
│   ├── eventos/               # Imágenes y recursos de eventos
│   ├── obras/                 # Imágenes y recursos de obras de arte
│   ├── Logo-Zehn-4x.svg       # Logo principal del proyecto
│   └── vite.svg               # Logo por defecto de Vite
│
├── src/                       # Código fuente principal
│   ├── assets/                # Imágenes y recursos
│   ├── components/            # Componentes reutilizables
│   ├── context/               # Context API y manejo de estado global
│   ├── Pages/                 # Páginas y vistas principales
│   ├── Styles/                # Archivos CSS y estilos globales
│   ├── app.jsx                # Componente raíz de la aplicación
│   └── main.jsx               # Punto de entrada principal
│
├── .firebaserc                # Configuración del proyecto Firebase
├── .firebaserc.json           # Configuración adicional de Firebase
├── .gitignore                 # Archivos ignorados por Git
├── eslint.config.js           # Configuración de ESLint
├── firebase.json              # Configuración de Firebase Hosting
├── index.html                 # Archivo HTML principal
├── package-lock.json          # Control exacto de dependencias
├── package.json               # Dependencias y scripts del proyecto
├── README.md                  # Documentación del proyecto
└── vite.config.js             # Configuración de Vite


# Variables de entorno

El proyecto utiliza variables de entorno para la configuración de Firebase.

Crea un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

Ejemplo de variables:

```env
VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_auth_domain
VITE_PROJECT_ID=tu_project_id
VITE_STORAGE_BUCKET=tu_storage_bucket
VITE_MESSAGING_SENDER_ID=tu_sender_id
VITE_APP_ID=tu_app_id
```

# Despliegue

Para generar la versión de producción:

```bash
npm run build
```

Luego puedes desplegar la carpeta `dist` en servicios como:

* Vercel
* Netlify
* Firebase Hosting


# Contribución

Para contribuir al proyecto:

1. Crear una rama desde `main`.
2. Realizar cambios y commits descriptivos.
3. Hacer push de la rama.
4. Abrir un Pull Request explicando los cambios realizados.


# Roadmap

* [ ] Implementar autenticación de usuarios.
* [ ] Agregar pasalera de pagos funcional.
* [ ] Integrar backend y base de datos.
* [ ] Mejorar la optimización responsive.
* [ ] Agregar filtros avanzados de productos.
* [ ] Implementar modo oscuro.
* [ ] Añadir pruebas automatizadas.


# Autores

* María José González - Frontend Developer - [WhatsApp](https://wa.me/573117499256)
* Juan Manuel Ocampo - Frontend Developer - [WhatsApp](https://wa.me/573173261208)
* Miguel Angel Ruiz - Backend Developer - [WhatsApp](https://wa.me/573054205504)
* María José Orozco - Responsive Design Developer - [WhatsApp](https://wa.me/573104742852)
* Juan José Cano - Styling & CSS Developer - [WhatsApp](https://wa.me/573006916726)
* Alejandro Ayala - UI/UX Designer - [WhatsApp](https://wa.me/573183830266)


Repositorio:
https://github.com/majogonza/FINAL-ZEHN


# Licencia

Este proyecto es de uso académico y educativo, está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
