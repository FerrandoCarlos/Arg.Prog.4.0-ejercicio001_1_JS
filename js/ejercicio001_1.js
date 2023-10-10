/*Dadas las variables nombre y apellido validar y mostrar la respuesta en consola. Las condiciones son
   * Cada una de las variables debe tener 3 caracteres o más.
   * Si ambas variables cumplen la consigna mostrar el nombre y el apellido y un mensaje de éxito en consola.
   * Si una o ambas variables no cumplen con el requisito indicar en un cartel el error (y cuál es la variable que no cumple o si son ambas)*/
let val = document.getElementById("validation");
function validar() {
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("surname").value;

    if (nombre.length < 3 || apellido.length < 3) {
        if (nombre.length < 3 && apellido.length < 3) {
            val.innerHTML = '<strong><i class="fa-solid fa-triangle-exclamation error"></i> Nombre: ' + nombre + ' y Apellido: ' + apellido + ' NO son válidos</strong>';
        } else if (nombre.length < 3) {
            val.innerHTML = '<strong><i class="fa-solid fa-triangle-exclamation error"></i> Nombre: ' + nombre + ' NO es válido</strong>';
        } else {
            val.innerHTML = '<strong><i class="fa-solid fa-triangle-exclamation error"></i> Apellido: ' + apellido + ' NO es válido</strong>';
        }
    } else {
        val.innerHTML = '<strong><i class="fa-solid fa-square-check exito"></i> Nombre: ' + nombre + '\n Apellido: ' + apellido + '\n son válidos</strong>';
    }
}
