//ELABORADO POR: ALONDRA DANIELA QUEVEDO HERNANDEZ

/*Haz un javascript para: Calcular el área de un triángulo. 
¿Qué variables necesitas? 
Los valores deben de ser capturados con promt y mostrados con alertas. 

FORMULA: Area = (Base*altura) / 2
*/

let base = prompt("Dame la altura del triángulo");
let altura = prompt("Dame la base del triángulo");
let multiplicacion = parseFloat(base) * parseFloat(altura);
let area = multiplicacion / 2;

alert(`La base es: ${base} la altura es: ${altura} el área del triángulo es: ${area}`);