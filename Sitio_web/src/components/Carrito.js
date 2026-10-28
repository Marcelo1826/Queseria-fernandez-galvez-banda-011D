function Carrito() {
  // Productos de ejemplo para probar el carrito
  const productos = [
    {
      id: 1,
      nombre: "Queso Gouda",
      precio: 4500,
      cantidad: 2
    },
    {
      id: 2,
      nombre: "Queso Mantecoso",
      precio: 3990,
      cantidad: 1
    }
  ];

  // Calculamos el total de la compra
  const total = productos.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  return (
    <div>
      <h2>Mi carrito de compras 🛒</h2>

      {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio.toLocaleString("es-CL")}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <p>
            Subtotal: $
            {(producto.precio * producto.cantidad).toLocaleString("es-CL")}
          </p>
          <hr />
        </div>
      ))}

      <h3>Total: ${total.toLocaleString("es-CL")}</h3>
    </div>
  );
}

export default Carrito;