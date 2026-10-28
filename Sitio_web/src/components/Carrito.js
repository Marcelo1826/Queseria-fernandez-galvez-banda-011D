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

  // Eliminar un producto
  const eliminarProducto = (id) => {
    setProductos((productosActuales) =>
      productosActuales.filter((producto) => producto.id !== id)
    );
  };

  // Calcular el total
  const total = productos.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        Mi carrito de compras 🛒
      </h2>

      {productos.length === 0 ? (
        <div className="alert alert-info text-center">
          Tu carrito está vacío.
        </div>
      ) : (
        <div className="row g-4">

          <div className="col-lg-8">
            {productos.map((producto) => (
              <div className="card shadow-sm mb-3" key={producto.id}>
                <div className="card-body">

                  <h3 className="h5 card-title">
                    🧀 {producto.nombre}
                  </h3>

                  <p className="text-muted mb-2">
                    Precio: ${producto.precio.toLocaleString("es-CL")}
                  </p>

                  <p className="mb-2">
                    Cantidad: {producto.cantidad}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => disminuirCantidad(producto.id)}
                      disabled={producto.cantidad === 1}
                    >
                      ➖
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => aumentarCantidad(producto.id)}
                    >
                      ➕
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      🗑️ Eliminar
                    </button>
                  </div>

                  <p className="fw-bold mb-0">
                    Subtotal: $
                    {(producto.precio * producto.cantidad).toLocaleString("es-CL")}
                  </p>

                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">

                <h3 className="h5">Resumen de compra</h3>

                <hr />

                <h3 className="h4 text-success">
                  Total: ${total.toLocaleString("es-CL")}
                </h3>

              </div>
            </div>
          </div>

        </div>
      )}

      {productos.length === 0 && (
        <h3 className="text-center mt-4">
          Total: ${total.toLocaleString("es-CL")}
        </h3>
      )}

    </div>
  );
}

export default Carrito;