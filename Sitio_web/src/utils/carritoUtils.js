export const calcularSubtotal = (precio, cantidad) => {
  return precio * cantidad;
};

export const calcularTotal = (productos) => {
  return productos.reduce(
    (total, producto) =>
      total + calcularSubtotal(producto.precio, producto.cantidad),
    0
  );
};