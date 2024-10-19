/*3. Multiplicación y División:
Solicite dos números al usuario y muestra el resultado de la multiplicación y división de
los mismos.*/

let numero1 = prompt("Ingrese el PRIMER numero");
let numero2 = prompt("Ingrese el SEGUNDO numero");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let multiplicación = numero1 * numero2;

if (numero2 === 0) {
    alert("No se puede dividir entre 0"); 
    alert(`La multiplicacion es igual a: ${multiplicación}, y la divison no se puede hacer entre 0`);
}else{
    let division = numero1/numero2;
    alert(`La multiplicacion es igual a: ${multiplicación}, y la division es igual a: ${division}`);
}


