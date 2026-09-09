
const formulario = document.getElementById("loginForm");

const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");

const errorCorreo = document.getElementById("errorCorreo");
const errorContrasena = document.getElementById("errorContrasena");

const mensajeExito = document.getElementById("mensajeExito");



// VALIDAR CORREO


function validarCorreo() {

    const valor = correo.value.trim();

    errorCorreo.textContent = "";

    // Campo obligatorio
    if (valor === "") {

        errorCorreo.textContent =
            "El correo electrónico es obligatorio.";

        return false;
    }


    // Máximo 100 caracteres
    if (valor.length > 100) {

        errorCorreo.textContent =
            "El correo no puede superar los 100 caracteres.";

        return false;
    }


    // Formato del correo
    const formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(valor)) {

        errorCorreo.textContent =
            "Ingresa un correo electrónico válido.";

        return false;
    }


    // Dominios permitidos
    const dominiosPermitidos = [
        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com"
    ];


    const dominioValido =
        dominiosPermitidos.some(dominio =>
            valor.toLowerCase().endsWith(dominio)
        );


    if (!dominioValido) {

        errorCorreo.textContent =
            "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";

        return false;
    }


    return true;
}


// =========================================
// VALIDAR CONTRASEÑA
// =========================================

function validarContrasena() {

    const valor = contrasena.value;

    errorContrasena.textContent = "";


    // Campo obligatorio
    if (valor === "") {

        errorContrasena.textContent =
            "La contraseña es obligatoria.";

        return false;
    }


    // Mínimo 4 caracteres
    if (valor.length < 4) {

        errorContrasena.textContent =
            "La contraseña debe tener mínimo 4 caracteres.";

        return false;
    }


    // Máximo 10 caracteres
    if (valor.length > 10) {

        errorContrasena.textContent =
            "La contraseña no puede superar los 10 caracteres.";

        return false;
    }


    return true;
}


// =========================================
// VALIDACIÓN EN TIEMPO REAL
// =========================================

correo.addEventListener("input", function() {

    validarCorreo();

    mensajeExito.textContent = "";

});


contrasena.addEventListener("input", function() {

    validarContrasena();

    mensajeExito.textContent = "";

});


// =========================================
// VALIDAR FORMULARIO
// =========================================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const correoCorrecto = validarCorreo();

    const contrasenaCorrecta = validarContrasena();


    mensajeExito.textContent = "";


    if (correoCorrecto && contrasenaCorrecta) {

        mensajeExito.textContent =
            "✓ Datos ingresados correctamente.";

        console.log("Correo:", correo.value);

        console.log("Inicio de sesión validado.");

    }

});


