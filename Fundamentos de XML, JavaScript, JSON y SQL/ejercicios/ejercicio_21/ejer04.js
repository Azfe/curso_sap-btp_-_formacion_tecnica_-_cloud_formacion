// EJERCICIO 4
// Dado un texto solicitado muéstralo invertido. Por ejemplo:  si se introduce "Hola Mundo", se debería mostrar "odnuM aloH".

const invertirTexto = (event) => {
    event.preventDefault();

    const texto = document.getElementById("textToBeReversed").value;
    const contenedor = document.getElementById("resultadoReversedText");    

    // Invertir el texto
    const textoInvertido = texto.split('').reverse().join('');
    contenedor.textContent = textoInvertido;

    console.log("Texto invertido:", textoInvertido);
}

// Asociar la función al evento de envío del formulario
document.getElementById("reversedTextForm").addEventListener("submit", invertirTexto);