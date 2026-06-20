package com.queseria.service_inventario.service;

import com.queseria.service_inventario.model.Inventario;
import com.queseria.service_inventario.repository.InventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InventarioService {
    @Autowired
    private InventarioRepository inventarioRepository;

    public Inventario guardarInventario(Inventario inv) { return inventarioRepository.save(inv); }
    public List<Inventario> listarTodo() { return inventarioRepository.findAll(); }
    public Inventario obtenerPorId(Long id) { return inventarioRepository.findById(id).orElse(null); }
    
    public Inventario actualizarStock(Long prodId, Integer cant) {
        Inventario inv = inventarioRepository.findByProductoId(prodId);
        if(inv != null) {
            inv.setCantidad(inv.getCantidad() + cant);
            return inventarioRepository.save(inv);
        }
        return null;
    }
}