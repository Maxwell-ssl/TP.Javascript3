function BotonAgregarTareas() {
    var addcomentario = document.getElementById("entradaTarea").value;

    if (addcomentario === "") {
        return;
    }

    var cajadecomentarios = document.getElementById("listaTareas");

    var nuevocoment = document.createElement("li");
    nuevocoment.classList.add("entradaTarea");
    nuevocoment.innerHTML = addcomentario;

    // Agregado: Crear el botón de eliminación y agregarlo al comentario
    var eliminarComentarioTemplate = document.getElementById("eliminarComentarioTemplate");
    var eliminarComentarioButton = eliminarComentarioTemplate.content.cloneNode(true);
    nuevocoment.appendChild(eliminarComentarioButton);

    cajadecomentarios.appendChild(nuevocoment);

    document.getElementById("entradaTarea").value = "";
}

// Agregado: Función para eliminar un comentario
function eliminarComentario(button) {
    var entradaTarea = button.parentNode;
    entradaTarea.parentNode.removeChild(entradaTarea);
}
