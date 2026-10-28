import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

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

  return (
    <BrowserRouter>
      <div className="App">

        {/* Navegación temporal para probar nuestras páginas */}
        <nav>
          <h1>🧀 Quesería</h1>

          <Link to="/carrito">🛒 Carrito</Link>
          {" | "}
          <Link to="/contacto">📩 Contacto</Link>
        </nav>

        <hr />

        {/* Configuración de las rutas */}
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