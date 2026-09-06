// EJERCICIO 3
// Un usuario nació en el año 1980. Escribe en la página los años desde 1980 hasta el actual indicando qué edad tenía en cada año, 
// considerando que en 1980 ya tiene 1 año de edad.

const mostrarEdades = () => {
    const contenedor = document.getElementById("resultadoAnyoEdad");
    const anioNacimiento = 1980;
    const anioActual = new Date().getFullYear();
    let resultado = "";

    for (let anio = anioNacimiento; anio <= anioActual; anio++) {
        const edad = anio - anioNacimiento + 1;        
        resultado += `En el año ${anio}, tenía ${edad} año${edad > 1 ? 's' : ''}.<br>`;
    }

    contenedor.innerHTML = resultado;
}

// Llamar a la función para mostrar los resultados al cargar la página
document.addEventListener("DOMContentLoaded", mostrarEdades);