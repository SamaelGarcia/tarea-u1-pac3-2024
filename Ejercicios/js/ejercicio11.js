/*11. Verificación de un número primo:
Pida un número y verifique si es primo o no.*/

let numero = prompt("Ingrese un número para verificar si es primo:");

numero = prompt(numero);

let esPrimo = true;

if (numero <= 1) {

    esPrimo = false;

} else {
    for (let x = 2; x <= Math.sqrt(numero); x++) {
        if (numero % x === 0) {
            
            esPrimo = false;
            
            break;
        }
    }
}

if (esPrimo) {
    console.log("Es un número primo.");
} else {
    console.log("No es un número primo.");
}