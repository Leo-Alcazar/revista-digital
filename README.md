# Revista Digital - Editorial Frontend 📰

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Bienvenido al repositorio de este proyecto, una revista digital inspirada en la estética editorial de *Yorokubu*. El objetivo principal de este desarrollo es combinar un diseño minimalista de alto contraste con una arquitectura moderna de base de datos NoSQL.

## Características Principales

* **Arquitectura Dinámica:** Uso de Server y Client Components en Next.js para optimizar el rendimiento y la interactividad.
* **Integración NoSQL Local:** Configuración completa de Firebase Emulator (Firestore) para un entorno de desarrollo seguro, rápido y sin costos de nube.
* **Rutas Dinámicas:** Generación de páginas sobre la marcha para Categorías (`/category/[id]`), Artículos (`/article/[id]`) y Perfiles de Autor (`/author/[id]`) cruzando relaciones de datos.
* **Diseño Responsivo y Modular:** Principio DRY aplicado a través de componentes reutilizables (como `ArticleCard`) y maquetación Mobile-First con Tailwind CSS.

## Tecnologías y Herramientas

* **Framework:** Next.js (App Router)
* **Estilos y Tipografía:** Tailwind CSS, Google Fonts (Playfair Display & Inter)
* **Base de Datos:** Firebase (Firestore + Local Emulator Suite)
* **Lenguaje:** TypeScript / React
* **Package Manager:** pnpm
* **Control de Versiones y Entorno:** Git

## Instalación y Uso Local

Para correr este proyecto en tu máquina local junto con la base de datos simulada:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/TU_USUARIO/revista-digital.git](https://github.com/TU_USUARIO/revista-digital.git)
2. Instala las dependencias:
    pnpm install
3. Inicia el emulador de Firebase (asegúrate de tener Java instalado para el emulador):
    firebase emulators:start
4. En una nueva terminal, inicia el servidor de desarrollo:
    pnpm run dev

Abre http://localhost:3000 en tu navegador. Puedes gestionar los datos de prueba desde la interfaz del emulador en http://127.0.0.1:4000.

## Estructura del Proyecto

* **app/**: Enrutador principal, vistas dinámicas y layouts.
* **components/**: Componentes de interfaz reutilizables (Header, ArticleCard).
* **lib/hooks/**: Lógica de conexión y consultas a Firestore (useArticles, useAuthor, etc.).