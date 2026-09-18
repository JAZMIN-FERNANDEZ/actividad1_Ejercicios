const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {

    const texto = input.value.trim();

    if (texto !== '') {

        const li = document.createElement('li');

        li.classList.add('elemento');
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';

        botonEliminar.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(botonEliminar);

        lista.appendChild(li);

        input.value = '';

    } else {

        alert('Escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);