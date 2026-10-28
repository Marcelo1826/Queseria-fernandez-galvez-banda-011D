import { useState, useEffect } from "react";
import "./App.css";
import Carrito from "./components/Carrito";
import { productosPrueba } from "./data/productosPrueba";

function App() {
  // Recuperar el carrito guardado o cargar los productos de prueba
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

  // Guardar el carrito cada vez que cambian los productos
  useEffect(() => {
    try {
      localStorage.setItem("carrito", JSON.stringify(productos));
    } catch (error) {
      console.error("Error al guardar el carrito:", error);
    }
  }, [productos]);

  return (
    <div className="App">
      <Carrito
        productos={productos}
        setProductos={setProductos}
      />
    </div>
  );
}

export default App;