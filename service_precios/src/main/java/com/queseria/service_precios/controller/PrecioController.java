package com.queseria.service_precios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queseria.service_precios.modelo.Precios;
import com.queseria.service_precios.service.PrecioService;

@RestController
@RequestMapping("/api/v1/precios")
public class PrecioController {

    @Autowired
    private PrecioService precioService;

    @GetMapping
    public List<Precios> listar(){
        return precioService.listarTodo();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Precios> obtener(@PathVariable Long id){
        return precioService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Precios> crear(@RequestBody Precios precio){
        return ResponseEntity.ok(precioService.guardar(precio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id){
        precioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
