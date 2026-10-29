"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface ProductosModelo {
  id: number;
  nombre: string;
  tipo: string;
  precio: number;
  stock: number;
  proovedor: string;
}

export default function DetalleQuesoPage() {
  const params = useParams();
  const id = params.id;

  const [queso, setQueso] = useState<ProductosModelo | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function obtenerQuesoPorId() {
      try {
        // Equivale al @GetMapping("/{id}") de tu ProductosController.java
        const response = await fetch(`/api/v1/producto/${id}`);
        if (response.ok) {
          const data = await response.json();
          setQueso(data);
        }
      } catch (err) {
        console.error("Error al obtener detalle del queso:", err);
      } finally {
        setCargando(false);
      }
    }

    if (id) obtenerQuesoPorId();
  }, [id]);

  if (cargando) return <p style={{ padding: "2rem" }}>Cargando detalles...</p>;
  if (!queso) return <p style={{ padding: "2rem" }}>Queso no encontrado.</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{queso.nombre}</h1>
      <p>Tipo: {queso.tipo}</p>
      <p>Proveedor: {queso.proovedor}</p>
      <h2>${queso.precio?.toLocaleString("es-CL")}</h2>
      <p>Stock disponible: {queso.stock}</p>
    </div>
  );
}