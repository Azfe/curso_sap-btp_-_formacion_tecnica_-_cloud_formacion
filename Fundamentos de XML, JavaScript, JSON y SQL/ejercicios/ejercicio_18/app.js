// Solicita dos números al usuario y guárdalos en variables de nombres n1 y n2. 
// A continuación calcula y muestra el resultado de las siguientes expresiones aritméticas: 

// Suma: n1 + n2

// Media: (n1 + n2) / 2

// El cuadrado del primer número: n1^2

// El resto de la división entre ambos: n1 % n2

// Si el primer número es mayor que el segundo y además
// ambos son mayores que cero

// Si el primero numero es negativo o si el segundo es positivo

const calcular = (event) => {
    event.preventDefault();

    const n1 = document.getElementById("num1").valueAsNumber;
    const n2 = document.getElementById("num2").valueAsNumber;

    const suma = n1 + n2;
    const media = (n1 + n2) / 2;
    const cuadradoN1 = Math.pow(n1, 2);
    const restoDivision = n1 % n2;
    const condicion1 = (n1 > n2) && (n1 > 0 && n2 > 0);
    const condicion2 = (n1 < 0) || (n2 > 0);

    const contenedor = document.getElementById("resultado");

    contenedor.innerHTML = `
        <ul>
            <li>Suma: ${suma}</li>
            <li>Media: ${media}</li>
            <li>Cuadrado del primer número: ${cuadradoN1}</li>
            <li>Resto de la división entre ambos: ${restoDivision}</li>
            <li>El primer número es mayor que el segundo y ambos son mayores que cero: ${condicion1}</li>
            <li>El primer número es negativo o el segundo es positivo: ${condicion2}</li>
        </ul>
    `;
}

// Asociar la función al submit del formulario
document.getElementById("numerosForm").addEventListener("submit", calcular);