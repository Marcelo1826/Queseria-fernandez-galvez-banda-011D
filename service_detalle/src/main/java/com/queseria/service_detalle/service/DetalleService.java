package com.queseria.service_detalle.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.queseria.service_detalle.modelo.Detalle;
import com.queseria.service_detalle.repository.DetalleRepository;

import jakarta.transaction.Transactional;

@Service
public class DetalleService {

    @Autowired
    private DetalleRepository detalleRepository;

    public List<Detalle> listarTodo(){
        return detalleRepository.findAll();
    }

    public Optional<Detalle> buscarPorId(Long id){
        try {
            
            return detalleRepository.findById(id);
        } catch (Exception e) {
            throw new RuntimeException(
                "Error al buscar el Pedido: " + e.getMessage());
        }
    }

    @Transactional
    public Detalle guardar(Detalle detalle){
        try {
            return detalleRepository.save(detalle);
        } catch (Exception e) {
            throw new RuntimeException("Error al crear el detalle");
        }
    }

    public void elimnar(Long id){
        detalleRepository.deleteById(id);
    }
}
