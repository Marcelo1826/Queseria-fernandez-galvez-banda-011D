package com.queseria.service_cliente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.queseria.service_cliente.modelo.Cliente;

@Repository
public interface ClienteRepository  extends JpaRepository<Cliente,Long>{

    Cliente findByEmail(String email);
}
