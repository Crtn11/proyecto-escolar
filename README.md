# Portal Escolar Colegio Anáhuac
## Prototipo Funcional de Gestión Institucional (SIS/LMS)

Este proyecto es un prototipo responsivo y de alto impacto visual basado en la plantilla **Datta Able Lite**, personalizado para las necesidades académicas y administrativas del **Colegio Anáhuac**.

### 🌟 Características Principales
- **Acceso Multiprofil:** Lógica de entrada basada en roles (Alumno, Profesor, Administrativo, Sistemas).
- **Diseño Premium:** Interfaz limpia con paleta de colores institucional (Azul Oscuro y Dorado).
- **Experiencia de Usuario (UX):** Navegación intuitiva, tiempos de respuesta rápidos y diseño optimizado para dispositivos móviles.

### 📚 Módulos por Perfil
- **Alumnos:** Dashboard de bienvenida, Mis Materias (Temarios/Tareas), Horarios (Vista Diaria/Semanal), Kardex Académico, Finanzas (Estado de Cuenta) y Evaluación Docente.
- **Profesores:** Captura de Notas Masiva, Gestión de Planeación Didáctica, Control de Grupos y Perfil Profesional con Expediente Digital.
- **Administrativos:** Tablero de Control Escolar, Matriz Horaria (Detección de conflictos), Gestión de Ciclos Escolares, Cobranza/Morosidad y Administración de Personal.
- **Sistemas (IT):** Auditoría de Logs, Monitoreo de Infraestructura y Configuración de Motores de IA.

### 🛠️ Especificaciones Técnicas
- **Frontend:** HTML5, CSS3 (Vanilla + Bootstrap 5), JavaScript ES6.
- **Estilos:** Overrides personalizados en `assets/css/custom-typography.css` para control tipográfico y de color absoluto.
- **Persistencia:** Simulación de sesión mediante `localStorage`.
- **Iconografía:** Uso de Tabler Icons y Phosphor Icons para una estética moderna.

### 🚀 Instrucciones de Inicio
1. Abrir `login.html` en el navegador.
2. Ingresar las palabras clave en el campo de usuario para navegar por los perfiles:
   - "alumno"
   - "profesor"
   - "administrativo"
   - "sistemas"
3. El sistema detectará automáticamente el rol y permitirá el acceso tras la validación simluada de 2FA.
