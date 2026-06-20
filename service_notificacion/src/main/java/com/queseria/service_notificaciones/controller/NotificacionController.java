package com.queseria.service_notificaciones.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.queseria.service_notificaciones.model.Notificacion;
import com.queseria.service_notificaciones.service.NotificacionService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/notificaciones")
@Tag(name = "Notificaciones y Envíos", description = "API para gestionar los estados de envío de los pedidos")
public class NotificacionController {

    @Autowired
    private NotificacionService service;

    @PostMapping("/crear")
    @Operation(summary = "Crear un nuevo seguimiento de envío", description = "Inicia el estado de un pedido en PROCESANDO")
    public ResponseEntity<Notificacion> iniciarEnvio(@RequestParam Long pedidoId, @RequestParam Long clienteId) {
        return ResponseEntity.ok(service.crearNotificacion(pedidoId, clienteId));
    }

    @PutMapping("/actualizar/{pedidoId}")
    @Operation(summary = "Actualizar estado", description = "Cambia el estado a EN_CAMINO o ENTREGADO")
    public ResponseEntity<Notificacion> actualizarEstadoEnvio(
            @PathVariable Long pedidoId,
            @Parameter(description = "Valores permitidos: PROCESANDO, EN_CAMINO, ENTREGADO") 
            @RequestParam String estado) {
        return ResponseEntity.ok(service.actualizarEstado(pedidoId, estado.toUpperCase()));
    }

    @GetMapping("/estado/{pedidoId}")
    @Operation(summary = "Consultar estado de envío", description = "Retorna el estado actual del envío basado en el ID del pedido")
    public ResponseEntity<Notificacion> verEstado(@PathVariable Long pedidoId) {
        return ResponseEntity.ok(service.obtenerEstadoEnvio(pedidoId));
    }
}