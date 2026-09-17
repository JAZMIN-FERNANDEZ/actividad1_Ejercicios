const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim(); 

    if (texto !== '') {
        const li = document.createElement('li');
        li.classList.add('elemento', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-2', 'rounded');

        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-sm');
        botonEliminar.addEventListener('click', function () {
            li.remove(); 
        });

        li.appendChild(botonEliminar);

        lista.appendChild(li);

        input.value = '';
        input.focus();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Escribe algo para agregar a la lista.'
        });
    }
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});