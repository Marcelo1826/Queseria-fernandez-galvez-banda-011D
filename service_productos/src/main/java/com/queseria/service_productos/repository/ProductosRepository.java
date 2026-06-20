package com.queseria.service_productos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.queseria.service_productos.modelo.ProductosModelo;

@Repository
public interface ProductosRepository  extends  JpaRepository<ProductosModelo, Long>{

}
