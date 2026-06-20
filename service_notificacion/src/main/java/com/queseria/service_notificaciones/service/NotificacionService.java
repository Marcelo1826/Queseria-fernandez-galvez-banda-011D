package com.queseria.service_notificaciones.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.queseria.service_notificaciones.model.Notificacion;
import com.queseria.service_notificaciones.repository.NotificacionRepository;

@Service
public class NotificacionService {

    @Autowired
    private NotificacionRepository repository;

    public Notificacion crearNotificacion(Long pedidoId, Long clienteId) {
        Notificacion notificacion = new Notificacion();
        notificacion.setPedidoId(pedidoId);
        notificacion.setClienteId(clienteId);
        notificacion.setEstado(Notificacion.ESTADO_PROCESANDO);
        return repository.save(notificacion);
    }

    public Notificacion actualizarEstado(Long pedidoId, String nuevoEstado) {
        if (!nuevoEstado.equals(Notificacion.ESTADO_PROCESANDO) &&
            !nuevoEstado.equals(Notificacion.ESTADO_EN_CAMINO) &&
            !nuevoEstado.equals(Notificacion.ESTADO_ENTREGADO)) {
            throw new IllegalArgumentException("Estado no valido. Es PROCESANDO, EN_CAMINO o ENTREGADO");
        }

        Notificacion notificacion = repository.findByPedidoId(pedidoId)
                .orElseThrow(() -> new RuntimeException("No se encontró notificación para el pedido: " + pedidoId));
        
        notificacion.setEstado(nuevoEstado);
        return repository.save(notificacion);
    }

    public Notificacion obtenerEstadoEnvio(Long pedidoId) {
        return repository.findByPedidoId(pedidoId)
                .orElseThrow(() -> new RuntimeException("Envío no encontrado"));
    }
}