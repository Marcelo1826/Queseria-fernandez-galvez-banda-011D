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

  // Estado para mostrar la confirmación
  const [confirmacion, setConfirmacion] = useState("");

  // Actualizar los campos mientras el usuario escribe
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value
    }));

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
      nuevosErrores.nombre =
        "El nombre debe tener entre 2 y 50 caracteres.";
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
      nuevosErrores.asunto =
        "El asunto no puede superar los 100 caracteres.";
    }

    // Validar mensaje
    if (!mensaje) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    } else if (mensaje.length < 10 || mensaje.length > 500) {
      nuevosErrores.mensaje =
        "El mensaje debe tener entre 10 y 500 caracteres.";
    }

    return nuevosErrores;
  };

  // Procesar el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nuevosErrores = validarFormulario();

    setErrores(nuevosErrores);
    setConfirmacion("");

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

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
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7">

          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">

              <h2 className="text-center mb-3">
                Formulario de contacto 📩
              </h2>

              <p className="text-muted text-center mb-4">
                ¿Tienes alguna consulta sobre nuestros productos?
                Escríbenos y te responderemos.
              </p>

              <form onSubmit={manejarEnvio} noValidate>

                {/* Nombre */}
                <div className="mb-3 text-start">
                  <label
                    htmlFor="nombre"
                    className="form-label fw-semibold"
                  >
                    Nombre:
                  </label>

                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={`form-control ${
                      errores.nombre ? "is-invalid" : ""
                    }`}
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    placeholder="Ingresa tu nombre"
                    aria-invalid={Boolean(errores.nombre)}
                    aria-describedby={
                      errores.nombre ? "error-nombre" : undefined
                    }
                  />

                  {errores.nombre && (
                    <p
                      id="error-nombre"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errores.nombre}
                    </p>
                  )}
                </div>

                {/* Correo electrónico */}
                <div className="mb-3 text-start">
                  <label
                    htmlFor="correo"
                    className="form-label fw-semibold"
                  >
                    Correo electrónico:
                  </label>

                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    className={`form-control ${
                      errores.correo ? "is-invalid" : ""
                    }`}
                    value={formulario.correo}
                    onChange={manejarCambio}
                    placeholder="ejemplo@correo.com"
                    aria-invalid={Boolean(errores.correo)}
                    aria-describedby={
                      errores.correo ? "error-correo" : undefined
                    }
                  />

                  {errores.correo && (
                    <p
                      id="error-correo"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errores.correo}
                    </p>
                  )}
                </div>

                {/* Asunto */}
                <div className="mb-3 text-start">
                  <label
                    htmlFor="asunto"
                    className="form-label fw-semibold"
                  >
                    Asunto:
                  </label>

                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    className={`form-control ${
                      errores.asunto ? "is-invalid" : ""
                    }`}
                    value={formulario.asunto}
                    onChange={manejarCambio}
                    placeholder="Motivo de tu consulta"
                    aria-invalid={Boolean(errores.asunto)}
                    aria-describedby={
                      errores.asunto ? "error-asunto" : undefined
                    }
                  />

                  {errores.asunto && (
                    <p
                      id="error-asunto"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errores.asunto}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="mb-4 text-start">
                  <label
                    htmlFor="mensaje"
                    className="form-label fw-semibold"
                  >
                    Mensaje:
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className={`form-control ${
                      errores.mensaje ? "is-invalid" : ""
                    }`}
                    value={formulario.mensaje}
                    onChange={manejarCambio}
                    placeholder="Escribe tu mensaje aquí"
                    rows="5"
                    aria-invalid={Boolean(errores.mensaje)}
                    aria-describedby={
                      errores.mensaje ? "error-mensaje" : undefined
                    }
                  />

                  {errores.mensaje && (
                    <p
                      id="error-mensaje"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errores.mensaje}
                    </p>
                  )}
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="btn btn-success w-100 py-2"
                >
                  📩 Enviar mensaje
                </button>

                {/* Mensaje de confirmación */}
                {confirmacion && (
                  <div
                    role="status"
                    className="alert alert-success mt-4 mb-0"
                  >
                    {confirmacion}
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contacto;