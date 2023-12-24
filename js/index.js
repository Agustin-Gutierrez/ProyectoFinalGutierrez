// Obtener elementos del formulario y botones
const formulario = document.getElementById('login-form');
const btnGuardar = document.getElementById('btnCargarDatos');
const btnRedireccionar = document.getElementById('btnContinuar');

// Agregar evento de clic al botón de guardar
btnGuardar.addEventListener('click', function() {
    // Validar el formulario
    if (formulario.checkValidity()) {
        // Simulación de almacenamiento de datos (puedes ajustar esto)
        const datos = {
            nombre: document.getElementById('username').value,
            correo: document.getElementById('email').value,
            edad: document.getElementById('age').value,
            talle: document.getElementById('shoeSize').value,
        };

        // Guardar los datos en localStorage (o donde prefieras)
        localStorage.setItem('misDatos', JSON.stringify(datos));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos almacenados correctamente.",
            showConfirmButton: false,
            timer: 1500
        });
        // Habilitar el botón de redireccionar
        btnRedireccionar.removeAttribute('disabled');
    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Por favor, complete todos los campos antes de enviar el formulario.",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

// Agregar evento de clic al botón de redireccionar
btnRedireccionar.addEventListener('click', function() {
    // Redireccionar a otra página (puedes ajustar esto)
    window.location.href = '..//ProyectoFinalGutierrez/pages/eleccion.html';
});


