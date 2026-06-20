package com.queseria.service_notificaciones.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "notificaciones")
public class Notificacion {

    public static final String ESTADO_PROCESANDO = "PROCESANDO";
    public static final String ESTADO_EN_CAMINO = "EN_CAMINO";
    public static final String ESTADO_ENTREGADO = "ENTREGADO";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long pedidoId; 

    @Column(nullable = false)
    private Long clienteId; 

    @Column(nullable = false, length = 20)
    private String estado;

    private LocalDateTime fechaActualizacion;

    @PrePersist
    @PreUpdate
    public void actualizarFecha() {
        this.fechaActualizacion = LocalDateTime.now();
    }


    public Notificacion() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getPedidoId() { return pedidoId; }
    public void setPedidoId(Long pedidoId) { this.pedidoId = pedidoId; }
    public Long getClienteId() { return clienteId; }
    public void setClienteId(Long clienteId) { this.clienteId = clienteId; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    public LocalDateTime getFechaActualizacion() { return fechaActualizacion; }
}