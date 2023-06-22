function validateForm() {

    event.preventDefault();

    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;
//ddd
    var nombreError = document.getElementById("nombre-error");
    var emailError = document.getElementById("email-error");
    var asuntoError = document.getElementById("asunto-error");
    var mensajeError = document.getElementById("mensaje-error");

    nombreError.textContent = "";
    emailError.textContent = "";
    asuntoError.textContent = "";
    mensajeError.textContent = "";

    if (nombre === "") {
        nombreError.textContent = "Por favor, ingresa tu nombre";
        return false;
    }
    if (nombre.length > 50) {
        nombreError.textContent = "Nombre debe de tener  entre 6 y 50 carcateres";
        return false;
    }
    if (email === "") {
        emailError.textContent = "Por favor, ingresa tu correo electrónico";
        return false;
    }
    
    if (!isValidEmail(email)) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido (ejemplo@dominio.com)";
        return false;
    }
    if (asunto === "") {
        asuntoError.textContent = "Por favor, ingresa el asunto del mensaje";
        return false;
    }
    if (asunto > 50) {
        asuntoError.textContent = "Asunto debe de tener  entre 6 y 50 carcateres";
        return false;
    }
    if (mensaje === "") {
        mensajeError.textContent = "Por favor, ingresa tu mensaje";
        return false;
    }
    
    if (mensaje.length > 300) {
        mensajeError.textContent = "El mensaje debe tener entre 300 caracteres";
        return false;
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
