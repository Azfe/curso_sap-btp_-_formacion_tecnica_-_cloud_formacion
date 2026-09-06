// EJERCICIO 7
// Crear un programa que permita al usuario elegir un candidato por el cual votar. 
// Las posibilidades son: candidato A por el partido rojo, candidato B por el partido verde, candidato C por el partido azul. 
// Según el candidato elegido (A, B ó C) se le debe imprimir el mensaje “Usted ha votado por el partido [color que corresponda al 
// candidato elegido]”. Si el usuario ingresa una opción que no corresponde a ninguno de los candidatos disponibles, indicar 
// “Opción errónea”.

// Función para manejar la votación
const regitrarVoto = (event) => {
    event.preventDefault();
    
    const miVoto = document.getElementById("miVoto").value.toUpperCase();
    console.log("Voto ingresado:", miVoto);
    const contenedor = document.getElementById("resultadoMiVoto");

    let mensaje = '';

    // Determinar el mensaje según el voto ingresado
    switch (miVoto) {
        case 'A':
            mensaje = "Usted ha votado por el partido rojo.";
            break;
        case 'B':
            mensaje = "Usted ha votado por el partido verde.";
            break;
        case 'C':
            mensaje = "Usted ha votado por el partido azul.";
            break;
        default:
            mensaje = "Opción errónea.";
    }

    // Mostrar el mensaje al usuario
    console.log(mensaje);
    contenedor.innerHTML = `<p>${mensaje}</p>`;
}

// Asociar la función al submit del formulario
document.getElementById("miVotoForm").addEventListener("submit", regitrarVoto);
