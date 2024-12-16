# BitácoraV1 📝

## Descripción del Proyecto 🚀

BitácoraV1 es una aplicación backend diseñada para que los participantes puedan
registrar 30 días de un proceso terapéutico con acompañamiento.

La aplicación permite llevar un control diario de información importante, como:

- Registro general del participante.
- Registro de intención.
- Registro diario de dosis.
- Estado base de seis áreas claves.
- Evaluación diaria de 13 estados.

El administrador tiene control total sobre los usuarios y registros.

Dependencias 🛠️
Node.js
Express
Sequelize
PostgreSQL

## Modelos de la Base de Datos

### Users

Contiene información del usuario (rol, nombre, email, contraseña) y su estado de actividad.

### Bitacoras

Representa la bitácora de un usuario con la fecha de inicio, el día actual (1-30) y su estado activo.

### Formularios Asociados

- **FormGenerals**: Información general del paciente.
- **FormIntencions**: Registro de intenciones, beneficios y desafíos.
- **FormElementos**: Cambios relevantes y experiencias del proceso.
- **FormEstados**: Evaluación diaria de 13 estados con puntaje y comentarios.
- **FormDosisDiaria**: Registro de la dosis diaria con porcentaje y estado (toma/descanso).
- **LineaBases**: Almacena la línea base diaria vinculada a cada bitácora.

Start by 👤
Jesu Guzmán

Licencia 📜
Este proyecto está bajo la licencia MIT.
