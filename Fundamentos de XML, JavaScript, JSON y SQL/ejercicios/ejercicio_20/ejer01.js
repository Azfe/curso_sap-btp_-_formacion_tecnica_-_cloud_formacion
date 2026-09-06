// EJERCICIO 1
// Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
// En caso afirmativo el usuario responderá si
// En caso contrario responderá no.
// Si el usuario responde sí se escribirá por el documento «irás a la cárcel».
// Si el usuario responde no se escribirá por el documento «irás a casa».
// En cualquier caso, en el documento web se escribirá «la documentación por favor».

const verificarCulpabilidad = (event) => {
    event.preventDefault();

    const respuesta = document.getElementById("guilty").value.trim().toLowerCase();
    console.log(respuesta);
    const contenedor = document.getElementById("resultado");
    let mensaje = '';

    if (respuesta === 'si') {
        mensaje += `<p>Irás a la cárcel.</p>`;
    } else if (respuesta === 'no') {
        mensaje += `<p>Irás a casa.</p>`;
    }
    mensaje += `<p>La documentación por favor.</p>`;

    contenedor.innerHTML = mensaje;
}

// Asociar la función al submit del formulario
document.getElementById("guiltyForm").addEventListener("submit", verificarCulpabilidad);