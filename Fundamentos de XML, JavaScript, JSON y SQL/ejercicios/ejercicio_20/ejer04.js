// EJERCICIO 4
// Solicita al usuario que ingrese un día de la semana (como un número entre 1 y 7) e imprimir un mensaje indicando si es lunes, 
// martes, miércoles, etc. Si el día ingresado no es ninguno de esos, imprimir un mensaje de error.

const obtenerDiaSemana = (event) => {
    event.preventDefault();

    const diaNumero = parseInt(document.getElementById("diaNumero").value);
    const contenedor = document.getElementById("resultadoDiaSemana");   

    let mensaje = '';

    switch (diaNumero) {
        case 1:
            mensaje = 'Lunes';
            break;
        case 2:
            mensaje = 'Martes';
            break;
        case 3:
            mensaje = 'Miércoles';
            break;
        case 4:
            mensaje = 'Jueves';
            break;
        case 5:
            mensaje = 'Viernes';
            break;
        case 6:
            mensaje = 'Sábado';
            break;
        case 7:
            mensaje = 'Domingo';
            break;
        default:
            mensaje = 'Error: El número ingresado no corresponde a un día de la semana.';
            break;
    }
    contenedor.innerHTML = `<p>${mensaje}</p>`;
}

// Asociar la función al submit del formulario
document.getElementById("diaSemanaForm").addEventListener("submit", obtenerDiaSemana);