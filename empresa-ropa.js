//ELABORADO POR: ALONDRA DANIELA QUEVEDO HERNANDEZ

/*Te han contratado en una empresa de venta de ropa. 
Se llegó el buen fin y una de tus tareas es que calcules 
¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.

 Los valores deben de ser capturados con promt y mostrados con alertas.

 PROCEDIMIENTO
 el porcentaje ingresado se divide entre 100 para tener decimal
 se multiplica el decimal obenido por el precio original
 al precio original se le resta el resultado anerior y se tiene el precio con el descuento aplicado
 */

let precio = 1560;
let porcentaje = prompt("Porcentaje de descuento que se aplicará");
let descuentoDecimal = parseFloat(porcentaje) / 100;
let descuentoAplicar = descuentoDecimal * 1560;
let precioFinal = 1560 - descuentoAplicar;

alert(`Precio inicial: ${precio} descuento aplicado: ${porcentaje} precio final: ${precioFinal} usted ahorro: ${descuentoAplicar}`);