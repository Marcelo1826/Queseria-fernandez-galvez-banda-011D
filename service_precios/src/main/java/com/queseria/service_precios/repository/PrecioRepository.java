package com.queseria.service_precios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.queseria.service_precios.modelo.Precios;

@Repository
public interface PrecioRepository extends JpaRepository<Precios,Long>{

}
