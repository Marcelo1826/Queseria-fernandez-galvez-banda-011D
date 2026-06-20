package com.queseria.service_detalle.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.queseria.service_detalle.modelo.Detalle;
import com.queseria.service_detalle.repository.DetalleRepository;

@ExtendWith(MockitoExtension.class)
class DetalleServiceTest {

    @Mock
    private DetalleRepository detalleRepository; // Simulamos el repositorio
    @InjectMocks
    private DetalleService detalleService; // Inyectamos el mock en el servicio real
    @Test
    @DisplayName("Debería guardar el detalle del pedido correctamente")
    void guardarDetalleTest() {
        // 1. Preparación (escenario)
        Detalle detalle = new Detalle();
        detalle.setPrecioUnitario(12000.0);
        detalle.setCantidad(2);
        when(detalleRepository.save(any(Detalle.class))).thenAnswer(invocation -> {
            Detalle deta = invocation.getArgument(0);
            deta.setId(1L);
            return deta;
        });

        Detalle resultado = detalleService.guardar(detalle);
        // 3. Verificación (Then)
        assertNotNull(resultado);
        assertEquals(1L, resultado.getId());
        assertEquals(2, resultado.getCantidad());
        verify(detalleRepository, times(1)).save(detalle);
    }
}
