function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

function calcularTotalCarrito(items) {
  return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

function formatearMoneda(monto) {
  return `$${monto.toLocaleString("es-CL")}`;
}

describe("Pruebas Unitarias - Carrito de Compras", () => {
  it("debe calcular el subtotal correcto de un producto", () => {
    const subtotal = calcularSubtotal(4500, 3);
    expect(subtotal).toBe(13500);
  });

  it("debe calcular la suma total de varios productos en el carrito", () => {
    const carrito = [
      { nombre: "Queso Gouda", precio: 5000, cantidad: 2 },
      { nombre: "Queso Chanco", precio: 4000, cantidad: 1 },
    ];
    const total = calcularTotalCarrito(carrito);
    expect(total).toBe(14000);
  });

  it("debe retornar 0 si el carrito está vacío", () => {
    const total = calcularTotalCarrito([]);
    expect(total).toBe(0);
  });

  it("debe formatear un monto numérico a formato de peso chileno", () => {
    const textoFormateado = formatearMoneda(12500);
    expect(textoFormateado).toContain("12.500");
  });
});