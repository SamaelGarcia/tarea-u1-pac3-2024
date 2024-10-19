/*Verificación de contraseña:
Pida al usuario que ingrese una contraseña y verifique si coincide con una contraseña
predefinida.*/

let contraseña = "13212003";
let contraseña_usuario = prompt("Ingrese la contraseña:");

contraseña_usuario =contraseña_usuario.trim();

if (contraseña_usuario === contraseña) {
    console.log("La contraseña es correcta.");
} else {
    console.log("La contraseña es incorrecta!");
}