import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import "./App.css";
import Carrito from "./components/Carrito";
import Contacto from "./components/Contacto";
import { productosPrueba } from "./data/productosPrueba";

function App() {
  // Recuperar el carrito guardado o utilizar los productos de prueba
  const [productos, setProductos] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem("carrito");

      if (carritoGuardado !== null) {
        const datos = JSON.parse(carritoGuardado);

        if (Array.isArray(datos)) {
          return datos;
        }
      }
    } catch (error) {
      console.error("Error al recuperar el carrito:", error);
    }

    return productosPrueba.map((producto) => ({ ...producto }));
  });

  // Guardar los cambios del carrito
  useEffect(() => {
    try {
      localStorage.setItem("carrito", JSON.stringify(productos));
    } catch (error) {
      console.error("Error al guardar el carrito:", error);
    }
  }, [productos]);

  // Agregar productos nuevos al carrito
  // Esta función se conectará al catálogo cuando esté disponible
  const agregarAlCarrito = (productoNuevo) => {
    setProductos((productosActuales) => {
      // Buscar si el producto ya existe en el carrito
      const productoExistente = productosActuales.find(
        (producto) => producto.id === productoNuevo.id
      );

      // Si ya existe, aumentar su cantidad
      if (productoExistente) {
        return productosActuales.map((producto) =>
          producto.id === productoNuevo.id
            ? {
                ...producto,
                cantidad: producto.cantidad + 1
              }
            : producto
        );
      }

      // Si no existe, agregarlo con cantidad 1
      return [
        ...productosActuales,
        {
          ...productoNuevo,
          cantidad: 1
        }
      ];
    });
  };

  return (
    <BrowserRouter>
      <div className="App">

        {/* Navegación temporal de la Quesería */}
        <nav>
          <h1>🧀 Quesería</h1>

          <Link to="/carrito">🛒 Carrito</Link>
          {" | "}
          <Link to="/contacto">📩 Contacto</Link>
        </nav>

        <hr />

        {/* Rutas de la aplicación */}
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/carrito" replace />}
          />

          <Route
            path="/carrito"
            element={
              <Carrito
                productos={productos}
                setProductos={setProductos}
              />
            }
          />

          <Route
            path="/contacto"
            element={<Contacto />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;