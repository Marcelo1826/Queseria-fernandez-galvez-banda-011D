package com.queseria.service_cliente.service;

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

import com.queseria.service_cliente.modelo.Cliente;
import com.queseria.service_cliente.repository.ClienteRepository;

@ExtendWith(MockitoExtension.class)
class ClienteServiceTest {

    @Mock
    private ClienteRepository clienteRepository; // Simulamos el repositorio
    @InjectMocks
    private ClienteService clienteService; // Inyectamos el mock en el servicio real
    @Test
    @DisplayName("Debería guardar un Cliente correctamente")
    void guardarClienteTest() {
        // 1. Preparación (escenario)
        Cliente cliente = new Cliente();
        cliente.setNombre("Jose Luis");
        cliente.setTelefono("+56965744315");
        when(clienteRepository.save(any(Cliente.class))).thenAnswer(invocation -> {
            Cliente cli = invocation.getArgument(0);
            cli.setId(1L);
            return cli;
        });

        Cliente resultado = clienteService.guardar(cliente);
        // 3. Verificación (Then)
        assertNotNull(resultado);
        assertEquals(1L, resultado.getId());
        assertEquals("Jose Luis", resultado.getNombre());
        verify(clienteRepository, times(1)).save(cliente);
    }
}
