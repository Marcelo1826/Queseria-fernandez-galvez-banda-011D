package com.queseria.service_inventario.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Inventario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long productoId;
    private Integer cantidad;
    private String bodega;
}