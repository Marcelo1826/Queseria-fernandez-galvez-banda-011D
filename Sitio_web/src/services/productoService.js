// Dirección del API Gateway
const API_URL = "http://localhost:9090/api/v1/producto";

// Obtener los productos desde el backend
export const obtenerProductos = async () => {
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  return await respuesta.json();
};