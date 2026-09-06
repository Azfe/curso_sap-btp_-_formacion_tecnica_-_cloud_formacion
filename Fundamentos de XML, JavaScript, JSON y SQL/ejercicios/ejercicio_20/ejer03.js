// EJERCICIO 3
// Escribe un programa que responda a un usuario que quiere comprar un helado cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 1.90€.
// El topping de oreo cuesta 1€.
// El topping de KitKat cuesta 1.50€.
// El topping de brownie cuesta 0.75€.
// El topping de lacasitos cuesta 0.95€.
// En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos.» 
// y a continuación informar del precio del helado sin ningún topping.
// Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).

const calcularPrecioHelado = (event) => {
    event.preventDefault();

    const helado = document.getElementById("helado").value;
    const topping = document.getElementById("topping").value.toLowerCase();
    const contenedor = document.getElementById("resultadoHelado");
    
    let precioTotal = helado;
    precioTotal = Number(precioTotal);

    let mensaje = '';

    switch (topping) {
        case 'oreo':
            console.log(precioTotal += 1.00);
            precioTotal += 1.00;
            break;
        case 'kitkat':
            precioTotal += 1.50;
            break;
        case 'brownie':
            precioTotal += 0.75;
            break;
        case 'lacasitos':
            precioTotal += 0.95;
            break;
        case '':
            // Sin topping adicional
            break;
        default:
            mensaje += `<p>No tenemos este topping, lo sentimos. El precio del helado sin ningún topping es ${precioBase.toFixed(2)}€.</p>`;
            break;
    }
    
    mensaje += `<p>El precio total del helado${topping ? ' con topping de ' + topping : ''} es ${precioTotal.toFixed(2)}€.</p>`;
    contenedor.innerHTML = mensaje;
}

// Asociar la función al submit del formulario
document.getElementById("icecreamForm").addEventListener("submit", calcularPrecioHelado);