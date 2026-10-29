function esCorreoValido(email) {
  return email.includes("@") && email.includes(".");
}

function esCamposValidos(nombre, email, mensaje) {
  return nombre.trim() !== "" && email.trim() !== "" && mensaje.trim() !== "";
}

describe("Pruebas Unitarias - Formulario de Contacto", () => {
  it("debe validar correctamente un correo electrónico estructurado", () => {
    expect(esCorreoValido("cliente@gmail.com")).toBeTrue();
    expect(esCorreoValido("correo-invalido")).toBeFalse();
  });

  it("debe rechazar campos vacíos o solo con espacios", () => {
    const esValido = esCamposValidos("   ", "test@gmail.com", "Hola");
    expect(esValido).toBeFalse();
  });

  it("debe aceptar cuando todos los campos contengan texto", () => {
    const esValido = esCamposValidos("Marcelo", "marcelo@gmail.com", "Consulta sobre despachos");
    expect(esValido).toBeTrue();
  });
});