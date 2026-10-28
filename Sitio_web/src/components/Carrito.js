function Carrito({ productos, setProductos }) {

  // Aumentar la cantidad de un producto
  const aumentarCantidad = (id) => {
    setProductos((productosActuales) =>
      productosActuales.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      )
    );
  };

  // Disminuir la cantidad sin bajar de 1
  const disminuirCantidad = (id) => {
    setProductos((productosActuales) =>
      productosActuales.map((producto) =>
        producto.id === id && producto.cantidad > 1
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
    );
  };

  // Eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setProductos((productosActuales) =>
      productosActuales.filter((producto) => producto.id !== id)
    );
  };

  // Calcular el total de la compra
  const total = productos.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  return (
    <div>
      <h2>Mi carrito de compras 🛒</h2>

      {productos.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {productos.map((producto) => (
            <div key={producto.id}>
              <h3>{producto.nombre}</h3>

              <p>
                Precio: ${producto.precio.toLocaleString("es-CL")}
              </p>

              <p>Cantidad: {producto.cantidad}</p>

              <button
                type="button"
                onClick={() => disminuirCantidad(producto.id)}
                disabled={producto.cantidad === 1}
              >
                ➖
              </button>

              <button
                type="button"
                onClick={() => aumentarCantidad(producto.id)}
              >
                ➕
              </button>

              <button
                type="button"
                onClick={() => eliminarProducto(producto.id)}
              >
                🗑️ Eliminar
              </button>

              <p>
                Subtotal: $
                {(producto.precio * producto.cantidad).toLocaleString("es-CL")}
              </p>

              <hr />
            </div>
          ))}
        </>
      )}

      <h3>Total: ${total.toLocaleString("es-CL")}</h3>
    </div>
  );
}

export default Carrito;