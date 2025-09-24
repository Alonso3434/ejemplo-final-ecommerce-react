
# PFY2201 · Semana 7 · React (Vite)

Este proyecto implementa **componentes funcionales** con **Hooks** (`useState`) y **renderizado condicional** para un eCommerce sencillo.

## Requisitos (alumno)
- Node.js LTS instalado
- VS Code

## Cómo ejecutar
```bash
npm install
npm run dev
```

## Estructura
- `src/components` → `ProductList`, `ProductCard`, `Cart`, `CartTotal`, `Navbar`
- `src/data/products.json` → Datos con **nombre, precio normal, precio oferta, descripción e imagen**
- `src/assets` → Imágenes del proyecto original

## Indicadores cubiertos
1. **Listado de productos** con nombre, precio, oferta, descripción e imagen.
2. **Carrito**: agregar/quitar, contador global en la barra y **total**.
3. **Componentes funcionales** y **modularidad**.
4. **Eventos** (`onClick`) correctos.
5. **Renderizado condicional** en `Cart` (vacío vs con items).

## Despliegue en GitHub Pages
1. Cambia `base` en `vite.config.js` a `'/NOMBRE_DEL_REPO/'`.
2. Asegúrate de que el repo esté público y con la rama `gh-pages` habilitada.
3. Ejecuta:
```bash
npm run deploy
```
(usa la acción de `gh-pages` para publicar `dist/`).

> Si tu usuario es `alumno` y tu repo es `pfy2201-react`, el sitio quedará en:
> `https://alumno.github.io/pfy2201-react/`

---

Duoc UC · Desarrollo Frontend I.
