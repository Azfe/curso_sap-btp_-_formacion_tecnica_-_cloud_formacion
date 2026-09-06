// EJERCICIO 5
// Pide un numero y después comprueba si es capicúa, es decir, que se lee igual sin importar la dirección. 
// Por ejemplo, si introducimos 30303 es capicúa, si introducimos 30430 no es capicúa. 
// Piensa como puedes dar la vuelta al número usando arrays.

const comprobarCapicua = (event) => {
    event.preventDefault();

    const numeroInput = document.getElementById("numCapicuaInput").value;
    const numeroReverso = numeroInput.split('').reverse().join('');
    const resultadoDiv = document.getElementById("numCapicuaResult");

    if (numeroInput === numeroReverso) {
        resultadoDiv.textContent = `El número ${numeroInput} es capicúa.`;
    } else {
        resultadoDiv.textContent = `El número ${numeroInput} no es capicúa.`;
    }
};

document.getElementById("numCapicuaBtn").addEventListener("click", comprobarCapicua);