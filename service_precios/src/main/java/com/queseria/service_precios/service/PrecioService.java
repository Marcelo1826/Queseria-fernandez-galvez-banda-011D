package com.queseria.service_precios.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.queseria.service_precios.modelo.Precios;
import com.queseria.service_precios.repository.PrecioRepository;

import jakarta.transaction.Transactional;

@Service
public class PrecioService {

    @Autowired
    private PrecioRepository precioRepository;

    public List<Precios> listarTodo(){
        return precioRepository.findAll();
    }

    public Optional<Precios> buscarPorId(Long id){
        try {
            
            return precioRepository.findById(id);

        } catch (Exception e) {
            throw new RuntimeException(
                "Error al buscar el precio: " + e.getMessage());
        }
                    
    }

    @Transactional
    public Precios guardar(Precios precio){
        try {
            return precioRepository.save(precio);

        } catch (Exception e) {
            throw new RuntimeException("Error al crear el precio");
        }
        
    }

    public void eliminar(Long id){
        precioRepository.deleteById(id);
    }



}
