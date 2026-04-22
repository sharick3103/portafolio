// ==========================================
// script.js — Interactividad del portafolio
// ==========================================
// const  → para cosas que NO van a cambiar
//          (el botón siempre es el mismo botón)
// let    → para cosas que SÍ pueden cambiar
//          (si el texto está expandido o no)
// ==========================================
 
 
// ------------------------------------------
// ACCIÓN 1: Cambiar el texto de "Sobre mí"
// ------------------------------------------
 
// const porque el botón y el párrafo no cambian
const botonTexto = document.getElementById("btn-cambiar-texto");
const parrafo    = document.getElementById("texto-presentacion");
 
// let porque este valor sí cambia (true / false)
let textoExpandido = false;
 
botonTexto.addEventListener("click", function() {
 
    if (textoExpandido === false) {
 
        // Cambiamos el texto del párrafo
        parrafo.textContent = "Siempre he sido curiosa, de las que preguntan el porqué de las cosas. Esa curiosidad me fue llevando hacia la tecnología casi sin darme cuenta. Me considero alguien que resuelve problemas con calma, aprende rápido y disfruta trabajar en equipo.";
 
        // Cambiamos el texto del botón
        botonTexto.textContent = "Ver menos";
 
        // Ahora el texto sí está expandido
        textoExpandido = true;
 
    } else {
 
        // Volvemos al texto original
        parrafo.textContent = "Hola, soy Sharick. Soy desarrolladora de software en formación. Me encanta aprender cosas nuevas, resolver problemas y construir proyectos que tengan sentido. Estoy enfocada en analítica de datos y cada día doy un paso más hacia esa meta.";
 
        // Volvemos al texto original del botón
        botonTexto.textContent = "Leer más sobre mí";
 
        // Ahora el texto está colapsado de nuevo
        textoExpandido = false;
 
    }
 
});
 
 
// ------------------------------------------
// ACCIÓN 2: Mostrar u ocultar la bienvenida
// ------------------------------------------
 
// const porque el botón y el mensaje no cambian
const botonBienvenida = document.getElementById("btn-bienvenida");
const mensaje         = document.getElementById("mensaje-bienvenida");
 
// let porque este valor sí cambia (true / false)
let mensajeVisible = false;
 
botonBienvenida.addEventListener("click", function() {
 
    if (mensajeVisible === false) {
 
        // Mostramos el mensaje
        mensaje.style.display = "block";
 
        // Cambiamos el texto del botón
        botonBienvenida.textContent = "Ocultar bienvenida";
 
        // Ahora el mensaje sí es visible
        mensajeVisible = true;
 
    } else {
 
        // Ocultamos el mensaje
        mensaje.style.display = "none";
 
        // Volvemos al texto original del botón
        botonBienvenida.textContent = "Mostrar bienvenida";
 
        // Ahora el mensaje está oculto de nuevo
        mensajeVisible = false;
 
    }
 
});