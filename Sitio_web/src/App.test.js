import { render, screen } from "@testing-library/react";
import App from "./App";

test("muestra el carrito de compras al iniciar la aplicación", () => {
  render(<App />);

  const tituloCarrito = screen.getByRole("heading", {
    name: /mi carrito de compras/i
  });

  expect(tituloCarrito).toBeInTheDocument();
});