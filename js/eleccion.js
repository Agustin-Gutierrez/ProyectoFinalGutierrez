// Obtener el nombre almacenado en localStorage
const datosAlmacenados  = localStorage.getItem('misDatos');

// Convertir el JSON a un objeto JavaScript
const datos = JSON.parse(datosAlmacenados);

const nombre = datos.nombre;
const correo = datos.correo;
const edad = datos.edad;
const talle = datos.talle;

// Verificar si el nombre está presente
if (nombre) {
  // Mostrar el nombre 
    document.getElementById('nombreUsuario').innerHTML = `<br><br>Hola,<b> ${nombre}!</b> Los pies de gato son un tipo de calzado especializado utilizado en la escalada en roca. Son zapatos ajustados y flexibles diseñados específicamente para proporcionar un mayor agarre y sensibilidad en la superficie de la roca. Es por esto que elegir el modelo correcto es tan importante.`;
} else {
  // Mostrar un mensaje predeterminado si el nombre no existe
    document.getElementById('nombreUsuario').textContent = `Hola! Los pies de gato son un tipo de calzado especializado utilizado en la escalada en roca. Son zapatos ajustados y flexibles diseñados específicamente para proporcionar un mayor agarre y sensibilidad en la superficie de la roca. Es por esto que elegir el modelo correcto es tan importante.`;
}


if (datos) {
    document.getElementById('datosUsuario').innerHTML = `Es necesario tener en cuenta ciertas características a la hora de escalar:<br><b>DATOS INGRESADOS:</b><br>Edad: <b> ${edad}</b><br>Talle: <b> ${talle}</b><br><br>El siguiente gráfico puede orientarte a la hora de elegir tu calzado ideal:`;

} else {
    document.getElementById('nombreUsuario').textContent = `ERROR EN LOS DATOS INGRESADOS :(`;
}


        // Clave de acceso a la API de Unsplash (regístrate en Unsplash para obtener tu propia clave)
        const accessKey = 'ZcM1165CQ4KrlABu-uvSaMX4qFbHj6ERNPm5IVDL21Y';

        // URL de la API de Unsplash para obtener imágenes de montañas
        const apiUrl = `https://api.unsplash.com/photos/random?query=mountain&client_id=${accessKey}`;

        // Obtener elementos del DOM
        const resultados = document.getElementById('resultados');
        const btnCargarImagen = document.getElementById('btnCargarImagen');

        // Función para cargar una imagen de montaña aleatoria
        function cargarImagenMontana() {
            // Realizar la solicitud a la API usando fetch
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Mostrar la imagen en la página
                    resultados.innerHTML = `<img src="${data.urls.regular}" alt="Montaña">`;
                })
                .catch(error => console.error('Error al obtener imagen de montaña:', error));
        }

        // Agregar evento de clic al botón
        btnCargarImagen.addEventListener('click', cargarImagenMontana);

        // Cargar la primera imagen al cargar la página
        cargarImagenMontana();