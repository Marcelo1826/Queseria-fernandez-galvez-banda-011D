/* =========================================
   MENÚ MÓVIL
   ========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("abierto");

    if (navLinks.classList.contains("abierto")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menú");
    }

});


/* =========================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
   ========================================= */

const enlacesMenu = document.querySelectorAll(".nav-links a");

enlacesMenu.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        navLinks.classList.remove("abierto");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

});


/* =========================================
   CARRITO
   ========================================= */

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contadorCarrito = document.getElementById("carrito-contador");

const botonesCarrito = document.querySelectorAll(".btn-carrito");


/* =========================================
   ACTUALIZAR CONTADOR
   ========================================= */

function actualizarContador() {

    contadorCarrito.textContent = carrito.length;

}


/* =========================================
   GUARDAR CARRITO
   ========================================= */

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}


/* =========================================
   AGREGAR PRODUCTO
   ========================================= */

botonesCarrito.forEach((boton) => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.producto;

        const precio = Number(boton.dataset.precio);

        const producto = {
            nombre: nombre,
            precio: precio
        };

        carrito.push(producto);

        guardarCarrito();

        actualizarContador();

        boton.textContent = "✓ Agregado";

        boton.classList.add("agregado");

        setTimeout(() => {

            boton.textContent = "+ 🛒";

            boton.classList.remove("agregado");

        }, 1000);

    });

});


/* =========================================
   INICIALIZAR
   ========================================= */

actualizarContador();
