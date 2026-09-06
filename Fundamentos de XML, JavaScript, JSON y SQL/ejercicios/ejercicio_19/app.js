// Ejercicio 1:
// Solicita tres números al usuario y guárdalos en variables de nombres n1,  n2 y n3.
// A continuación calcula y muestra el resultado de las siguientes expresiones aritméticas:
// Si todos los números son mayores o iguales que cero.
// Si la suma de los dos primeros números es menor que el tercero.
// El valor medio entre los tres como un número entero.
// En una única expresión, la suma de los valores decrementados de cada número.

const calcular = (event) => {
    event.preventDefault();

    const n1 = document.getElementById("num1").valueAsNumber;
    const n2 = document.getElementById("num2").valueAsNumber;
    const n3 = document.getElementById("num3").valueAsNumber;

    const numerosMayoresIgualCero = (n1 >= 0) && (n2 >= 0) && (n3 >= 0);
    const suma = n1 + n2;
    const sumaMenorTercero = suma < n3;
    const mediaNumeroEntero = Math.floor((n1 + n2 + n3) / 3);
    const sumaDecrementados = (n1 - 1) + (n2 - 1) + (n3 - 1);

    const toSiNo = (condicion) => condicion ? 'Sí' : 'No';

    const StrResultado = toSiNo(numerosMayoresIgualCero);
    const StrSumaMenorTercero = toSiNo(sumaMenorTercero);

    const contenedor = document.getElementById("resultado");

    contenedor.innerHTML = `
        <ul>
            <li>¿Números son mayores o igual a cero?: ${StrResultado}</li>
            <li>¿Suma de los dos primeros números es menor que el tercero?: ${StrSumaMenorTercero}</li>
            <li>El valor medio entre los tres como un número entero: ${mediaNumeroEntero}</li>
            <li>Suma de los valores decrementados de cada número: ${sumaDecrementados}</li>
        </ul>
    `;
}

// Asociar la función al submit del formulario
document.getElementById("numerosForm").addEventListener("submit", calcular);