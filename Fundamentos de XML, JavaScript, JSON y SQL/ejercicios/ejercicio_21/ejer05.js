// EJERCICIO 5
// Pregunta al usuario una cantidad a invertir, el interés anual y el número de años, 
// y muestra el capital obtenido en la inversión de cada año que dura la inversión.

const calcularInversion = (event) => {
    event.preventDefault();

    const cantidad = parseFloat(document.getElementById("cantidadInversion").value);
    const interesAnual = parseFloat(document.getElementById("interesAnual").value) / 100;
    const numAnios = parseInt(document.getElementById("numAniosInversion").value);
    const contenedor = document.getElementById("resultadoCalcularInversion");

    if (isNaN(cantidad) || isNaN(interesAnual) || isNaN(numAnios) || cantidad <= 0 || interesAnual < 0 || numAnios <= 0) {
        contenedor.textContent = "Por favor, ingrese valores válidos para todos los campos.";
        return;
    }
    let resultado = `Año 0: ${cantidad.toFixed(2)}<br/>`;
    let capital = cantidad;

    for (let i = 1; i <= numAnios; i++) {
        capital += capital * interesAnual;
        resultado += `Año ${i}: ${capital.toFixed(2)}<br/>`;
    }
    contenedor.innerHTML = resultado;
    console.log("Resultado de la inversión:\n", resultado.replace(/<br\/>/g, '\n'));
}
// Asociar la función al evento de envío del formulario
document.getElementById("calcularInversiontForm").addEventListener("submit", calcularInversion);