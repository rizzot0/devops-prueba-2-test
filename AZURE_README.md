w# Parte B: CI/CD con Azure App Service

## Configuración de Integración Continua y Despliegue Continuo

### Requisitos cumplidos:

✅ **Aplicación web sin dependencias externas** - NestJS sin base de datos
✅ **Ruta inicial** - GET `/` muestra cadena de texto
✅ **GitHub Actions** - Workflow configurado para CI/CD
✅ **Azure App Service** - Configuración lista para despliegue

### Archivos creados:

1. **`web.config`** - Configuración para Azure App Service
2. **`.github/workflows/azure-deploy.yml`** - Workflow de GitHub Actions
3. **Ruta inicial** - Modificada en `src/app.controller.ts`

### Pasos para completar la Parte B:

#### 1. Subir a GitHub
```bash
# Inicializar repositorio (si no existe)
git init
git add .
git commit -m "Parte A: Docker configurado, Parte B: CI/CD preparado"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

#### 2. Crear Azure App Service
1. Ir a [Azure Portal](https://portal.azure.com)
2. Crear nuevo "App Service"
3. Configurar:
   - **Nombre**: `devops-prueba-2-app`
   - **Runtime stack**: Node.js 18 LTS
   - **Operating System**: Linux
   - **Region**: Cercana a tu ubicación
   - **Pricing Plan**: F1 (Free tier)

#### 3. Configurar GitHub Actions
1. En Azure App Service → Deployment Center
2. Seleccionar "GitHub Actions"
3. Conectar tu cuenta de GitHub
4. Seleccionar el repositorio
5. Copiar el "Publish Profile"

#### 4. Configurar GitHub Secrets
1. En tu repositorio GitHub → Settings → Secrets and variables → Actions
2. Crear nuevo secret:
   - **Name**: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - **Value**: (pegar el publish profile de Azure)

#### 5. Variables de entorno en Azure
En Azure App Service → Configuration → Application settings:
- **WEBSITE_NODE_DEFAULT_VERSION**: `18.17.0`
- **SCM_DO_BUILD_DURING_DEPLOYMENT**: `true`

### Endpoints disponibles:

- **GET** `/` - Ruta inicial (cadena de texto)
- **GET** `/users` - Obtener usuarios (sin base de datos)
- **POST** `/users` - Crear usuario (sin base de datos)

### Pruebas:

1. **Primer deploy**: Hacer push a main
2. **Segundo deploy**: Crear rama, modificar ruta, hacer PR y merge

### Notas importantes:

- La aplicación funciona sin base de datos para cumplir los requisitos
- El tier F1 (Free) de Azure es suficiente
- No se requiere base de datos ni réplicas
- El dominio público se genera automáticamente por Azure 