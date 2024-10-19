/*8. Cálculo del promedio:
Solicite tres números y calcule su promedio.*/

let numero1 = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
let numero3 = prompt("Ingrese el tercer numero");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);

let promedio = (numero1 +  numero2 + numero3)/3;

alert(`El promedio es igual a: ${promedio}`);
console.log(`Promedio de 3 calificaiones: ${promedio}`);
