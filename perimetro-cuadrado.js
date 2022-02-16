//ELABORADO POR: ALONDRA DANIELA QUEVEDO HERNANDEZ

/*Haz javascript para : Calcular el perímetro de un cuadrado. 
Los valores deben de ser capturados con promt y mostrados con alertas.

FORMULA PARA PERIMETRO DE CUADRADO:  perimetro = l+l+l+l ó perimetro = l*4
*/

let ladoCuadrado = prompt("Dime cuanto mide un lado del cuadrado");
//forma 1 de encontrar el perimetro
let perimetro_1 = parseFloat(ladoCuadrado) + parseFloat(ladoCuadrado) + 
    parseFloat(ladoCuadrado) + parseFloat(ladoCuadrado);

//forma 2 de encontrar el perimetro
let perimetro_2 = parseFloat(ladoCuadrado) * 4;

alert(`El perímetro es: ${perimetro_1} formula utilizada: perimetro = l+l+l+l `);
console.log(perimetro_2);