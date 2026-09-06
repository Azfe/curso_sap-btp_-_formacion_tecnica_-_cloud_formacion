// Ejercicio 3

// Función constructora Documento que permita crear objetos que representen documentos
function Documento(nombre = "") {
    this.nombre = nombre;
    this.articulos = [];
    this.fechaPublicacion = new Date();

    this.agregarAlPrincipio = function (texto) {
        this.articulos.unshift(texto);
    };

    this.agregarAlFinal = function (texto) {
        this.articulos.push(texto);
    };

    this.eliminarArticulo = function (indice) {
        if (indice >= 0 && indice < this.articulos.length) {
            this.articulos.splice(indice, 1);
            return true;
        } else {
            console.log(`La posición ${posicion} no existe. El documento tiene ${this.articulos.length} artículos.`);
            return false;
        }
    };

    this.getLength = function () {
        return this.articulos.length;
    };
}

// Almacenar el documento actual
let documentoActual = null;

// Función para mostrar mensajes
function mostrarMensaje(tipo, mensaje) {
    const errorDiv = document.getElementById("errorMessage");
    const successDiv = document.getElementById("successMessage");

    // Limpiar mensajes anteriores
    errorDiv.textContent = "";
    successDiv.textContent = "";

    if (tipo === "error") {
        errorDiv.textContent = mensaje;
        setTimeout(() => { errorDiv.textContent = ""; }, 3000);
    } else {
        successDiv.textContent = mensaje;
        setTimeout(() => { successDiv.textContent = ""; }, 3000);
    }
}

// Función para actualizar la visualización del documento
function actualizarVisualizacionDocumento() {
    const contenedor = document.getElementById("documentDisplay");

    if (!documentoActual) {
        contenedor.innerHTML = "<p>No hay ningún documento creado.</p>";
        return;
    }

    let html = `
        <h3>Documento: ${documentoActual.nombre}</h3>
        <p><small>Fecha de publicación: ${documentoActual.fechaPublicacion.toLocaleString()}</small></p>
        <p><strong>Total de artículos: ${documentoActual.getLength()}</strong></p>    
    `;

    if (documentoActual.getLength() === 0) {
        html += "<p>El documento no contiene artículos.</p>";
    } else {
        html += "<ul>";
        documentoActual.articulos.forEach((articulo, index) => {
            html += `<li>${index}: ${articulo}</li>`;
        });
        html += "</ul>";
    }

    contenedor.innerHTML = html;
}

// Manejar la creación de un nuevo documento
document.getElementById("AddNewDocumentBtn").addEventListener("click", (event) => {
    event.preventDefault();

    const inputNombreDoc = document.getElementById("nombreDocumento");
    const nombreDoc = inputNombreDoc.value.trim();

    if (!nombreDoc) {
        mostrarMensaje("error", "El nombre del documento no puede estar vacío.");
        return;
    }

    documentoActual = new Documento(nombreDoc);

    inputNombreDoc.value = "";

    mostrarMensaje("success", `Documento "${nombreDoc}" creado correctamente.`);
    actualizarVisualizacionDocumento();

    console.log("Documento creado:", documentoActual);
});

// Manejar la creación de un nuevo artículo
document.getElementById("AddNewArticleBtn").addEventListener("click", (event) => {
    event.preventDefault();

    if (!documentoActual) {
        mostrarMensaje("error", "Primero debes crear un documento.");
        return;
    }

    const nombreArticulo = document.getElementById("nameArticle").value.trim();
    const textoArticulo = document.getElementById("textContentArticle").value.trim();
    const posicion = document.getElementById("posicionArticulo").value;

    if (!textoArticulo) {
        mostrarMensaje("error", "El texto del artículo no puede estar vacío.");
        return;
    }

    const articuloCompleto = nombreArticulo ? `${nombreArticulo}: ${textoArticulo}` : textoArticulo;

    if (posicion === "addToBeginning") {
        documentoActual.agregarAlPrincipio(articuloCompleto);
    } else {
        documentoActual.agregarAlFinal(articuloCompleto);
    }

    // Limpiar los campos del formulario
    document.getElementById("nameArticle").value = "";
    document.getElementById("textContentArticle").value = "";

    mostrarMensaje("success", "Artículo añadido correctamente.");
    actualizarVisualizacionDocumento();

    console.log("Artículo añadido:", articuloCompleto);

});

// Manejar la eliminación de un artículo
document.getElementById("deleteArticleBtn").addEventListener("click", (event) => {
    event.preventDefault();

    if (!documentoActual) {
        mostrarMensaje("error", "Primero debes crear un documento.");
        return;
    }

    const indiceStr = document.getElementById("articlePosition").value.trim();
    const indice = parseInt(indiceStr, 10);

    if (isNaN(indice)) {
        mostrarMensaje("error", "El índice debe ser un número válido.");
        return;
    }

    if (documentoActual.eliminarArticulo(indice)) {
        mostrarMensaje("success", `Artículo en la posición ${indice} eliminado correctamente.`);
        actualizarVisualizacionDocumento();
        console.log(`Artículo en la posición ${indice} eliminado.`);
    } else {        
        mostrarMensaje("error", `La posición ${indice} no existe. El documento tiene ${documentoActual.getLength()} artículos.`);                
    }
});

// Código de prueba inicial
const doc = new Documento("DocumentoTest");
doc.agregarAlFinal("Artículo 1");
doc.agregarAlPrincipio("Artículo 0");
doc.agregarAlFinal("Artículo 2");
doc.agregarAlFinal("Artículo 3");
console.log(doc.articulos);

console.log("Cantidad de artículos:", doc.getLength());

doc.eliminarArticulo(1);
console.log(doc.articulos);

console.log("Cantidad de artículos:", doc.getLength());