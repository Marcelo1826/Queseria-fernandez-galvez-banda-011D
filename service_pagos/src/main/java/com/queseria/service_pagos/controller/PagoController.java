package com.queseria.service_pagos.controller;

import com.queseria.service_pagos.modelo.Pago;
import com.queseria.service_pagos.service.PagoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/pagos")
@Tag(name = "Servicio de Pagos", description = "Controlador para la gestión de pagos")
public class PagoController {

    @Autowired
    private PagoService pagoService;

    @PostMapping
    @Operation(summary = "Registrar un nuevo pago")
    public ResponseEntity<Pago> crearPago(
            @RequestParam("pedidoId") Long pedidoId,
            @RequestParam("montoBase") Double montoBase,
            @RequestParam("cantidad") Integer cantidad,
            @RequestParam("metodoPago") String metodoPago) {
        
        Pago nuevoPago = pagoService.registrarPago(pedidoId, montoBase, cantidad, metodoPago);
        return ResponseEntity.ok(nuevoPago);
    }

    @GetMapping
    @Operation(summary = "Listar todos los pagos")
    public ResponseEntity<List<Pago>> listarPagos() {
        return ResponseEntity.ok(pagoService.listarTodos());
    }
}