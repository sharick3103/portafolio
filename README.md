#  Personal Portfolio — Sharick Olmos

Personal web portfolio built with HTML5, CSS3 and basic JavaScript.  
Includes a main page and a secondary pets page.

link github : https://github.com/sharick3103/portafolio

---

##  Project structure

```
portfolio/
│
├── index.html          → Main page (portfolio)
├── mascotas.html       → Secondary page (pets gallery)
├── script.js           → JavaScript interactivity
│
├── styles/
│   └── styles.css      → Styles for the entire site
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

##  Pages

### index.html — Portfolio
- Header with name on the left and menu on the right
- **About me** section with a button that expands the text
- **Projects** section with linked cards
- **Contact** section with a form
- Welcome message that shows/hides with a button

### mascotas.html — My Pets
- Gallery with 7 pets displayed as cards
- Image, name and description for each one
- Link to go back to the portfolio

---

## Styles (styles.css)

A single CSS file for both pages.  
Uses **CSS variables** for the main colors:

| Variable | Color | Usage |
|---|---|---|
| `--green` | #45ad51 | Header, buttons, borders |
| `--purple` | #6c3fc5 | Titles, cards |
| `--background` | #f5f0ff | Page background |
| `--white` | #ffffff | Section background |

---

##  Responsive design

The site adapts to different screen sizes:

| Screen | Projects | Pets gallery |
|---|---|---|
| Desktop (+768px) | 3 columns | 3 columns |
| Tablet (up to 768px) | 2 columns | 3 columns |
| Mobile (up to 480px) | 1 column | 2 columns |

---

##  JavaScript (script.js)

Two simple interactions:

1. **"Read more about me" button** → changes the text in the about me paragraph
2. **"Show welcome message" button** → shows or hides a message on screen

`const` is used for elements that don't change and `let` for values that do.

---

## 🛠️ Technologies used

- HTML5
- CSS3 (Flexbox, Grid, variables, media queries)
- Basic JavaScript (DOM, events)

---

##  How to open it

1. Download or clone the project
2. Open the `index.html` file in your browser
3. Done

> No installation or server needed. Works directly in the browser.

---

##  Author

**Sharick Olmos** 