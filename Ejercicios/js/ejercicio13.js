/*13. Cambio de moneda:
Pida al usuario una cantidad en dólares y convertirla a lempiras utilizando el tipo de
cambio actual.*/

let Dolares = prompt("Ingrese la cantidad en dólares:");
let Cambio = 25;

Dolares = parseFloat(Dolares);

let Lempiras = Dolares * Cambio;

console.log(`${Dolares} dolares es igual a ${Lempiras}`);