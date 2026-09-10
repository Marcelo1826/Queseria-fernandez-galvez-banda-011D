unction actualizarContadorCarrito() {
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

function activarBotonesBlog() {
    const botones = document.querySelectorAll(".leer-mas");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const titulo = boton.dataset.title;

            alert(
                "Próximamente podrás leer el artículo completo:\n\n" + titulo
            );
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContadorCarrito();
    actualizarNavegacion();
    activarBotonesBlog();
});

window.addEventListener("storage", () => {
    actualizarContadorCarrito();
});

