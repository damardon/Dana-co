# Dana & Co — Sitio (clone visual Gotra)

Sitio estático con **look & feel del demo [Gotra Premium](https://wpkoi.com/demos3/gotra-premium/)**: Poppins, fondos `#eee` / `#111`, acento `#FF8BB8`, titulares partidos, marquees y grillas.

Contenido Dana: storytelling ejecutivo, **sin Dana Delivery**, respaldo Experian · COPEC · Codelco · DERCO.

## Ver local (obligatorio usar servidor)

```bash
cd Dana-co
python -m http.server 8080
```

Abrir **http://localhost:8080**

La carpeta `assets/img/` debe existir junto a `index.html`.

## Archivos

| Archivo | Uso |
|---------|-----|
| `index.html` | Sitio one-page |
| `css/gotra-clone.css` | Estilos clone Gotra |
| `js/gotra-clone.js` | Marquees, menú, scroll reveal |
| `assets/img/` | Imágenes demo (reemplazar por fotos propias) |

## WordPress

Para fidelidad total: importar `gotra-template-extraido.zip` en WP + Elementor y pegar textos desde este HTML.
