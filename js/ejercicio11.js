
function convertirKilometros() {

    let kilometro = document.getElementById("kilometros").value;

    let resultado = document.getElementById("millas");

    let mensaje = document.getElementById("mensaje");
    if (kilometro === "") {

        mensaje.textContent = " Ingresa un valor en kilómetros";

        resultado.value = "";

        return;
    }
    if (isNaN(kilometro)) {

        mensaje.textContent = "El valor ingresado debe ser numérico.";

        resultado.value = "";

        return;
    }
    let k = parseFloat(kilometro);

    let milla = k * 0.621371;

    resultado.value = milla.toFixed(5) + " millas";

    mensaje.textContent = "";

}