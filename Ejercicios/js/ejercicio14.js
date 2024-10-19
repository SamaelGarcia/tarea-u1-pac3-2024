/*14. Comparación de cadenas:
Solicite dos cadenas de texto y compare si son iguales o diferentes*/

let cadena1 = prompt("Ingrese la primera cadena de texto:");
let cadena2 = prompt("Ingrese la segunda cadena de texto:");

cadena1 = cadena1.trim();
cadena2 = cadena2.trim(); 

if (cadena1 === cadena2) {
    console.log("Las cadenas son iguales.");
} else {
    console.log("Las cadenas son diferentes.");
}