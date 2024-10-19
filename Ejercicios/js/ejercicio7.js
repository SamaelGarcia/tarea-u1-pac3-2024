/*7. Verificación de par o impar:
Pida un número al usuario y determina si es par o impar.*/

let numero = prompt("Ingrese el numero a determinar si es par o impar");

numero = parseFloat(numero);

if (numero%2===0) {
    alert("El numero es par.")
    console.log("El numero es par");
    
} else {
    alert("El numero es impar.");
    console.log("El numero es impar.");
    
}

