package com.queseria.service_notificaciones;

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

import com.queseria.service_notificaciones.model.Notificacion;
import com.queseria.service_notificaciones.repository.NotificacionRepository;
import com.queseria.service_notificaciones.service.NotificacionService;

@ExtendWith(MockitoExtension.class)
class ServiceNotificacionesApplicationTests {

    @Mock
    private NotificacionRepository notificacionRepository;

    @InjectMocks
    private NotificacionService notificacionService;

    @Test
    @DisplayName("Debería asignar estado PROCESANDO al crear la notificación")
    void guardarNotificacionTest() {
        // 1. Preparación (escenario)
        Notificacion noti = new Notificacion();
        noti.setPedidoId(1L);
        noti.setEstado("PROCESANDO");

        when(notificacionRepository.save(any(Notificacion.class))).thenReturn(noti);

        // 2. Ejecución
   		Notificacion resultado = notificacionService.crearNotificacion(1L, 5L);

        // 3. Verificación
        assertNotNull(resultado);
        assertEquals(1L, resultado.getPedidoId());
        assertEquals("PROCESANDO", resultado.getEstado());
    }
}
