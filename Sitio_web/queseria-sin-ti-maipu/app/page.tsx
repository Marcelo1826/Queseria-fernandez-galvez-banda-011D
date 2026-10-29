"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductosModelo {
  id: number;
  nombre: string;
  precio: number;
}

export default function HomePage() {
  const [destacados, setDestacados] = useState<ProductosModelo[]>([]);

  useEffect(() => {
    fetch("/api/v1/producto")
      .then((res) => res.json())
      .then((data) => setDestacados(data.slice(0, 3)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🧀 Quesería Sin Ti Maipú</h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>Los mejores quesos directo a tu mesa</p>

      <Link
        href="/quesos"
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "0.6rem 1.2rem",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Ver Catálogo Completo
      </Link>

      <h2 style={{ marginTop: "3rem", fontSize: "1.25rem" }}>Destacados</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
        {destacados.map((q) => (
          <div
            key={q.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              width: "180px",
              textAlign: "left",
            }}
          >
            <strong>{q.nombre}</strong>
            <p style={{ color: "#2563eb", fontWeight: "bold", margin: "0.5rem 0" }}>
              ${q.precio?.toLocaleString("es-CL")}
            </p>
            <Link href={`/quesos/${q.id}`} style={{ fontSize: "0.85rem", color: "#666" }}>
              Ver más →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}