# Heladería Inma — web

Web de una sola página para **Heladería Inma** (Málaga, desde 1972), hecha con HTML, CSS y JavaScript sin dependencias ni compilación.

## Cómo verla

Abre `index.html` con doble clic en el navegador. Para publicarla, sube toda la carpeta a cualquier hosting estático (Netlify, Vercel, GitHub Pages, un hosting con cPanel…).

> Internet es necesario para las tipografías de Google Fonts y para el mapa de OpenStreetMap. Si fallan, la web sigue funcionando con tipografías del sistema y el resto de la información.

## Estructura

```
index.html          Contenido y estructura de la página
styles.css          Estilos, paleta y diseño responsive
main.js             Menú móvil, animaciones y enlaces activos
assets/favicon.svg  Icono de la pestaña
```

## Qué se puede cambiar fácilmente

- **Colores y tipografías:** variables al principio de `styles.css` (`:root`).
- **Aviso de cierre:** primer bloque `.notice` de `index.html`. Para quitarlo, borra ese bloque completo.
- **Teléfono y dirección:** busca `952 32 02 90` y `C. Moreti` en `index.html` (también está el enlace `tel:+34952320290`).
- **Estado y horario:** bloque `.status` y fila de horario en la sección «Visítanos». Actualmente indica cierre temporal y remite a Google, porque la ficha no tiene horario publicado.
- **Carta y sabores:** tarjetas `.flavor` y filas `.menu-item`. No se han inventado precios: se indica que se consultan en el local.
- **Mapa:** el `iframe` de OpenStreetMap está centrado en las coordenadas reales del local (`36.6987715, -4.4456155`). Para otro negocio, cambia el `bbox` y el `marker` del enlace, o sustituye el `iframe` por el de Google Maps.
- **Reseñas:** las tres citas y la nota final son reseñas reales de Google (4,6 · 9.281 reseñas). Si quieres actualizarlas, edita los bloques `.review`.

## Detalles incluidos

- Diseño responsive (móvil, tablet y escritorio).
- Menú móvil accesible, navegación con sección activa y aviso cerrable.
- Animaciones suaves que respetan `prefers-reduced-motion`.
- Datos estructurados `IceCreamShop` (Schema.org) para SEO local.
- Mapa real de OpenStreetMap y botón a Google Maps para indicaciones.
- Sin cookies de seguimiento, analítica ni dependencias externas de JavaScript.

## Créditos y notas

- Datos del negocio, reseñas y valoración: ficha pública de Google.
- Mapa: © colaboradores de OpenStreetMap.
- Tipografías: Fraunces y Manrope (Google Fonts, licencia abierta).
- Las ilustraciones del helado y las bolas de sabor son SVG/CSS propios, así que no hay fotos con derechos de terceros.

La información de cierre temporal y la valoración son las que aparecían en Google en el momento de crear la web; conviene revisarlas antes de publicar.
