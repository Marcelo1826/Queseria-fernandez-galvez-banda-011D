import { useState } from "react";

function Contacto() {
  // Estado para guardar los datos del formulario
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: ""
  });

  // Estado para guardar los errores
  const [errores, setErrores] = useState({});

  // Estado para mostrar el mensaje de confirmación
  const [confirmacion, setConfirmacion] = useState("");

  // Actualizar los campos mientras el usuario escribe
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value
    }));

    // Limpiar el error del campo que se está modificando
    setErrores((erroresActuales) => ({
      ...erroresActuales,
      [name]: ""
    }));

    setConfirmacion("");
  };

  // Validar los datos ingresados
  const validarFormulario = () => {
    const nuevosErrores = {};

    const nombre = formulario.nombre.trim();
    const correo = formulario.correo.trim();
    const asunto = formulario.asunto.trim();
    const mensaje = formulario.mensaje.trim();

    // Validar nombre
    if (!nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    } else if (nombre.length < 2 || nombre.length > 50) {
      nuevosErrores.nombre = "El nombre debe tener entre 2 y 50 caracteres.";
    }

    // Validar correo electrónico
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo) {
      nuevosErrores.correo = "El correo electrónico es obligatorio.";
    } else if (!formatoCorreo.test(correo)) {
      nuevosErrores.correo = "Ingresa un correo electrónico válido.";
    }

    // Validar asunto
    if (!asunto) {
      nuevosErrores.asunto = "El asunto es obligatorio.";
    } else if (asunto.length > 100) {
      nuevosErrores.asunto = "El asunto no puede superar los 100 caracteres.";
    }

    // Validar mensaje
    if (!mensaje) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    } else if (mensaje.length < 10 || mensaje.length > 500) {
      nuevosErrores.mensaje = "El mensaje debe tener entre 10 y 500 caracteres.";
    }

    return nuevosErrores;
  };

  // Procesar el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nuevosErrores = validarFormulario();

    setErrores(nuevosErrores);
    setConfirmacion("");

    // Comprobar si existen errores
    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    // Confirmar que los datos son válidos
    setConfirmacion(
      "¡Formulario validado correctamente! Tus datos están listos para enviarse."
    );

    // Limpiar el formulario
    setFormulario({
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: ""
    });
  };

  return (
    <div>
      <h2>Formulario de contacto 📩</h2>

      <p>
        ¿Tienes alguna consulta sobre nuestros productos?
        Escríbenos y te responderemos.
      </p>

      <form onSubmit={manejarEnvio} noValidate>

        {/* Nombre */}
        <div>
          <label htmlFor="nombre">Nombre:</label>

          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Ingresa tu nombre"
            aria-invalid={Boolean(errores.nombre)}
            aria-describedby={errores.nombre ? "error-nombre" : undefined}
          />

          {errores.nombre && (
            <p id="error-nombre" role="alert">
              {errores.nombre}
            </p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo">Correo electrónico:</label>

          <input
            type="email"
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            placeholder="ejemplo@correo.com"
            aria-invalid={Boolean(errores.correo)}
            aria-describedby={errores.correo ? "error-correo" : undefined}
          />

          {errores.correo && (
            <p id="error-correo" role="alert">
              {errores.correo}
            </p>
          )}
        </div>

        {/* Asunto */}
        <div>
          <label htmlFor="asunto">Asunto:</label>

          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formulario.asunto}
            onChange={manejarCambio}
            placeholder="Motivo de tu consulta"
            aria-invalid={Boolean(errores.asunto)}
            aria-describedby={errores.asunto ? "error-asunto" : undefined}
          />

          {errores.asunto && (
            <p id="error-asunto" role="alert">
              {errores.asunto}
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje">Mensaje:</label>

          <textarea
            id="mensaje"
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            placeholder="Escribe tu mensaje aquí"
            rows="5"
            aria-invalid={Boolean(errores.mensaje)}
            aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
          />

          {errores.mensaje && (
            <p id="error-mensaje" role="alert">
              {errores.mensaje}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <button type="submit">
          Enviar mensaje
        </button>

        {/* Mensaje de confirmación */}
        {confirmacion && (
          <p role="status">
            {confirmacion}
          </p>
        )}

      </form>
    </div>
  );
}

export default Contacto;