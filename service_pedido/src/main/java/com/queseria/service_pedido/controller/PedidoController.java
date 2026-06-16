package com.queseria.service_pedido.controller;

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

import com.queseria.service_pedido.modelo.PedidoModelo;
import com.queseria.service_pedido.service.PedidoService;

@RestController
@RequestMapping("/api/v1/pedidos")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<PedidoModelo> crearPedido(@RequestBody PedidoModelo pedido) {
        PedidoModelo nuevoPedido = pedidoService.crearPedido(pedido);
        return ResponseEntity.ok(nuevoPedido);
    }

    @GetMapping
    public List<PedidoModelo> listar(){
        return pedidoService.listarTodo();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoModelo> obtener(@PathVariable Long id){
        return pedidoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id){
        pedidoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
