package com.queseria.service_pedido.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.queseria.service_pedido.modelo.PedidoModelo;

@Repository
public interface PedidoRepository extends JpaRepository<PedidoModelo, Long> {
}
