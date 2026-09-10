
// =========================================
// CONTADOR DEL CARRITO
// =========================================

function actualizarContadorCarrito() {

    const contador = document.getElementById("carrito-contador");

    if (!contador) {
        return;
    }

    // Obtener carrito guardado
    const carritoGuardado = localStorage.getItem("carrito");

    // Si no existe un carrito, mostrar 0
    if (!carritoGuardado) {
        contador.textContent = "0";
        return;
    }

    try {

        const carrito = JSON.parse(carritoGuardado);

        // Verificar que sea un arreglo
        if (Array.isArray(carrito)) {

            // Sumar cantidades de los productos
            const cantidadTotal = carrito.reduce((total, producto) => {

                return total + (Number(producto.cantidad) || 1);

            }, 0);

            contador.textContent = cantidadTotal;

        } else {

            contador.textContent = "0";

        }

    } catch (error) {

        console.error("Error al leer el carrito:", error);

        contador.textContent = "0";
    }
}


// =========================================
// ANIMACIÓN DE LAS TARJETAS
// =========================================

function animarTarjetas() {

    const tarjetas = document.querySelectorAll(
        ".creador-card, .valor-card"
    );

    tarjetas.forEach((tarjeta, index) => {

        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(20px)";

        setTimeout(() => {

            tarjeta.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";

        }, 100 + (index * 100));

    });
}


// =========================================
// NAVEGACIÓN ACTIVA
// =========================================

function actualizarNavegacion() {

    const enlaces = document.querySelectorAll(".nav-links a");

    const paginaActual =
        window.location.pathname.split("/").pop();

    enlaces.forEach(enlace => {

        const href =
            enlace.getAttribute("href");

        if (!href) {
            return;
        }

        // Quitar clase activo
        enlace.classList.remove("activo");

        // Activar enlace correspondiente
        if (href === paginaActual) {
            enlace.classList.add("activo");
        }

    });
}


// =========================================
// INICIO
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    actualizarContadorCarrito();

    actualizarNavegacion();

    animarTarjetas();

});


// =========================================
// ACTUALIZAR CARRITO SI CAMBIA
// =========================================

window.addEventListener("storage", () => {

    actualizarContadorCarrito();

});

