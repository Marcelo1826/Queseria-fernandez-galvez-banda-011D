Sistema de Gestión para la pyme "Queseria de mi sin ti" 
Arquitectura de Microservicios

--------------------------------------------------------------------------------
Tecnologías Utilizadas

Java 21
Spring Boot
Spring Security
Spring Data JPA + Hibernate
Bean Validation (JSR 380)
Spring Cloud Gateway
MySQL
Maven
Visual Studio Code

--------------------------------------------------------------------------------

Arquitectura del Proyecto

El sistema está compuesto por los siguientes microservicios:

Microservicio             Función                              
Cliente service           Registro de los clientes   
Producto service          Gestión de productos       
Inventario service        Control de stock           
Pedido service            Gestión de pedidos         
Detalle pedido service    Detalle del pedido  

--------------------------------------------------------------------------------

Modelo Entidad Relación (MER)

Entidades principales del sistema:

Usuario
Producto
Inventario
Pedido
DetallePedido

--------------------------------------------------------------------------------

Validaciones Implementadas
Se utiliza JSR 380:

@NotBlank
@Email
@Min
@NotNull

--------------------------------------------------------------------------------
API Gateway

El sistema utiliza Spring Cloud Gateway como punto único de acceso para 
todos los microservicios.

--------------------------------------------------------------------------------

Autores

Proyecto desarrollado por Marcelo Fernandez, Joy Castillo y Benjamin Erpel
