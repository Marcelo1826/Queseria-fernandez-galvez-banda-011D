package com.queseria.service_facturas.service;

import com.queseria.service_facturas.modelo.Factura;
import com.queseria.service_facturas.repository.FacturaRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class FacturaService {

    private final FacturaRepository facturaRepository;

    // 
    public FacturaService(FacturaRepository facturaRepository) {
        this.facturaRepository = facturaRepository;
    }

    public List<Factura> listarTodas() {
        return facturaRepository.findAll();
    }

    public Factura guardarFactura(Factura factura) {
        //  Calcular IVA (19%) sobre el Total Neto chileno
        double neto = factura.getTotalNeto();
        double calculoIva = neto * 0.19;
        double finalTotal = neto + calculoIva;
        
        factura.setIva(calculoIva);
        factura.setTotalFinal(finalTotal);
        factura.setFechaEmision(LocalDateTime.now());
        
        return facturaRepository.save(factura);
    }
}