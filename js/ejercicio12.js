function convertirPesos() {
    let pesos = document.getElementById("pesos").value;
    let resultado = document.getElementById("dolares");
    let mensaje = document.getElementById("mensaje");

    if (pesos === "") {
        mensaje.textContent = "Por favor ingresa un valor en pesos mexicanos";
        resultado.value = "";
        return;
    }

    if (isNaN(pesos)) {
        mensaje.textContent = "Ingresa pesos mexicanos";
        resultado.value = "";
        return;
    }
    let p = parseFloat(pesos);
    let dolares = p / 18;
    resultado.value = dolares.toFixed(3) + " dolares";
    mensaje.textContent = "";
}