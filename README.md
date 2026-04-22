#  Portafolio Personal — Sharick Olmos

Portafolio web personal desarrollado con HTML5, CSS3 y JavaScript básico.  
Incluye una página principal y una página secundaria de mascotas.

---

##  Estructura del proyecto

```
portafolio/
│
├── index.html          → Página principal (portafolio)
├── mascotas.html       → Página secundaria (galería de mascotas)
├── script.js           → Interactividad con JavaScript
│
├── styles/
│   └── styles.css      → Estilos de todo el sitio
│
└── imagenes/
    ├── maiz.jpeg
    ├── mia.jpeg
    ├── roma.jpeg
    ├── marucho.jpeg
    ├── horus.jpeg
    ├── Toby.jpeg
    └── vladimir.jpeg
```

---

##  Páginas

### index.html — Portafolio
- Encabezado con nombre a la izquierda y menú a la derecha
- Sección **Sobre mí** con botón que expande el texto
- Sección **Proyectos** con tarjetas enlazadas
- Sección **Contacto** con formulario
- Mensaje de bienvenida que se muestra/oculta con un botón

### mascotas.html — Mis Mascotas
- Galería con 7 mascotas en formato de tarjetas
- Imagen, nombre y descripción de cada una
- Enlace para volver al portafolio

---

##  Estilos (styles.css)

Un solo archivo CSS para ambas páginas.  
Usa **variables CSS** para los colores principales:

| Variable | Color | Uso |
|---|---|---|
| `--verde` | #45ad51 | Header, botones, bordes |
| `--morado` | #6c3fc5 | Títulos, tarjetas |
| `--fondo` | #f5f0ff | Fondo de la página |
| `--blanco` | #ffffff | Fondo de secciones |

---

##  Diseño responsivo

El sitio se adapta a distintos tamaños de pantalla:

| Pantalla | Proyectos | Galería mascotas |
|---|---|---|
| Escritorio (+768px) | 3 columnas | 3 columnas |
| Tablet (hasta 768px) | 2 columnas | 3 columnas |
| Móvil (hasta 480px) | 1 columna | 2 columnas |

---

##  JavaScript (script.js)

Dos interacciones simples:

1. **Botón "Leer más sobre mí"** → cambia el texto del párrafo de presentación
2. **Botón "Mostrar bienvenida"** → muestra u oculta un mensaje en pantalla

Se usa `const` para elementos que no cambian y `let` para valores que sí cambian.

---

##  Tecnologías usadas

- HTML5
- CSS3 (Flexbox, Grid, variables, media queries)
- JavaScript básico (DOM, eventos)

---

##  Cómo abrirlo

1. Descarga o clona el proyecto
2. Abre el archivo `index.html` en tu navegador
3. Listo

> No necesita instalación ni servidor. Funciona directamente en el navegador.

---


**Sharick Olmos** — Desarrolladora Web en formación