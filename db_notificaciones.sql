INSERT INTO notificaciones (pedido_id, cliente_id, estado, fecha_actualizacion) 
VALUES 
(1, 5, 'PROCESANDO', NOW()),
(2, 8, 'EN_CAMINO', NOW()),
(3, 12, 'ENTREGADO', NOW()),
(4, 5, 'EN_CAMINO', NOW()),
(5, 3, 'PROCESANDO', NOW());

--EL NOW ES PARA QUE SE PONGA LA FECHA EXACTA AL MOMENTO DE LA INSERCION DE DATOS