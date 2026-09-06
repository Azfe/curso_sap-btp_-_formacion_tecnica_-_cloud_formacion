// EJERCICIO 2
// Solicita un número entero. A continuación muestra un mensaje indicando si es par, impar o cero usando una única instrucción.

const verificarParImparCero = (event) => {
    event.preventDefault();

    const numero = document.getElementById("number").valueAsNumber;
    const contenedor = document.getElementById("resultadoNumero");
    let mensaje = '';

    mensaje += `<p>El número introducido es: ${numero}. Es `;
    mensaje += (numero === 0) ? 'cero.' : (numero % 2 === 0) ? 'par.' : 'impar.';
    mensaje += `</p>`;
    contenedor.innerHTML = mensaje;
}

// Asociar la función al submit del formulario
document.getElementById("numForm").addEventListener("submit", verificarParImparCero);
