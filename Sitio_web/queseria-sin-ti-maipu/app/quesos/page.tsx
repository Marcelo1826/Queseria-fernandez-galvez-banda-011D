"use client";

import { useEffect, useState } from "react";

interface ProductosModelo {
  id: number;
  nombre: string;
  tipo: string;
  precio: number;
  stock: number;
  proovedor: string;
}

export default function QuesosPage() {
  const [quesos, setQuesos] = useState<ProductosModelo[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function obtenerQuesos() {
      try {
        const response = await fetch("/api/v1/producto");
        if (!response.ok) throw new Error("No se pudo obtener el catálogo");
        
        const data: ProductosModelo[] = await response.json();
        setQuesos(data);
      } catch (err: any) {
        setError(err.message || "Error al conectar con la API");
      } finally {
        setCargando(false);
      }
    }

    obtenerQuesos();
  }, []);

  if (cargando) return <p style={{ padding: "2rem" }}>Cargando quesos...</p>;
  if (error) return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Catálogo de Quesos</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
        {quesos.map((q) => (
          <div
            key={q.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1rem",
              backgroundColor: "#fff",
              color: "#111827",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <strong style={{ fontSize: "1rem" }}>{q.nombre}</strong>
              <span style={{ fontSize: "0.75rem", background: "#f3f4f6", padding: "2px 6px", borderRadius: "4px" }}>
                {q.tipo}
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0.5rem 0 1rem 0" }}>
              Proveedor: {q.proovedor}
            </p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem" }}>
              <span style={{ fontWeight: "bold", color: "#2563eb" }}>
                ${q.precio?.toLocaleString("es-CL")}
              </span>
              <span style={{ color: "#059669", fontSize: "0.8rem" }}>
                Stock: {q.stock}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}