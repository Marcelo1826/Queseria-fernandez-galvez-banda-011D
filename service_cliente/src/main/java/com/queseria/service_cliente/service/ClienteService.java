package com.queseria.service_cliente.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.queseria.service_cliente.modelo.Cliente;
import com.queseria.service_cliente.repository.ClienteRepository;

import jakarta.transaction.Transactional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarTodo(){
        return clienteRepository.findAll();
    }

    public Optional<Cliente> buscarPorId(Long id){
        try {
            
            return clienteRepository.findById(id);

        } catch (Exception e) {
            throw new RuntimeException(
                "Error al buscar cliente: " + e.getMessage());
        }
                    
    }

    @Transactional
    public Cliente guardar(Cliente cliente){
        try {
            return clienteRepository.save(cliente);

        } catch (Exception e) {
            throw new RuntimeException("Error al crear cliente");
        }
        
    }

    public void eliminar(Long id){
        clienteRepository.deleteById(id);
    }


}
