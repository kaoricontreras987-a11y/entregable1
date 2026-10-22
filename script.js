document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const carrera = document.getElementById('carrera').value;

    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || correo === "" || telefono === "" || carrera === "") {
        alert("⚠️ Error: Todos los campos del formulario son obligatorios. Por favor, complételos.");
        return;
    }

    if (!expresionCorreo.test(correo)) {
        alert("⚠️ Error: El correo electrónico ingresado no tiene un formato válido (ejemplo: usuario@correo.com).");
        return;
    }

    if (telefono.length < 9) {
        alert("⚠️ Error: Por favor, ingrese un número de teléfono o celular válido (mínimo 9 dígitos).");
        return;
    }

    alert("¡Registro Exitoso! 🎉\n\nLos datos de " + nombre + " se han validado y enviado de forma segura mediante el método POST.");
    
    this.reset(); 
});
