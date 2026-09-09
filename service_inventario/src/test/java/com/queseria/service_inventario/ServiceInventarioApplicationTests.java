package com.queseria.service_inventario;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.queseria.service_inventario.model.Inventario;
import com.queseria.service_inventario.repository.InventarioRepository;
import com.queseria.service_inventario.service.InventarioService;

@ExtendWith(MockitoExtension.class)
class ServiceInventarioApplicationTests {

    @Mock
    private InventarioRepository inventarioRepository;

    @InjectMocks
    private InventarioService inventarioService;

    @Test
    @DisplayName("Debería registrar el stock del queso correctamente")
    void guardarInventarioTest() {
        // 1. Preparacion
        Inventario registroStock = new Inventario();
        registroStock.setProductoId(1L); // ID del queso
        registroStock.setCantidad(150);  // Cantidad que ingresa

        when(inventarioRepository.save(any(Inventario.class))).thenReturn(registroStock);

        // 2. Ejecución
        Inventario resultado = inventarioService.guardarInventario(registroStock);

        // 3. Verificacion
        assertNotNull(resultado);
        assertEquals(1L, resultado.getProductoId());
        assertEquals(150, resultado.getCantidad());
    }
}
