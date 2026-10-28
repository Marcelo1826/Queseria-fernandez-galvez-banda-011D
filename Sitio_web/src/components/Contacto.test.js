import { render, screen, fireEvent } from "@testing-library/react";
import Contacto from "./Contacto";

describe("Pruebas del formulario de contacto", () => {

  // PRUEBA 1: Mostrar los campos
  test("muestra todos los campos del formulario", () => {
    render(<Contacto />);

    expect(screen.getByLabelText("Nombre:")).toBeInTheDocument();
    expect(screen.getByLabelText("Correo electrónico:")).toBeInTheDocument();
    expect(screen.getByLabelText("Asunto:")).toBeInTheDocument();
    expect(screen.getByLabelText("Mensaje:")).toBeInTheDocument();
  });

  // PRUEBA 2: Validar campos obligatorios
  test("muestra errores cuando el formulario está vacío", () => {
    render(<Contacto />);

    fireEvent.click(
      screen.getByRole("button", { name: /enviar mensaje/i })
    );

    expect(
      screen.getByText("El nombre es obligatorio.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("El correo electrónico es obligatorio.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("El asunto es obligatorio.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("El mensaje es obligatorio.")
    ).toBeInTheDocument();
  });

  // PRUEBA 3: Validar correo electrónico
  test("rechaza un correo electrónico incorrecto", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Correo electrónico:"), {
      target: { value: "correo-invalido" }
    });

    fireEvent.click(
      screen.getByRole("button", { name: /enviar mensaje/i })
    );

    expect(
      screen.getByText("Ingresa un correo electrónico válido.")
    ).toBeInTheDocument();
  });

  // PRUEBA 4: Validar mensaje demasiado corto
  test("rechaza un mensaje con menos de 10 caracteres", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Mensaje:"), {
      target: { value: "Hola" }
    });

    fireEvent.click(
      screen.getByRole("button", { name: /enviar mensaje/i })
    );

    expect(
      screen.getByText(
        "El mensaje debe tener entre 10 y 500 caracteres."
      )
    ).toBeInTheDocument();
  });

  // PRUEBA 5: Validar formulario correcto
  test("muestra confirmación cuando los datos son válidos", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre:"), {
      target: { value: "Javiera" }
    });

    fireEvent.change(screen.getByLabelText("Correo electrónico:"), {
      target: { value: "javiera@gmail.com" }
    });

    fireEvent.change(screen.getByLabelText("Asunto:"), {
      target: { value: "Consulta de productos" }
    });

    fireEvent.change(screen.getByLabelText("Mensaje:"), {
      target: {
        value: "Hola, quisiera consultar por los quesos disponibles."
      }
    });

    fireEvent.click(
      screen.getByRole("button", { name: /enviar mensaje/i })
    );

    expect(
      screen.getByRole("status")
    ).toHaveTextContent(
      "¡Formulario validado correctamente!"
    );

    // Comprobar que el formulario se limpia
    expect(screen.getByLabelText("Nombre:")).toHaveValue("");
    expect(screen.getByLabelText("Correo electrónico:")).toHaveValue("");
    expect(screen.getByLabelText("Asunto:")).toHaveValue("");
    expect(screen.getByLabelText("Mensaje:")).toHaveValue("");
  });

});
