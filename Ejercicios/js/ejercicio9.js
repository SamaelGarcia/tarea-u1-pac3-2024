/*9. Celsius a Fahrenheit:
Pida una temperatura en grados Celsius y convierta a grados Fahrenheit.*/

let Celsius = prompt("Ingrese los grados celsius");

Celsius = parseFloat(Celsius);

let fahrenheit = (Celsius + 9/5) + 32;

alert(`${Celsius} grados celsius igual a ${fahrenheit} grados fahrenheit`);


