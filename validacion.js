function validateForm() {
    event.preventDefault();

    var nombre = document.forms["form"]["nombre"];
    var email = document.forms["form"]["email"];
    var asunto = document.forms["form"]["asunto"];
    var mensaje = document.forms["form"]["mensaje"];

    var nombreError = document.getElementById("nombre-error");
    var emailError = document.getElementById("email-error");
    var asuntoError = document.getElementById("asunto-error");
    var mensajeError = document.getElementById("mensaje-error");

    nombreError.textContent = "";
    emailError.textContent = "";
    asuntoError.textContent = "";
    mensajeError.textContent = "";

    if (nombre.value === "") {
        nombreError.textContent = "Por favor, ingresa tu nombre";
        return false;
    }
    if (nombre.value.length < 4 || nombre.value.length > 50) {
        nombreError.textContent = "Nombre debe tener entre 4 y 50 caracteres";
        return false;
    }
    if (email.value === "") {
        emailError.textContent = "Por favor, ingresa tu correo electrónico";
        return false;
    }
    if (!isValidEmail(email.value)) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido (ejemplo@dominio.com)";
        return false;
    }
    if (asunto.value === "") {
        asuntoError.textContent = "Por favor, ingresa el asunto del mensaje";
        return false;
    }
    if (asunto.value.length > 50) {
        asuntoError.textContent = "Asunto debe tener entre 6 y 50 caracteres";
        return false;
    }
    if (mensaje.value === "") {
        mensajeError.textContent = "Por favor, ingresa tu mensaje";
        return false;
    }
    if (mensaje.value.length < 6 || mensaje.value.length > 300) {
        mensajeError.textContent = "El mensaje debe tener entre 6 y 300 caracteres";
        return false;
    }

    // Borrar los datos de los campos
    nombre.value = "";
    email.value = "";
    asunto.value = "";
    mensaje.value = "";
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}