// EJERCICIO 3
// Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres. Después muestra cuántas vocales había.

const contarVocales = (event) => {
    event.preventDefault();

    const frase = document.getElementById("phraseInput").value;
    const caracteres = frase.split('');

    let contadorVocales = 0;
    const vocales = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    caracteres.forEach(char => {
        if (vocales.includes(char)) {
            contadorVocales++;
        }
    });

    const contenedorResultado = document.getElementById("vowelCountResult");
    contenedorResultado.textContent = `La frase tiene ${contadorVocales} vocales.`;
}
// Asociar la función al evento de envío del formulario
document.getElementById("analyzePhraseForm").addEventListener("submit", contarVocales);