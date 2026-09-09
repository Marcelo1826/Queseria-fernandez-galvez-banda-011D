package com.queseria.service_pedido.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.queseria.service_pedido.modelo.PedidoModelo;
import com.queseria.service_pedido.repository.PedidoRepository;


@Service
public class PedidoService {
@Autowired
    private PedidoRepository pedidoRepository;

    public PedidoModelo crearPedido(PedidoModelo pedido) {
        return pedidoRepository.save(pedido);
    }

    public List<PedidoModelo> listarTodo(){
        return pedidoRepository.findAll();
    }

    public Optional<PedidoModelo> buscarPorId(Long id){
        try {
            
            return pedidoRepository.findById(id);

        } catch (Exception e) {
            throw new RuntimeException(
                "Error al buscar cliente: " + e.getMessage());
        }
                    
    }

    public void eliminar(Long id){
        pedidoRepository.deleteById(id);
    }
}
