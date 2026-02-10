// Solicitar la edad del usuario
let edad = prompt("¿Cuál es tu edad?");

// Comprobar si el usuario ha ingresado un valor válido
if (edad !== null && !isNaN(edad) && edad.trim() !== "") {
    // Si es válido, mostrar la edad en la consola o con un alert
    alert("Tu edad es " + edad + " años.");
} else {
    // Si no es válido, mostrar un mensaje de error
    alert("Por favor, ingresa una edad válida.");
}