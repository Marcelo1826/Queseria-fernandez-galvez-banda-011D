package com.queseria.service_productos;

import com.queseria.service_productos.modelo.ProductosModelo;
import com.queseria.service_productos.repository.ProductosRepository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.queseria.service_productos.service.ProductosService;

@ExtendWith(MockitoExtension.class)
class ProductosServiceTest {

    @Mock
    private ProductosRepository productosRepository;

    @InjectMocks
    private ProductosService productosService;

    @Test
    @DisplayName("Debería guardar el producto de la quesería correctamente")
    void guardarProductoTest() {
        // 1. Preparación (escenario)
        ProductosModelo producto = new ProductosModelo();
        producto.setNombre("Queso de Oveja");
        producto.setPrecio(8500);

        when(productosRepository.save(any(ProductosModelo.class))).thenReturn(producto);

        // 2. Ejecución
        ProductosModelo resultado = productosService.guardarQueso(producto);

        // 3. Verificación
        assertNotNull(resultado);
        assertEquals("Queso de Oveja", resultado.getNombre());
        assertEquals(8500, resultado.getPrecio());
    }
}
