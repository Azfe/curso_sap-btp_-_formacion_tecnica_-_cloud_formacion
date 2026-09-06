// EJERCICIO 5
// Solicitar un número entero e imprimir su valor absoluto. Nota: para los números positivos su valor absoluto es 
// igual al número (el valor absoluto de 52 es 52), mientras que, para los negativos, su valor absoluto es el número 
// multiplicado por -1 (el valor absoluto de -52 es 52).

// Función para obtener el valor absoluto de un número entero
function obtenerValorAbsoluto(num) {
    if (num < 0) {
        return num * -1;
    } else {
        return num;
    }
}

// Manejar el evento de envío del formulario
document.getElementById('numEnteroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numEntero = parseInt(document.getElementById('numEntero').value);
    const valorAbsoluto = obtenerValorAbsoluto(numEntero);

    document.getElementById('resultadoNumEntero').innerText = `El valor absoluto de ${numEntero} es ${valorAbsoluto}.`;
});