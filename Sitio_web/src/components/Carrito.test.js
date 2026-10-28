import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carrito from "./Carrito";

// Productos de prueba
const productosPrueba = [
  {
    id: 1,
    nombre: "Queso Gouda",
    precio: 4500,
    cantidad: 2
  }
];

// Componente auxiliar para probar los cambios de estado
function CarritoDePrueba({ productosIniciales = productosPrueba }) {
  const [productos, setProductos] = useState(productosIniciales);

  return (
    <Carrito
      productos={productos}
      setProductos={setProductos}
    />
  );
}

describe("Pruebas unitarias del carrito de compras", () => {

  // PRUEBA 1: Mostrar productos
  test("muestra los productos del carrito", () => {
    render(<CarritoDePrueba />);

    expect(screen.getByText("Queso Gouda")).toBeInTheDocument();
    expect(screen.getByText("Cantidad: 2")).toBeInTheDocument();
  });

  // PRUEBA 2: Aumentar cantidad
  test("aumenta la cantidad de un producto", () => {
    render(<CarritoDePrueba />);

    const botonAumentar = screen.getByRole("button", {
      name: "➕"
    });

    fireEvent.click(botonAumentar);

    expect(screen.getByText("Cantidad: 3")).toBeInTheDocument();
  });

  // PRUEBA 3: Disminuir cantidad
  test("disminuye la cantidad de un producto", () => {
    render(<CarritoDePrueba />);

    const botonDisminuir = screen.getByRole("button", {
      name: "➖"
    });

    fireEvent.click(botonDisminuir);

    expect(screen.getByText("Cantidad: 1")).toBeInTheDocument();
  });

  // PRUEBA 4: Eliminar producto
  test("elimina un producto del carrito", () => {
    render(<CarritoDePrueba />);

    const botonEliminar = screen.getByRole("button", {
      name: /eliminar/i
    });

    fireEvent.click(botonEliminar);

    expect(screen.queryByText("Queso Gouda")).not.toBeInTheDocument();

    expect(
      screen.getByText("Tu carrito está vacío.")
    ).toBeInTheDocument();
  });

  // PRUEBA 5: Calcular total
  test("calcula correctamente el total de la compra", () => {
    render(<CarritoDePrueba />);

    // 4500 x 2 = 9000
    expect(screen.getByText("Total: $9.000")).toBeInTheDocument();
  });

  // PRUEBA 6: Carrito vacío
  test("muestra un mensaje cuando el carrito está vacío", () => {
    render(<CarritoDePrueba productosIniciales={[]} />);

    expect(
      screen.getByText("Tu carrito está vacío.")
    ).toBeInTheDocument();

    expect(screen.getByText("Total: $0")).toBeInTheDocument();
  });

});