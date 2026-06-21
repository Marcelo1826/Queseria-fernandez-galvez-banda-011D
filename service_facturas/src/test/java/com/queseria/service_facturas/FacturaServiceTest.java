package com.queseria.service_facturas;

import com.queseria.service_facturas.modelo.Factura;
import com.queseria.service_facturas.repository.FacturaRepository;
import com.queseria.service_facturas.service.FacturaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class FacturaServiceTest {

    private FacturaRepository facturaRepository;
    private FacturaService facturaService;

    @BeforeEach
    void setUp() {
        facturaRepository = Mockito.mock(FacturaRepository.class);
        facturaService = new FacturaService(facturaRepository);
    }

    // TEST 1: Valida la lógica de negocio del cálculo del IVA (19%)
    @Test
    void testGuardarFacturaCalculaIvaCorrectamente() {
        Factura facturaInput = new Factura();
        facturaInput.setPedidoId(10L);
        facturaInput.setPagoId(5L);
        facturaInput.setClienteRut("12345678-9");
        facturaInput.setTotalNeto(10000.0); 

        when(facturaRepository.save(any(Factura.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Factura facturaResultado = facturaService.guardarFactura(facturaInput);

        assertEquals(1900.0, facturaResultado.getIva());
        assertEquals(11900.0, facturaResultado.getTotalFinal());
    }

    // TEST 2: Valida el listado correcto de todas las facturas
    @Test
    void testListarTodasLasFacturas() {
        Factura f1 = new Factura();
        Factura f2 = new Factura();
        List<Factura> listaSimulada = Arrays.asList(f1, f2);

        // Simulamos que el repositorio devuelve 2 facturas
        when(facturaRepository.findAll()).thenReturn(listaSimulada);

        List<Factura> resultado = facturaService.listarTodas();

        assertNotNull(resultado);
        assertEquals(2, resultado.size()); // Verifica que traiga los 2 elementos
    }
}