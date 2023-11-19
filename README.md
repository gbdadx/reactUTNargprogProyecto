React Task List App
Este proyecto es una aplicación de lista de tareas desarrollada con React y Vite. Permite a los usuarios agregar y eliminar tareas, con la capacidad de almacenar las tareas en el almacenamiento local del navegador para persistencia de datos entre sesiones.

Funcionalidades Principales
Agregar Tareas: Los usuarios pueden agregar nuevas tareas proporcionando un nombre y haciendo clic en el botón correspondiente. Las tareas se añaden a la lista y se muestran en la interfaz.

Eliminar Tareas: Cada tarea en la lista tiene un botón de eliminación asociado. Al hacer clic en este botón, la tarea se eliminará de la lista.

Persistencia de Datos: Las tareas se almacenan en el almacenamiento local del navegador, lo que permite que la lista de tareas persista incluso después de recargar la página.

Estructura del Proyecto
App.jsx: El componente principal que contiene la lógica principal de la aplicación, incluyendo la gestión del estado de las tareas y la interacción con el almacenamiento local.

TaskList.jsx: Componente que muestra la lista de tareas. Cada tarea tiene un botón de eliminación asociado.

TaskForm.jsx: Componente que proporciona un formulario para agregar nuevas tareas. Captura la entrada del usuario y llama a la función de agregar tarea.

Header.jsx y Footer.jsx: Componentes simples que representan la cabecera y el pie de página de la aplicación.

Estilos
Se utiliza styled-components para el manejo de estilos. La aplicación tiene un diseño simple y responsivo.

Uso
Clona este repositorio: git clone https://github.com/tu-usuario/tu-repo.git
Instala las dependencias: npm install
Ejecuta la aplicación: npm run dev
Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias para mejorar la aplicación, no dudes en abrir un issue o enviar un pull request.

Licencia
Este proyecto está bajo la Licencia MIT.
