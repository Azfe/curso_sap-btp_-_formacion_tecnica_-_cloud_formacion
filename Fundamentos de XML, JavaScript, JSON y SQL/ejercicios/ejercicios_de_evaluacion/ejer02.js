// Ejercicio 2

const incrementarNumero = (event) => {
    event.preventDefault();

    const contenedor = document.getElementById("incrementar");
    let numeroActual = parseInt(contenedor.textContent);
    numeroActual += 1;
    contenedor.textContent = numeroActual;
}

document.getElementById("incrementar").addEventListener("click", incrementarNumero);