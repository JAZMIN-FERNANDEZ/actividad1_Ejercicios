const obtenerTareas = () => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
};

const guardarTareas = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
};
const manejarTareas = (() => {
    let tareas = obtenerTareas(); 

    const agregar = (texto) => {
        tareas.push({ texto });
        guardarTareas(tareas);
    };

    const eliminar = (indice) => {
        tareas.splice(indice, 1);
        guardarTareas(tareas);
    };

    const obtenerTodas = () => tareas;

    return { agregar, eliminar, obtenerTodas };
})();
const renderizarTareas = () => {
    const lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";

    manejarTareas.obtenerTodas().forEach((tarea, indice) => {
        const item = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = tarea.texto;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => confirmarEliminar(indice);

        item.appendChild(texto);
        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
};
const agregarTarea = () => {
    const input = document.getElementById("nueva-tarea");
    const texto = input.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Escribe una tarea antes de agregarla."
        });
        return;
    }
    manejarTareas.agregar(texto);
    input.value = "";
    renderizarTareas();
};
const confirmarEliminar = (indice) => {
    Swal.fire({
        icon: "warning",
        title: "¿Eliminar tarea?",
        text: "Esta acción no se puede deshacer.",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
            Swal.fire({
                icon: "success",
                title: "Tarea eliminada",
                timer: 1200,
                showConfirmButton: false
            });
        }
    });
};

document.addEventListener("DOMContentLoaded", renderizarTareas);