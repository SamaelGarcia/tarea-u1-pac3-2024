/*6. Concatenación de cadenas:
Capture de forma separada los 2 nombres y los dos apellidos de una persona y luego
almacene en una variable los valores por medio de una concatenación y muéstrelo en la
consola*/

let primer_nombre = prompt("Ingrese su primer nombre");
let segundo_nombre = prompt("Ingrese su segundo nombre");


let primer_apellido = prompt("Ingrese su primer nombre");
let segundo_apellido = prompt("Ingrese su primer nombre");

let nombre_completo = primer_nombre + " " + segundo_nombre + " " + primer_apellido + " " + segundo_apellido;

alert(`Nombre completo: ${nombre_completo}`);

console.log(`Nombre completo: ${nombre_completo}`);
