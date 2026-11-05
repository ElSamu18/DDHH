# Foro de Derechos Humanos - Comisiones Módulo 4

Plataforma web informativa y de inscripción para el **Foro de Derechos Humanos del Módulo 4 (Interanual de DDHH)**.

- **Coordinador Estudiantil:** Samuel López
- **Docente Asesor:** Prof. Juan Carlos Suárez
- **Lema:** *"Ganarle tiempo al tiempo y trabajar en equipo"*
- **Formulario Oficial:** [Google Docs Form](https://docs.google.com/forms/d/e/1FAIpQLScIBOq6v5tvlUyVsbjks06WS1JWoWGx5omuLc_gXL_aQLjvGQ/viewform?usp=publish-editor)

---

## 🚀 Despliegue en Vercel (Totalmente Compatible)

El proyecto está 100% preconfigurado con `vercel.json` para despliegue inmediato en Vercel como una aplicación de alto rendimiento Vite SPA.

### Opción 1: Despliegue desde GitHub (Recomendado)

1. Sube este repositorio a tu cuenta de **GitHub**.
2. Ingresa a [Vercel Dashboard](https://vercel.com/dashboard) y haz clic en **"Add New..."** &rarr; **"Project"**.
3. Selecciona tu repositorio de GitHub.
4. Vercel detectará automáticamente la configuración:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Haz clic en **"Deploy"** y tu sitio estará en vivo en segundos con certificado SSL gratis y CDN global.

### Opción 2: Despliegue desde la terminal con Vercel CLI

Si tienes instalada la CLI de Vercel (o usando `npx`):

```bash
# Iniciar sesión y desplegar
npx vercel

# Desplegar a producción
npx vercel --prod
```

---

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción localmente
npm run preview

# Ejecutar pruebas unitarias de lógica pura
npx tsx --test src/utils/commissions.test.ts
```

---

## 📁 Archivos Incluidos

- `vercel.json`: Reglas de enrutamiento SPA (reescritura a `/index.html`), framework preset y caché de estáticos.
- `.vercelignore`: Exclusión de archivos de prueba y temporales.
- `public/standalone_landing_page.html`: Versión autónoma en un solo archivo (HTML + Tailwind CDN + Lucide) para copiar y pegar en caso de no requerir Node.js.
