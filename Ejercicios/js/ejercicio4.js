/*4. Área de un triángulo:
Pida la base y la altura de un triángulo y calcula su área.*/

alert("Calculo del area de un triangulo");

let base = prompt("Ingrese la base del triangulo");
let altura = prompt("Ingrese la altura del triangulo");

base = parseFloat(base);
altura = parseFloat(altura);

let area = (altura * base)/2;

alert(`El area del triangulo es igual a: ${area}`);

console.log(`Area del triangulo: ${area}`);
