import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoService";

function ProductosBackend() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const datos = await obtenerProductos();
        setProductos(datos);
      } catch (error) {
        setError("No se pudieron cargar los productos.");
        console.error("Error al consultar productos:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>🧀 Productos desde MySQL</h2>

      {productos.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        productos.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductosBackend;