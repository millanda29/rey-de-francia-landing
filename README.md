# 🏨 Manantial Rey de Francia - Hostal y Piscinas

Landing page institucional construida con Astro para promocionar servicios de piscina temperada, bienestar y hospedaje.

## ✨ Resumen

Este proyecto está orientado a conversión (reservas por WhatsApp), con enfoque en:

- Diseño visual moderno y responsive.
- Jerarquía clara de contenido comercial.
- Navegación por secciones con componentes reutilizables.
- Optimización para despliegue estático.

## 🧰 Stack tecnológico

- Astro `^6.0.8`
- Tailwind CSS `^4.2.2` (con estilos globales personalizados)
- PostCSS + Autoprefixer
- TypeScript (configurado vía `tsconfig.json`)

## 📌 Requisitos

- Node.js `>= 22.12.0`
- npm (incluido con Node)

## ⚙️ Scripts

```bash
npm run dev       # desarrollo local (host habilitado)
npm run build     # build de producción
npm run preview   # previsualización del build
```

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Servidor local (por defecto):

- http://localhost:4321

## 🗂️ Estructura del proyecto

```text
src/
  components/
    Navigation.astro
    Hero.astro
    Servicios.astro
    Instalaciones.astro
    BeneficiosDetallados.astro
    Restaurante.astro
    Combos.astro
    Tarifas.astro
    Mapa.astro
    Horarios.astro
    Testimonios.astro
    FAQ.astro
    Reservas.astro
    Footer.astro
    Icono.astro
  layouts/
    BaseLayout.astro
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
astro.config.mjs
tailwind.config.mjs
postcss.config.mjs
package.json
```

## 🧭 Orden de secciones en la Home

La página principal (`src/pages/index.astro`) renderiza:

1. Navigation
2. Hero
3. Servicios
4. Instalaciones
5. BeneficiosDetallados
6. Restaurante
7. Combos
8. Tarifas
9. Mapa
10. Horarios
11. Testimonios
12. FAQ
13. Reservas
14. Footer

## 🎨 Personalización rápida

### 1) 🎯 Identidad y paleta de colores

- Variables globales: `src/layouts/BaseLayout.astro` (`:root`)
- Utilidades compartidas: `src/styles/global.css`

La paleta base actual usa escala Blue Ribbon (`--color-blue-ribbon-*`) y variables semánticas (`--color-primary`, `--color-accent`, etc.).

### 2) 🧩 Contenido principal

- Hero: `src/components/Hero.astro`
- Servicios: `src/components/Servicios.astro`
- Combos y precios: `src/components/Combos.astro`
- Tarifas generales: `src/components/Tarifas.astro`
- FAQ: `src/components/FAQ.astro`

### 3) 📲 Contacto y reservas

- Formulario y mensaje WhatsApp: `src/components/Reservas.astro`
- Botón flotante de WhatsApp y script global: `src/layouts/BaseLayout.astro`
- Horarios/contacto visibles: `src/components/Horarios.astro`

### 4) 📍 Ubicación

- Mapa embebido de Google Maps: `src/components/Mapa.astro`

## 🛠️ Notas de mantenimiento

- El sitio compila como salida estática (`astro build`).
- Si se cambian precios o nombres de combos, actualizar en conjunto:
  - `src/components/Combos.astro`
  - `src/components/Tarifas.astro`
  - `src/components/Reservas.astro`
- Mantener consistencia de branding en títulos y metadatos dentro de `src/layouts/BaseLayout.astro` y `src/pages/index.astro`.

## 🌐 Deploy

Al generar `npm run build`, Astro crea el sitio en `dist/`.

Opciones recomendadas:

- ▲ Netlify
- ▲ Vercel
- ▲ GitHub Pages (con workflow)

## ✅ Checklist antes de publicar

- ☑️ Verificar teléfonos y WhatsApp.
- ☑️ Verificar dirección y enlace de mapa.
- ☑️ Validar precios en Combos/Tarifas/Reservas.
- ☑️ Probar formulario y apertura de WhatsApp.
- ☑️ Revisar responsive en móvil (incluyendo anchos reducidos).
- ☑️ Ejecutar build de producción sin errores.

## 📄 Licencia

Uso interno / comercial según lineamientos del propietario del negocio.
