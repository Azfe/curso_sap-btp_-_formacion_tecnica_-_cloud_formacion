// EJERCICIO 1
// Obtener la persona con mayor edad de un conjunto de datos.

const comprobarPersonaConMayorEdad = (event) => {
    event.preventDefault();
    
    const personas = document.querySelectorAll("#listaPersonas li");
    const contenedor = document.getElementById("checkOlderPersonResult");

    let mensaje = '';

    if (personas.length === 0) {
        mensaje = "No hay personas en la lista.";
        contenedor.innerHTML = `<p>${mensaje}</p>`;
        return;
    }

    // Convertir <li> en array de objetos
    const arrayPersonas = [];

    personas.forEach(li => {
        const texto = li.textContent; 
        
        const matchNombre = texto.match(/Nombre:\s*([A-Za-zÁÉÍÓÚáéíóúñÑ]+)/); 
        const matchEdad = texto.match(/Edad:\s*(\d+)/);

        const nombre = matchNombre ? matchNombre[1] : null; 
        
        const edad = matchEdad ? parseInt(matchEdad[1]) : null;

        arrayPersonas.push({
            nombre: nombre.trim(),
            edad: parseInt(edad)            
        });

        console.log("Persona añadida:", { nombre: nombre.trim(), edad: parseInt(edad) });
    });

    // Resultado
    const resultado = obtenPersonaConMayorEdad(arrayPersonas);
    console.log(obtenPersonaConMayorEdad(arrayPersonas));
    console.log("Persona con mayor edad:", resultado);
    contenedor.innerHTML = `<p>La persona con mayor edad es: ${resultado}</p>`;
}

// Función para obtener la persona con mayor edad
function obtenPersonaConMayorEdad(datos) {
    let personaMayor = datos[0];

    for (let i = 1; i < datos.length; i++) {
        if (datos[i].edad > personaMayor.edad) {
            personaMayor = datos[i];
        }
    }
    return personaMayor.nombre;
}

// Asociar la función al evento de envío del formulario
document.getElementById("checkOlderPersonForm").addEventListener("submit", comprobarPersonaConMayorEdad);