# Configuración Docker para DevOps Test

## Parte A: Contenerización con Docker y Docker Compose

### Servicios Configurados

1. **MariaDB** (Base de datos)
   - Puerto: 3306
   - Límites de recursos: 512MB RAM, 0.5 CPU
   - Reservas: 256MB RAM, 0.25 CPU

2. **phpMyAdmin** (Interfaz web para la base de datos)
   - Puerto: 8080
   - Límites de recursos: 256MB RAM, 0.25 CPU
   - Reservas: 128MB RAM, 0.1 CPU

3. **Aplicación NodeJS** (API NestJS)
   - Puerto: 3000
   - Construida desde el Dockerfile

### Comandos para ejecutar

```bash
# Construir y ejecutar todos los servicios
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v
```

### Endpoints disponibles

- **GET** `/users` - Obtener todos los usuarios
- **GET** `/users/:id` - Obtener usuario por ID
- **POST** `/users` - Crear nuevo usuario

### Acceso a phpMyAdmin

- URL: http://localhost:8080
- Usuario: root
- Contraseña: rootpassword

### Variables de entorno

Las variables de entorno están configuradas en el docker-compose.yaml:
- DATABASE_HOST: mariadb
- DATABASE_PORT: 3306
- DATABASE_USER: devops_user
- DATABASE_PASS: devops_password
- DATABASE_NAME: devops_db

### Pruebas

Usar el archivo `http/test.http` para probar los endpoints con extensiones como REST Client en VS Code. 