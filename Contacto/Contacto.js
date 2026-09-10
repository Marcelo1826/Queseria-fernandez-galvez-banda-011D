// =========================================
// CONTACTO.JS
// =========================================

function actualizarContadorCarrito() {
    const contador = document.getElementById("carrito-contador");

    if (!contador) {
        return;
    }

    const carritoGuardado = localStorage.getItem("carrito");

    if (!carritoGuardado) {
        contador.textContent = "0";
        return;
    }

    try {
        const carrito = JSON.parse(carritoGuardado);

        if (Array.isArray(carrito)) {
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

function actualizarNavegacion() {
    const enlaces = document.querySelectorAll(".nav-links a");
    const paginaActual = window.location.pathname.split("/").pop();

    enlaces.forEach(enlace => {
        const href = enlace.getAttribute("href");

        if (!href) {
            return;
        }

        enlace.classList.remove("activo");

        if (href === paginaActual) {
            enlace.classList.add("activo");
        }
    });
}

function configurarFormulario() {
    const formulario = document.getElementById("contacto-form");
    const mensajeExito = document.getElementById("mensaje-exito");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", event => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        mensajeExito.textContent =
            `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;

        formulario.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContadorCarrito();
    actualizarNavegacion();
    configurarFormulario();
});

window.addEventListener("storage", () => {
    actualizarContadorCarrito();
});
