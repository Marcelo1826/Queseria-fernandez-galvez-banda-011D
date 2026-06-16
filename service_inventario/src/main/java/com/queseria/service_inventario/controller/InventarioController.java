package com.queseria.service_inventario.controller;

import com.queseria.service_inventario.model.Inventario;
import com.queseria.service_inventario.service.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/inventarios")
public class InventarioController {
    @Autowired
    private InventarioService inventarioService;

    @PostMapping
    public Inventario crear(@RequestBody Inventario inv) { return inventarioService.guardarInventario(inv); }

    @GetMapping
    public List<Inventario> listar() { return inventarioService.listarTodo(); }

    @GetMapping("/{id}")
    public Inventario ver(@PathVariable Long id) { return inventarioService.obtenerPorId(id); }
}