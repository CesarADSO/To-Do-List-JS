# Proyecto: To Do List

Este proyecto consiste en una aplicación sencilla de lista de tareas hecha con HTML, CSS y JavaScript. Permite crear, completar, eliminar tareas y cambiar entre un tema de día y uno de noche.

---

## Funcionalidades

* Agregar nuevas tareas a la lista desde un campo de texto.
* Validación: no se permite crear tareas vacías.
* Marcar tareas como completadas, moviéndolas automáticamente a la sección **Completed**.
* Desmarcar tareas completadas, devolviéndolas a la lista principal.
* Eliminar tareas de forma individual.
* Cambiar estilos entre modo día y modo noche mediante un botón.

---

## Archivos del proyecto

* `index.html` → Estructura principal de la aplicación (formulario, listas y botón de cambio de estilos).
* `js/main.js` → Lógica principal: crear, mover, eliminar tareas y alternar estilos.
* `css/styles-day.css` → Estilos para el tema de día.
* `css/styles-night.css` → Estilos para el tema de noche.

---

## Cómo usarlo

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador.
3. Escribe una tarea en el campo de texto y presiona **Enter** o el botón **+** para agregarla.
4. Marca la casilla de verificación para mover la tarea a la sección **Completed**.
5. Presiona la **x** para eliminar la tarea.
6. Usa el botón con el ícono de luna/sol para alternar entre los estilos día y noche.

---

## Tecnologías usadas

* HTML5
* CSS3
* JavaScript

---

## Notas

* Este proyecto no utiliza almacenamiento persistente (las tareas se pierden al recargar la página).
* No requiere servidor ni base de datos, es completamente estático.
