package com.queseria.service_productos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queseria.service_productos.modelo.ProductosModelo;
import com.queseria.service_productos.service.ProductosService;

@RestController
@RequestMapping("/api/v1/producto")
@CrossOrigin(origins = "*")
public class ProductosController {
    @Autowired
    private ProductosService queseriaService;

    @PostMapping
    public ResponseEntity<ProductosModelo> añadirQueso(@RequestBody ProductosModelo queso) {
        ProductosModelo nuevoQueso = queseriaService.guardarQueso(queso);
        return ResponseEntity.ok(nuevoQueso);
        }

    @GetMapping
    public List<ProductosModelo> listar(){
        return queseriaService.listarTodo();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductosModelo> obtener(@PathVariable Long id){
        return queseriaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id){
        queseriaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
