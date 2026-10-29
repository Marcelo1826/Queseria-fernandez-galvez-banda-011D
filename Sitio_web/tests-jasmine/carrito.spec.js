import {
  calcularSubtotal,
  calcularTotal
} from "../src/utils/carritoUtils";

describe("Pruebas del carrito de compras", function () {

  it("debe calcular correctamente el subtotal de un producto", function () {
    const subtotal = calcularSubtotal(4500, 2);

    expect(subtotal).toBe(9000);
  });

  it("debe calcular correctamente el total de varios productos", function () {
    const productos = [
      { id: 1, nombre: "Queso Gouda", precio: 4500, cantidad: 2 },
      { id: 2, nombre: "Queso Mantecoso", precio: 3990, cantidad: 1 }
    ];

    const total = calcularTotal(productos);

    expect(total).toBe(12990);
  });

  it("debe devolver cero cuando el carrito está vacío", function () {
    const total = calcularTotal([]);

    expect(total).toBe(0);
  });

});