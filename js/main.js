// CREAMOS LAS CONSTANTES PARA LOS ELEMENTOS PRINCIPALES

const input = document.getElementById('to-do-input');
const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('cont-to-do-list');
const completedList = document.getElementById('cont-to-do-list-complete');

// CREAMOS LA FUNCIÓN QUE NOS PERMITE CREAR UNA NUEVA TAREA A PARTIR DEL FORMULARIO
// TODA ETIQUETA QUE VAMOS A CREAR ES A PARTIR DE LA MAQUETA HTML PRE EXISTENTE
function createToDoItem (textItem) {
    // CREAMOS EL NODO O ELEMENTO PADRE O CONTENEDOR PADRE
    const item = document.createElement('div');
    item.classList.add('item-to-do');
    // CREAMOS EL NODO HIJO DEL INPUT Y LE AGREGAMOS EL TYPE CHECKBOX
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    // CREAMOS EL SIGUIENTE NODO HIJO PARRAFO
    // A ESTE PÁRRAFO LE ASIGNO EL VALOR DEL ALRGUMENTO DE LA FUNCIÓN ES DECIR LO QUE ESCRIBE EL USUARIO EN EL CAMPO
    const p = document.createElement('p');
    p.textContent = textItem 

    // CREAMOS EL ÚLTIMO NODO HIJO, EL BOTÓN DE ELIMINAR
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x' 

    // ENSAMBLAMOS DENTRO DEL NODO PADRE SUS NODOS HIJOS, ES DECIR LA ESTRUCTURA DE LA TAREA
    item.appendChild(checkBox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    // UTILIZAMOS EL RETURN PARA RETORNAR O DAR RESPUESTA AL ELEMENTO CREADO YA QUE LO UTILIZAREMOS EN UNA FUCIÓN MÁS ADELANTE
    return item;

}

// DETECTAMOS EL EVENTO CLICK SOBRE EL BOTÓN + CON UN EVENTO DE ESCUCHA LISTENER 
// PARA QUE A PARTIR DE ESTE EVENTO SE AGREGUE LA TAREA DENTRO DEL CONTENEDOR #cont-to-do-list 
addBtn.addEventListener('click', () => {
    const textItem = input.value.trim();
    if (textItem == "") {
        alert('No se puede crear una tarea vacia');
    }
    else {
        const newItem = createToDoItem (textItem);
        toDoList.appendChild(newItem);
        input.value = "";
    }
});