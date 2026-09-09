package com.queseria.service_pagos.service;

import com.queseria.service_pagos.modelo.Pago;
import com.queseria.service_pagos.repository.PagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PagoService {

    @Autowired
    private PagoRepository pagoRepository;

    public Pago registrarPago(Long pedidoId, Double montoBase, Integer cantidadProductos, String metodoPago) {
        Double descuento = 0.0;
        
        // Regla de negocio: Precio dinámico por volumen de venta
        if (cantidadProductos >= 10) {
            descuento = montoBase * 0.10; // 10% de descuento automático
        }

        Double montoFinal = montoBase - descuento;

        Pago pago = new Pago();
        pago.setPedidoId(pedidoId);
        pago.setMontoBase(montoBase);
        pago.setDescuentoAplicado(descuento);
        pago.setMontoFinal(montoFinal);
        pago.setMetodoPago(metodoPago);

        // Guarda el registro en MySQL usando el repo
        return pagoRepository.save(pago);
    }

    public List<Pago> listarTodos() {
        return pagoRepository.findAll();
    }
}