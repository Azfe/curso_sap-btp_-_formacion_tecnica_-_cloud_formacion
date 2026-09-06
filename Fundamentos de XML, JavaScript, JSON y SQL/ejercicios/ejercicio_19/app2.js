// Ejercicio 2:
// Solicita el nombre de una persona.
// Indica si el nombre comienza por una vocal (A E I O U).

const verificarNombre = (event) => {
    event.preventDefault();

    const nombre = document.getElementById("name").value.trim();
    const contenedor = document.getElementById("resultadoNombre");

    // Validación nombre no vacío
    if (!nombre) {
        contenedor.innerHTML = `<p>Introduce un nombre válido.</p>`;
        return;
    }

    const primeraLetra = nombre.charAt(0).toUpperCase();
    const esVocal = ['A', 'E', 'I', 'O', 'U'].includes(primeraLetra);
    const resultado = esVocal ? 'Sí' : 'No';

    // Crear el HTML dinámicamente
    let html = `
        <p>¿El nombre comienza por una vocal?: ${resultado}</p>
    `;

    // Solo se añade este párrafo si SÍ es vocal
    if (esVocal) {
        html += `<p>El nombre comienza por la vocal: ${primeraLetra}</p>`;
    }
 
    contenedor.innerHTML = html;
}

// Asociar la función al submit del formulario
document.getElementById("nameForm").addEventListener("submit", verificarNombre);