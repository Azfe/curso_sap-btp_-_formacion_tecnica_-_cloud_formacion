// EJERCICIO 1
// Solicita un número. Descompón el número en sus dígitos y muestra el resultado de la suma. 
// Por ejemplo, si escriben "361" el resultado de la suma es 3+6+1 = 10.

const verificarVocal = (event) => {
    event.preventDefault();

    const numeroIngresado = document.getElementById("num").value;
    console.log("Número ingresado:", numeroIngresado);

    const contenedor = document.getElementById("resultadoNumero");
    let mensaje = '';

    if (numeroIngresado.length === 0) {
        mensaje = "Por favor, ingrese un número válido.";
    } else {
        let suma = 0;

        for (let char of numeroIngresado) {
            suma += parseInt(char, 10);
        }
        mensaje = `La suma de los dígitos es: ${suma}`;
    }
    
    // Mostrar el mensaje al usuario
    console.log(mensaje);
    contenedor.innerHTML = `<p>${mensaje}</p>`;
}

// Asociar la función al evento submit del formulario
document.getElementById("checkNumberForm").addEventListener("submit", verificarVocal);