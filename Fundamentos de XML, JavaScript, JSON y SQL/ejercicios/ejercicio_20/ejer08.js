// EJERCICIO 8
// Escribir un programa que solicite al usuario una letra y, si es una vocal, muestre el mensaje “es vocal”. 
// Se debe validar que el usuario ingrese sólo un carácter. Si ingresa un string de más de un carácter, 
// informarle que no se puede procesar el dato.

// Función para verificar si la letra es vocal
const verificarVocal = (event) => {
    event.preventDefault();

    const letraIngresada = document.getElementById("letra").value;
    console.log("Letra ingresada:", letraIngresada);

    const contenedor = document.getElementById("resultadoLetra");
    let mensaje = '';

    if (letraIngresada.length !== 1) {
        mensaje = "No se puede procesar el dato. Por favor, ingrese sólo un carácter.";
    } else {
        const letra = letraIngresada.toLowerCase();
        if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
            mensaje = "Es vocal.";
        } else {
            mensaje = "No es vocal.";
        }  
    }

    // Mostrar el mensaje al usuario
    console.log(mensaje);
    contenedor.innerHTML = `<p>${mensaje}</p>`;
}

// Asociar la función al submit del formulario
document.getElementById("checkVowelForm").addEventListener("submit", verificarVocal);