package com.queseria.service_productos.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.queseria.service_productos.modelo.ProductosModelo;
import com.queseria.service_productos.repository.ProductosRepository;

@Service
public class ProductosService {
    @Autowired
    private ProductosRepository queseriaRepository;

    public ProductosModelo guardarQueso(ProductosModelo queso) {
        return queseriaRepository.save(queso);
    }

    public List<ProductosModelo> listarTodo(){
        return queseriaRepository.findAll();
    }

    public void eliminar(Long id){
        queseriaRepository.deleteById(id);
    }

    public Optional<ProductosModelo> buscarPorId(Long id){
        try {
            
            return queseriaRepository.findById(id);

        } catch (Exception e) {
            throw new RuntimeException(
                "Error al buscar cliente: " + e.getMessage());
        }
                    
    }
}
