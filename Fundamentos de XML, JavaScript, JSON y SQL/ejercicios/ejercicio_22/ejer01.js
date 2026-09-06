// EJERCICIO 1
// Solicita 5 números y guárdalos en un array. Después muestra en la página cuál fue el primer y el último número.

const verificarNumeros = (event) => {
    event.preventDefault();

    const numeros = [];

    numeros.push(parseFloat(document.getElementById("num1").value));
    numeros.push(parseFloat(document.getElementById("num2").value));
    numeros.push(parseFloat(document.getElementById("num3").value));
    numeros.push(parseFloat(document.getElementById("num4").value));
    numeros.push(parseFloat(document.getElementById("num5").value));

    console.log("Números ingresados:", numeros);

    const primerNumero = numeros[0];
    const ultimoNumero = numeros[numeros.length - 1];

    const contenedor = document.getElementById("resultadoNumeros");
    let mensaje = '';

    if (numeros.length === 0) {
        mensaje = "Por favor, ingrese números válidos.";
    } else {
        mensaje = `El primer número es: ${primerNumero} <br> El último número es: ${ultimoNumero}`;
    }

    // Mostrar el mensaje al usuario
    console.log(mensaje);
    contenedor.innerHTML = `<p>${mensaje}</p>`;
}
// Asociar la función al evento submit del formulario
document.getElementById("checkNumbersForm").addEventListener("submit", verificarNumeros);