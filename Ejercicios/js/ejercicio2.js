/*2. Resta de dos números:
Cree un programa que pida dos números y muestre la resta del primero menos el
segundo.*/

alert("Ingrese dos numeros");
let numero1 = prompt("Ingrese el PRIMER numero: ");
let numero2 = prompt("Ingrese el SEGUNDO numero: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let resta = numero1 - numero2;

alert(`La resta del PRIMER numero menos (-) el SEGUNDO es igual a: ${resta}`);

console.log(`Le resta es igual a: ${resta}`);

