// EJERCICIO 2
// Pide pida al usuario un número entero positivo y muestra en la página la cuenta atrás desde ese número hasta cero.

// Seleccionar el formulario y el contenedor de resultados

const cuentaAtras = (event) => {
    event.preventDefault();

    const num = parseInt(document.getElementById("numCountDown").value);

    const contenedor = document.getElementById("resultadoCountDown");    

    if (isNaN(num) || num < 0) {
        contenedor.textContent = "Por favor, ingrese un número entero positivo válido.";
        return;
    } 

    // Crear array con la cuenta atrás
    const cuenta = [];
    for (let i = num; i >= 0; i--) {
        cuenta.push(i);
    }

    console.log("Cuenta atrás:", cuenta);

    // Función para mostrar los números uno a uno
    const mostrarSecuencial = (numeros, index = 0) => {
        if (index >= numeros.length) return;

        contenedor.textContent = numeros[index];

        setTimeout(() => {
            mostrarSecuencial(numeros, index + 1);
        }, 1000);
    };

    mostrarSecuencial(cuenta);
}

// Asociar la función al evento de envío del formulario
document.getElementById("countDownForm").addEventListener("submit", cuentaAtras);