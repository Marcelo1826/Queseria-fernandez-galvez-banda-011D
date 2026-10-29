"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="container py-5 text-white">
      <h1 className="h3 mb-4">Contacto y Ubicación</h1>

      <div className="row g-4">
        <div className="col-12 col-md-7">
          <div className="card bg-black border-secondary p-4 text-white">
            <h5 className="text-warning mb-3">Envíanos un mensaje</h5>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small text-secondary">Nombre Completo</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small text-secondary">Correo Electrónico</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small text-secondary">Mensaje</label>
                <textarea
                  rows={4}
                  className="form-control bg-dark text-white border-secondary"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-warning fw-bold w-100">Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="card bg-black border-secondary p-4 text-white h-100">
            <h5 className="text-warning mb-3">Información del Local</h5>

            <p className="mb-2">
              <strong>Dirección:</strong> samuel 3330, Maipú
            </p>
            <p className="mb-2">
              <strong>Teléfono:</strong> +56 9 8430 7417
            </p>
            <p className="mb-2">
              <strong>Email:</strong> queseriasintimaipu@gmail.com
            </p>
            <p className="mb-4">
              <strong>Horario:</strong> Lunes a Domingo: 09:00 - 20:00 hrs
            </p>

            <hr className="border-secondary" />

            <p className="text-secondary small text-center mb-0">Despachos a domicilio en toda la comuna de Maipú.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}