# landing-ana-psyko

Web de presentación de **Ana Ruiz Romero**, psicóloga clínica en Málaga. Sitio estático (HTML, CSS y JavaScript) alojado en **GitHub Pages** con dominio propio en **[anaruizromero.es](https://anaruizromero.es)**, e incluye un blog de psicología optimizado para SEO.

## Estructura

```
.
├── index.html              # Página principal (hero, servicios, sobre mí, blog, contacto)
├── styles.css              # Estilos de todo el sitio
├── script.js               # Menú móvil, scroll suave, animaciones y envío del formulario
├── favicon.svg             # Icono del sitio
├── og-image.png            # Imagen para compartir en redes (Open Graph)
├── privacidad.html         # Política de privacidad (RGPD) — plantilla por completar
├── robots.txt              # Indexación para buscadores
├── sitemap.xml             # Mapa del sitio con todas las URLs
├── CNAME                   # Dominio personalizado (anaruizromero.es)
└── blog/
    ├── index.html          # Listado de artículos
    └── *.html              # 10 artículos de psicología clínica
```

## Publicar cambios

El sitio se despliega solo al hacer push a la rama `main`:

```bash
git add -A
git commit -m "Descripción del cambio"
git push origin main
```

GitHub Pages reconstruye la web automáticamente en uno o dos minutos.

## Dominio (IONOS → GitHub Pages)

El dominio `anaruizromero.es` está registrado en IONOS y apunta a GitHub Pages mediante:

- 4 registros **A** del dominio raíz (`@`) a las IPs de GitHub: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- 4 registros **A** de `www` a esas mismas IPs.
- El fichero `CNAME` del repo debe contener exactamente `anaruizromero.es`.

> Importante: los servidores de nombres del dominio deben ser los de IONOS (no externos) para que esos registros DNS estén activos.

## Añadir un nuevo post al blog

1. Duplica un artículo existente de `blog/` como punto de partida.
2. Cambia el `<title>`, la `description`, el `canonical`, las etiquetas Open Graph y el bloque JSON-LD (`Article`) con los datos del nuevo post.
3. Actualiza el `<h1>`, la fecha, el contenido y las 3 tarjetas de "Sigue leyendo".
4. Añade una tarjeta del nuevo post en `blog/index.html` y, si quieres, en la sección de blog de `index.html`.
5. Añade su URL en `sitemap.xml`.

## Pendiente (TODO)

- [x] **Formulario de contacto:** conectado a Formspree (`https://formspree.io/f/mpqevdae`). Los mensajes llegan a `contacto@anaruizromero.com`.
- [ ] **Política de privacidad:** completar `privacidad.html` con los datos reales (NIF, dirección, nº de colegiada) y revisarla.
- [ ] **Sobre mí:** sustituir el emoji por una foto real de Ana cuando esté disponible.
- [ ] Confirmar que el buzón `contacto@anaruizromero.com` está operativo.

## Aviso

El contenido del blog es de carácter divulgativo y no sustituye una consulta profesional.
