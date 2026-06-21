# Sistema Quesería - Arquitectura de Microservicios

Proyecto desarrollado para la asignatura Fullstack de Duoc UC, utilizando arquitectura de microservicios con Spring Boot y Spring Cloud Gateway para la gestión integral de una quesería.

# Integrantes

- Marcelo Fernandez
- Joy Castillo
- Benjamin Erpel

# Descripción del Proyecto

El sistema permite administrar las operaciones principales de una quesería mediante microservicios independientes.
Cada microservicio posee su propia base de datos y se comunica a través de un API Gateway.
Las funcionalidades implementadas incluyen:

- Gestión de clientes Puerto: 8081
- Gestión de productos Puerto: 8082
- Gestión de inventario Puerto: 8083
- Gestión de pedidos Puerto: 8084
- Gestión de detalle de pedidos Puerto: 8085
- Gestion de precios Puerto: 8089
- Gestion de pagos Puerto: 8091
- Gestion de notificaciones Puerto: 8092
- Gestion de facturas Puerto: 8093
- Gestion de Login Puerto: 8094

# Bibliotecas Utilizadas

## Spring Boot Web
Permite la creación de APIs REST.

## Spring Data JPA
Permite la persistencia de datos utilizando JPA e Hibernate.

## MySQL Driver
Conector para la base de datos MySQL.

## Validation
Validación de campos mediante anotaciones.

## Lombok
Reduce código repetitivo.

## Spring Cloud Gateway
Enrutamiento y centralización de solicitudes.

## Springdoc OpenAPI (Swagger)
Documentación automática de APIs.


# Herramientas Utilizadas

##Herramienta
----------------------------
Java JDK 21
Spring Boot 
Spring Cloud Gateway
MySQL
Maven
Git
GitHub
Visual Studio Code
Postman


# 🌐 Rutas API REST

## Cliente

### Obtener clientes

```http
GET http://localhost:8081/api/v1/cliente
```

### Buscar cliente por ID

```http
GET http://localhost:8081/api/v1/cliente/1
```

### Crear cliente

```http
POST http://localhost:8081/api/v1/cliente
```

Body:

```json
{
  "nombre": "Marcelo Fernandez",
  "email": "marcelo@gmail.com",
  "telefono": "+56912345678",
  "direccion": {
    "calle": "Pasaje Samuel",
    "numero": "3330",
    "comuna": "Maipú",
    "ciudad": "Santiago"
  }
}
```

---

# 🚪 Rutas API Gateway

## Cliente

```http
GET http://localhost:9090/api/v1/cliente
```

## Producto

```http
GET http://localhost:9090/api/v1/productos
```

## Inventario

```http
GET http://localhost:9090/api/v1/inventario
```

## Pedido

```http
GET http://localhost:9090/api/v1/pedidos
```

## Detalle Pedido

```http
GET http://localhost:9090/api/v1/detalle
```

