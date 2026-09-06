// EJERCICIO 2
// Crea un array de caracteres que contenga de la ‘A’ a la ‘Z’ (solo las mayúsculas). 
// Después, ve pidiendo posiciones del array y si la posición es correcta, se añadirá a una cadena que se mostrara al final. 
// Se dejará de insertar cuando se introduzca un -1.

let cadenaResultante = "";

const crearCadena = (event) => {
    event.preventDefault();

    // Crear array de caracteres de la 'A' a la 'Z'
    const caracteres = [];
    for (let i = 65; i <= 90; i++) {
        caracteres.push(String.fromCharCode(i));
    }    

    const numIndex = parseInt(document.getElementById("numIndex").value);
    const contenedor = document.getElementById("resultadoCadena");
    
    // Caso de salida
    if (numIndex === -1) { 
        contenedor.textContent = "Cadena final: " + cadenaResultante; 
        return; 
    } 
    
    // Validaciones 
    if (isNaN(numIndex) || numIndex < 0) { 
        contenedor.textContent = "Por favor, ingrese un número entero positivo válido."; 
        return; 
    }

    if (numIndex >= caracteres.length) { 
        contenedor.textContent = "Posición fuera de rango. Intente nuevamente."; 
        return; 
    }

    // Agregar el carácter y mostrar cadena acumulada 
    cadenaResultante += caracteres[numIndex]; 
    contenedor.textContent = "Cadena actual: " + cadenaResultante; 
    
    // Limpiar input para siguiente entrada 
    document.getElementById("numIndexForm").reset();
};

// Asociar la función al evento de envío del formulario
document.getElementById("numIndexForm").addEventListener("submit", crearCadena);