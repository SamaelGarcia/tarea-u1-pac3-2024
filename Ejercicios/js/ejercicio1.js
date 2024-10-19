/*1. Suma de dos números:
Escriba un programa que solicite al usuario dos números y muestre la suma de los
mismos.*/

alert("Escriba dos numeros");
let numero1 = prompt("Ingrese el PRIMER numero: ");
let numero2 = prompt("Ingrese el SEGUNDO numero: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let suma = numero1 + numero2;

alert(`La suma de los dos numeros es: ${suma}`);

console.log(`La suma es: ${suma}`);
