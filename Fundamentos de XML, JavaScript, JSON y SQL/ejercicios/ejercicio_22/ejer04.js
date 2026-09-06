// EJERCICIO 4
// Crea un array con 4 nombres, y otro array con notas de examen. Cada nota se corresponde con cada nombre si están en la misma posición.
// Pide un nombre y si existen en el array de nombres muestra su nota.
// Haz el mismo ejercicio pero usando un único diccionario en vez de dos arrays.

const nombres = ["Ana", "Luis", "María", "Carlos"];
const notas = [8.5, 7.0, 9.2, 6.8];

const mostrarNota = (event) => {
    event.preventDefault();

    const nombreInput = document.getElementById("studentNameInput").value;
    const indiceInput = nombres.indexOf(nombreInput);   
    const resultadoDiv = document.getElementById("examNoteResult");

    if (indiceInput !== -1) {
        resultadoDiv.textContent = `La nota de ${nombreInput} es ${notas[indiceInput]}.`;
    } else {
        resultadoDiv.textContent = `El nombre ${nombreInput} no se encuentra en la lista.`;
    }
};

document.getElementById("queryNoteBtn").addEventListener("click", mostrarNota);