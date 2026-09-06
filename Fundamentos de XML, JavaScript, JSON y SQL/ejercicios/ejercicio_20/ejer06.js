// EJERCICIO 6
// Solicitar al usuario que ingrese los nombres de dos personas, los cuales se almacenarán en dos variables. 
// A continuación, imprimir “coincidencia” si los nombres de ambas personas comienzan con la misma letra ó si terminan con la misma letra. 
// Si no es así, imprimir “no hay coincidencia”.

// Función para verificar coincidencia entre los nombres
const verificarCoincidencia = (event) => {
    event.preventDefault();

    const namePerson1 = document.getElementById("namePerson1").value;
    const namePerson2 = document.getElementById("namePerson2").value;
    console.log("Nombre de la primera persona:", namePerson1);
    console.log("Nombre de la segunda persona:", namePerson2);

    const contenedor = document.getElementById("resultadoCoincidencia");
    let mensaje = '';

    if (namePerson1.length === 0 || namePerson2.length === 0) {
        mensaje = "Por favor, ingrese ambos nombres.";
    } else {
        const primeraLetra1 = namePerson1.charAt(0).toLowerCase();
        const primeraLetra2 = namePerson2.charAt(0).toLowerCase();
        const ultimaLetra1 = namePerson1.charAt(namePerson1.length - 1).toLowerCase();
        const ultimaLetra2 = namePerson2.charAt(namePerson2.length - 1).toLowerCase();

        if (primeraLetra1 === primeraLetra2 && ultimaLetra1 === ultimaLetra2) {
            mensaje = "Coincidencia.";
        } else {
            mensaje = "No hay coincidencia.";
        }
    }

    // Mostrar el mensaje al usuario
    console.log(mensaje);
    contenedor.innerHTML = `<p>${mensaje}</p>`;
}

// Asociar la función al evento de cambio en los campos de entrada
document.getElementById("namePerson1").addEventListener("input", verificarCoincidencia);
document.getElementById("namePerson2").addEventListener("input", verificarCoincidencia);