/*12. Calculadora simple:
Cree una calculadora que permita al usuario realizar operaciones básicas (suma, resta,
multiplicación, división) con dos números.*/

let numero1Input = prompt("Ingrese el primer número:");
let numero2Input = prompt("Ingrese el segundo número:");
let operacion = prompt("Ingrese la operación (+, -, *, /):");

let numero1 = parseFloat(numero1Input);
let numero2 = parseFloat(numero2Input);

let resultado;

switch (operacion) {
    case "mas":
        resultado = numero1 + numero2;
        break;
    case "menos":
        resultado = numero1 - numero2;
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("No se puede dividir por cero.");
            break;
        }
        break;
    default:
        console.log("Operacion no permitida");
        break;
}

if (resultado !== undefined) {
    console.log(`El resultado es: ${resultado}`);
}