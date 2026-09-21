# IKUBERT v5: cómo subirlo y cómo publicar

## 1. Subir esta versión al repositorio (una sola vez)

1. En la carpeta del repositorio (`ikubert.github.io-main`), **borra**:
   - la carpeta `servicios/`. Los servicios ahora viven en `_servicios/`; si dejas la carpeta vieja, Jekyll choca con dos archivos para la misma dirección.
   - `sitemap.xml`, `robots.txt`, `index.html`, `servicios.html`, `acerca.html`, `contacto.html` y `_config.yml`. Se reemplazan con los de esta carpeta.
2. Copia **todo el contenido** de esta carpeta dentro del repositorio.
   - Incluye las carpetas que empiezan con punto o guion bajo: `.pages.yml`, `_config.yml`, `_data`, `_drafts`, `_includes`, `_layouts`, `_posts`, `_servicios`.
   - No toques `src/`, `CNAME` ni `card/`. Siguen igual.
3. GitHub Desktop → Commit → Push. En 1 a 2 minutos queda publicado.
4. Opcional: `style.css`, `_layouts/default.html`, `_includes/navbar.html` y `_includes/formulario.html` ya no se usan. Puedes borrarlos.

## 2. Publicar un artículo en el foro sin tocar código (Pages CMS)

**Configuración, una sola vez:**

1. Entra a https://app.pagescms.org e inicia sesión con tu cuenta de GitHub.
2. Instala la GitHub App **solo para el repositorio de ikubert**, no para todos.
3. Abre el repositorio: verás "Foro (artículos)" con un formulario.

**Cada vez que publiques:**

- **Nuevo** → completa título, fecha, categoría, autor, resumen y contenido.
- **Imagen:** súbela desde el mismo formulario.
- **LinkedIn:** si el artículo también está allá, pega el enlace. Aparecerá el botón "Ver publicación en LinkedIn". Si lo dejas vacío, no se muestra nada.
- **Destacado:** márcalo solo en **un** artículo. Ese aparece arriba en el foro y primero en la portada.
- **Guardar:** se hace el commit por ti y en aproximadamente 1 minuto está en ikubert.com/foro/.

## 3. Cambios frecuentes

| Qué quiero cambiar | Dónde |
|---|---|
| Teléfono, WhatsApp, email | `_config.yml` → bloque `contacto:` (se actualiza en todo el sitio) |
| Agregar un servicio nuevo | Copia un archivo de `_servicios/`, cambia `orden`, textos y `en_portada`. Aparece solo en /servicios/. Si `en_portada: true` y está entre los 3 primeros por `orden`, sale en la portada. |
| Agregar una categoría al foro | `_data/categorias.yml` + copia un archivo de `foro/categoria/` + agrega la opción en `.pages.yml` |
| Activar Google Analytics | `_config.yml` → `ga4_id: "G-XXXXXXX"` (los clics a WhatsApp se miden solos) |
| Artículos antiguos sin escribir | `_drafts/`: no se publican hasta moverlos a `_posts/` |

## 4. Para que Google asocie el artículo a "IKUBERT" y "Lukas Ahubert Lennon"

1. **Google Search Console** (gratis): agrega `ikubert.com`, envía `https://ikubert.com/sitemap.xml` y usa "Inspeccionar URL" → "Solicitar indexación" en:
   - https://ikubert.com/foro/cyber-prioritizer-priorizacion-estocastica-vulnerabilidades/
   - https://ikubert.com/equipo/lukas-ahubert-lennon/
2. **README de GitHub (Cyber-Prioritizer):** agrega el enlace al artículo y a tu perfil de ikubert.com. Es un enlace entrante desde un sitio de mucha autoridad.
3. **LinkedIn:**
   - En tu perfil personal (Información de contacto → Sitio web), pon https://ikubert.com/equipo/lukas-ahubert-lennon/.
   - En la publicación de Cyber-Prioritizer, agrega un comentario con el enlace al artículo.
4. **Google Business Profile:** actualiza el teléfono a +56 9 4553 0560 para que coincida con el sitio.
5. **Verificación:** prueba cada URL en https://search.google.com/test/rich-results (debe reconocer Organización, Persona, Artículo y Código fuente).
