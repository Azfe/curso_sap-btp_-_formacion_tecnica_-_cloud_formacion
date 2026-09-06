// EJERCICIO 7
// Se quiere implementar un juego de números para probar la memoria del usuario.
// Crea un array numeros que contengan los números del 1 al 20.
// Pide números al usuario de uno en uno. Si el número está dentro del array números, el usuario podrá continuar jugando y 
// si no está se acabará y el usuario perderá. Cada número acertado debe ser eliminado del array numeros hasta que quede vacío.
// Si el usuario consigue vaciar el array habrá ganado.

    let numeros = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];

const jugarAdivinarNumeros = (event) => {
    event.preventDefault();

    const resultadoDiv = document.getElementById("memoryGameResult");
    const numUserInput = document.getElementById("guessNumberInput").value;
    const numeroUsuario = parseInt(numUserInput);

    console.log("Números:", numeros);

    console.log(numUserInput);
    console.log(typeof numUserInput);
    console.log(numeroUsuario);
    console.log(typeof numeroUsuario);

    while (numeros.length > 0) {        
        if (numeros.includes(numeroUsuario)) {
            numeros = numeros.filter(num => num !== numeroUsuario); // eliminar el número acertado
            alert(`¡Correcto! Te quedan ${numeros.length} números por adivinar.`);
            return;
        } else {
            resultadoDiv.textContent = `¡Has perdido! El número ${numeroUsuario} no está en la lista.`;
            return;
        }
        // Limpiar input para siguiente entrada 
        document.getElementById("numIndexForm").reset();
    }

    // Limpiar input para siguiente entrada 
    document.getElementById("numIndexForm").reset();

    resultadoDiv.textContent = "¡Felicidades! ¡Has ganado al adivinar todos los números!";
};

document.getElementById("guessNumberForm").addEventListener("submit", jugarAdivinarNumeros);