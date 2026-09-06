// En una página solicita el nombre y dirección de un cliente. Crea un objeto cliente y guarda ahí esos dos datos. 
// También debes crear en el objeto cliente un método mostarDatos() que escriba en la página el nombre y 
// dirección guardados como elementos de una lista <ul>.
// Ejecuta dos veces el método mostrarDatos().


// Definimos el objeto cliente
    const cliente = {
      nombre: "",
      direccion: "",
      mostrarDatos: function() {
        const ul = document.createElement("ul");

        const liNombre = document.createElement("li");
        liNombre.textContent = "Nombre: " + this.nombre;

        const liDireccion = document.createElement("li");
        liDireccion.textContent = "Dirección: " + this.direccion;

        ul.appendChild(liNombre);
        ul.appendChild(liDireccion);

        document.getElementById("resultado").appendChild(ul);
      }
    };

    // Capturamos el formulario
    document.getElementById("clienteForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita recargar la página

      // Guardamos los datos en el objeto cliente
      cliente.nombre = document.getElementById("nombre").value;
      cliente.direccion = document.getElementById("direccion").value;

      // Ejecutamos dos veces el método mostrarDatos()
      cliente.mostrarDatos();
      cliente.mostrarDatos();
    });