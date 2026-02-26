# Diálogo por el Desarrollo del Sur - Landing Page

Landing page moderna y dinámica para la iniciativa "Diálogo por el Desarrollo del Sur" de Quintana Roo.

## Stack Tecnológico

- **Next.js 14** - Framework React con App Router
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconografía
- **Google Sheets API** - Backend ligero para blog y comentarios

## Cómo levantar el proyecto

### 1. Instalar dependencias

```bash
cd dds-landing
npm install
```

### 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 3. Abrir en el navegador

Visita [http://localhost:3000](http://localhost:3000)

## Configurar Google Sheets (Opcional)

El sitio funciona con datos de ejemplo sin necesidad de configurar Google Sheets. Para conectar datos reales:

1. Crea una Google Sheet con dos pestañas:
   - **Blog**: columnas `title`, `excerpt`, `category`, `date`, `readTime`, `image`
   - **Comentarios**: columnas `name`, `location`, `message`, `date`

2. Ve a [Google Cloud Console](https://console.cloud.google.com)
3. Crea un proyecto y habilita la **Google Sheets API**
4. Genera una **API Key**
5. Copia `.env.local.example` a `.env.local` y llena los valores:

```bash
cp .env.local.example .env.local
```

6. Para que los usuarios puedan **enviar comentarios**, necesitas crear un Google Apps Script:
   - Abre tu Google Sheet → Extensiones → Apps Script
   - Pega este código:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Comentarios");
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.location, data.message, data.date]);
  return ContentService.createTextOutput("OK");
}
```

   - Despliega como Web App (acceso: cualquiera)
   - Copia la URL en tu `.env.local` como `GOOGLE_APPS_SCRIPT_URL`

## Estructura del Proyecto

```
src/
├── app/
│   ├── api/
│   │   ├── blog/route.ts        # API para obtener posts del blog
│   │   └── comments/route.ts    # API para leer/escribir comentarios
│   ├── globals.css              # Estilos globales + Tailwind
│   ├── layout.tsx               # Layout principal con tipografías
│   └── page.tsx                 # Página principal (ensambla todo)
├── components/
│   ├── AnimateOnScroll.tsx       # Wrapper de animación al scroll
│   ├── Navbar.tsx               # Navegación sticky
│   ├── Hero.tsx                 # Sección hero con animaciones
│   ├── VideoSection.tsx         # Componente reutilizable con video
│   ├── SocialCarousel.tsx       # Carrusel de redes sociales
│   ├── BlogCarousel.tsx         # Carrusel de blog dinámico
│   ├── VocesSection.tsx         # Voces ciudadanas + formulario
│   └── Footer.tsx               # Footer con newsletter
```

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Verde Olivo | `#808A2A` | Color principal |
| Terracota | `#D4782F` | Color secundario / CTAs |
| Crema | `#FDFBF7` | Fondo principal |

## Tipografías

- **DM Sans** - Encabezados (bold, geométrica)
- **Inter** - Cuerpo de texto (limpia, legible)
