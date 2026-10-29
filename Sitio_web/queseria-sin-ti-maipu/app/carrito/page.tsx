"use client";

import { useState } from "react";

export default function CarritoPage() {
  const [cantidad1, setCantidad1] = useState(2);
  const [cantidad2, setCantidad2] = useState(1);

  const precio1 = 5000;
  const precio2 = 4500;

  const total = cantidad1 * precio1 + cantidad2 * precio2;

  return (
    <div className="container py-5 text-white">
      <h1 className="h3 mb-4">Carrito de Compras</h1>

      <div className="row g-4">
        <div className="col-12 col-md-8">
          <div className="card bg-black border-secondary text-white p-3 mb-3 d-flex flex-row justify-content-between align-items-center">
            <div>
              <h5 className="h6 text-warning mb-1">Queso Mantecoso</h5>
              <small className="text-secondary">${precio1}</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button 
                className="btn btn-sm btn-outline-light" 
                onClick={() => setCantidad1(Math.max(0, cantidad1 - 1))}
              >
                -
              </button>
              <span className="fw-bold px-2">{cantidad1}</span>
              <button 
                className="btn btn-sm btn-outline-light" 
                onClick={() => setCantidad1(cantidad1 + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="card bg-black border-secondary text-white p-3 mb-3 d-flex flex-row justify-content-between align-items-center">
            <div>
              <h5 className="h6 text-warning mb-1">Queso Chanco</h5>
              <small className="text-secondary">${precio2}</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button 
                className="btn btn-sm btn-outline-light" 
                onClick={() => setCantidad2(Math.max(0, cantidad2 - 1))}>-
              </button>
              <span className="fw-bold px-2">{cantidad2}</span>
              <button 
                className="btn btn-sm btn-outline-light" 
                onClick={() => setCantidad2(cantidad2 + 1)}>+
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card bg-black border-secondary text-white p-4">
            <h5 className="text-warning mb-3">Total del Pedido</h5>
            <p className="fs-4 fw-bold text-info">${total}</p>
            <button 
              className="btn btn-warning w-100 fw-bold mt-2" >Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}