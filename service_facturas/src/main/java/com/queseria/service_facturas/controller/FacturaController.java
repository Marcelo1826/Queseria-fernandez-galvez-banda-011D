package com.queseria.service_facturas.controller;

import com.queseria.service_facturas.modelo.Factura;
import com.queseria.service_facturas.service.FacturaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facturas")
@Tag(name = "Servicio de Facturas", description = "Controlador para la gestión y emisión de facturas")
@CrossOrigin(origins = "*")
public class FacturaController {

    private final FacturaService facturaService;

    public FacturaController(FacturaService facturaService) {
        this.facturaService = facturaService;
    }

    @GetMapping
    @Operation(summary = "Listar todas las facturas", description = "Retorna un listado de todas las facturas emitidas por la quesería")
    public List<Factura> obtenerTodas() {
        return facturaService.listarTodas();
    }

    @PostMapping
    @Operation(summary = "Registrar y emitir una nueva factura", description = "Calcula el IVA (19%) y guarda el registro de la factura en la base de datos")
    public Factura crearFactura(@RequestBody Factura factura) {
        return facturaService.guardarFactura(factura);
    }
}