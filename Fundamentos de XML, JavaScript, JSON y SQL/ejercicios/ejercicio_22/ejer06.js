// EJERCICIO 6
// Dado un array de números de 5 celdas con los siguiente valores [1, 2, 3, 4, 5], 
// guardar los cuatro primeros valores de este array en otro array distinto pero con los valores invertidos, es decir, 
// que el segundo array deberá tener los valores [4, 3, 2, 1].

const invertirArray = (event) => {
    event.preventDefault();

    const numerosOriginales = [1, 2, 3, 4, 5];
    const numerosInvertidos = [];

    for (let i = 0; i < 4; i++) {
        numerosInvertidos[i] = numerosOriginales[3 - i];
    }
    const resultadoDiv = document.getElementById("invertArrayResult");
    resultadoDiv.textContent = `Array original: [${numerosOriginales.join(', ')}], Array invertido: [${numerosInvertidos.join(', ')}]`;
};

document.getElementById("invertArrayBtn").addEventListener("click", invertirArray);