/*10. Área de un círculo:
Solicite el radio de un círculo y calcule su área.*/

let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

let area = Math.PI * (radio*radio);
area = area.toFixed(3);

alert(`Area del circulo = ${area}`);

