// CREAMOS LAS CONSTANTES PARA LOS ELEMENTOS PRINCIPALES

const input = document.getElementById('to-do-input');

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita el comportamiento predeterminado del enter en formularios ( )
        addBtn.click(); // Simula un clic en el botón de añadir
    }
});

const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('cont-to-do-list');
const completedList = document.getElementById('cont-to-do-list-complete');

// CREAMOS LA FUNCIÓN QUE NOS PERMITE CREAR UNA NUEVA TAREA A PARTIR DEL FORMULARIO
// TODA ETIQUETA QUE VAMOS A CREAR ES A PARTIR DE LA MAQUETA HTML PRE EXISTENTE

// ESTA FUNCIÓN SOLO CREA LA ESTRUCTURA DEL HTML EN UN LIMBO O UNA MEMORIA TEMPORAL; AÚN NO LA INSERTA EN LA PÁGINA
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

    // UTILIZAMOS EL RETURN PARA RETORNAR O DAR RESPUESTA AL ELEMENTO CREADO YA QUE LO UTILIZAREMOS EN UNA FUNCIÓN MÁS ADELANTE
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


        eventsToItem(newItem)


        input.value = "";
    }
});

// LA SIGUIENTE FUNCIÓN NOS PERMITIRÁ AGREGAR EL FUNCIONAMIENTO PRINCIPAL SOBRE LAS TAREAS ES DECIR MARCAR LA TAREA COMO REALIZADA O COMPLETADA O EN DADO CASO ELIMINARLA

function eventsToItem (item) {

    // UTILIZAMOS querySelector PARA CAPTURAR EL INPUT Y EL BUTTON QUE ESTÁN DENTRO DEL ITEM
    const checkBox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');

    // COMPLETAR LA TAREA
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            completedList.appendChild(item);
        }
        else {
            toDoList.appendChild(item);
        }
    });

    // ELIMINAR LA TAREA
    deleteBtn.addEventListener('click', () => {
        item.remove();
    });
}

const btnStyle = document.getElementById('change-styles');

btnStyle.addEventListener('click', () => {

    const linkCss = document.getElementById('link-styles');

    if (linkCss.getAttribute('href') === 'css/styles-day.css') {

        linkCss.setAttribute('href', 'css/styles-night.css');

        btnStyle.textContent = 'Modo dia';

    }
    else {

        linkCss.setAttribute('href', 'css/styles-day.css');

        btnStyle.textContent = 'Modo Noche';

    }

    
    
})