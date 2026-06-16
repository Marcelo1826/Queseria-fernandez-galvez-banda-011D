package com.queseria.service_detalle.controller;

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

import com.queseria.service_detalle.modelo.Detalle;
import com.queseria.service_detalle.service.DetalleService;

@RestController
@RequestMapping("/api/v1/detalle")
public class DetalleController {

    @Autowired
    private DetalleService detalleService;

    @GetMapping
    public List<Detalle> listar(){
        return detalleService.listarTodo();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Detalle> obtener(@PathVariable Long id){
        return detalleService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Detalle> crear(@RequestBody Detalle detalle){
        return ResponseEntity.ok(detalleService.guardar(detalle));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> Eliminar(@PathVariable Long id){
        detalleService.elimnar(id);
        return ResponseEntity.noContent().build();
    }
}
