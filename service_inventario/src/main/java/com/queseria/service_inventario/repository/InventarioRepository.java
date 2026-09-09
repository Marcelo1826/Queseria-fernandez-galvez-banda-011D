package com.queseria.service_inventario.repository;

import com.queseria.service_inventario.model.Inventario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventarioRepository extends JpaRepository<Inventario, Long> {
    Inventario findByProductoId(Long productoId);
}