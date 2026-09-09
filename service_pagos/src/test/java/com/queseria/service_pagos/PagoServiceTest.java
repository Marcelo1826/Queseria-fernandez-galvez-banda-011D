package com.queseria.service_pagos;

import com.queseria.service_pagos.modelo.Pago;
import com.queseria.service_pagos.repository.PagoRepository;
import com.queseria.service_pagos.service.PagoService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(MockitoExtension.class)
public class PagoServiceTest {

    @Mock
    private PagoRepository pRepository;

    @InjectMocks
    private PagoService pService;

    @Test
    public void verificarPrecioDinamicoConDescuento() {
        // 1. ARRANGE (Preparar los datos de prueba)
        Long idPedido = 1L;
        Double base = 20000.0;
        Integer cant = 12; // Al ser 10 o más, aplica el 10% de descuento automático
        String met = "EFECTIVO";

        Pago pagoSimulado = new Pago(1L, idPedido, base, 2000.0, 18000.0, met);
        Mockito.when(pRepository.save(any(Pago.class))).thenReturn(pagoSimulado);

        // 2. ACT (Ejecutar el método real)
        Pago resultado = pService.registrarPago(idPedido, base, cant, met);

        // 3. ASSERT (Verificar que las matemáticas de la regla de negocio den bien)
        assertNotNull(resultado);
        assertEquals(18000.0, resultado.getMontoFinal(), "El monto final debería tener el 10% de descuento");
        assertEquals(2000.0, resultado.getDescuentoAplicado(), "El descuento debería ser de 2000");
    }
}