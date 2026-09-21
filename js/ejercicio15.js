let estudiantes = [];

const inputNombre = document.getElementById("nombre");
const inputCalificacion = document.getElementById("calificacion");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("listaEstudiantes");
const textoVacio = document.getElementById("textoVacio");


inputNombre.addEventListener("input", () => {
  inputNombre.value = inputNombre.value.replace(/\d/g, "");
});

function mostrarMensaje(texto, esExito) {
  mensaje.textContent = texto;
  mensaje.className = esExito ? "ok" : "";
}

function actualizarLista() {
  lista.innerHTML = "";
  estudiantes.forEach(estudiante => {
    const li = document.createElement("li");
    li.textContent = estudiante.nombre + ": " + estudiante.calificacion;
    lista.appendChild(li);
  });
  textoVacio.style.display = estudiantes.length === 0 ? "block" : "none";
}

function agregarEstudiante() {
  const nombre = inputNombre.value.trim();
  const textoCalificacion = inputCalificacion.value.trim();

  if (nombre === "" || textoCalificacion === "") {
    mostrarMensaje("Completa el nombre y la calificación.", false);
    return;
  }

  if (/\d/.test(nombre)) {
    mostrarMensaje("El nombre no puede contener números.", false);
    return;
  }

  const calificacion = Number(textoCalificacion);
  if (isNaN(calificacion)) {
    mostrarMensaje("La calificación debe ser un número.", false);
    return;
  }
  if (calificacion < 0 || calificacion > 100) {
    mostrarMensaje("La calificación debe estar entre 0 y 100.", false);
    return;
  }

  const estudiante = { nombre: nombre, calificacion: calificacion };
  estudiantes.push(estudiante);

  actualizarLista();
  mostrarMensaje("Se agregó a " + nombre + ".", true);

  inputNombre.value = "";
  inputCalificacion.value = "";
  inputNombre.focus();
}

function calcular() {
  if (estudiantes.length === 0) {
    mostrarMensaje("Agrega al menos un estudiante antes de calcular.", false);
    return;
  }

  const promedio =
    estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) /
    estudiantes.length;

  const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
  const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

  const mejor = estudiantes.find(e => e.calificacion === calificacionMaxima);
  const peor = estudiantes.find(e => e.calificacion === calificacionMinima);

  document.getElementById("promedio").value = Number(promedio.toFixed(2));
  document.getElementById("mejor").value = mejor.nombre;
  document.getElementById("peor").value = peor.nombre;

  mostrarMensaje("", false);
}

document.getElementById("btnAgregar").addEventListener("click", agregarEstudiante);
document.getElementById("btnCalcular").addEventListener("click", calcular);