const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire('Error', 'Ingresa solo números válidos', 'error');
        return;
    }

    let valor;

    if (operacion === 'suma') valor = sumar(num1, num2);
    if (operacion === 'resta') valor = restar(num1, num2);
    if (operacion === 'multiplicacion') valor = multiplicar(num1, num2);
    if (operacion === 'division') valor = dividir(num1, num2);

    if (valor === 'Error: División por cero') {
        Swal.fire('Error', 'No se puede dividir entre cero', 'error');
        return;
    }

    resultado.value = valor;
};