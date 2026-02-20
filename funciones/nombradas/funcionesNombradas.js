/*una funcion nombrada en js es aquella que tiene un nombre especifico asignado en su declaracion.
este tipo de funcion es especialmente util cuando se necesita invocar la misma logica
en varios lugares del codigo, ya que permite la reutilizacion y mejora de la legibilidad.

se utilizan con frecuencia en scrips donde es necesario ejecutar una misma accion varias veces,
como validar un formulario, calculara totales, o manipular el DOM*/

// ejemplo suma de dos numeros

/*var num = prompt("ingresa un numero: ");
var num2 = prompt("ingresa un numero: ");

var numR = Number(num);
var numR2 = Number(num2);

function suma(numR, numR2) {
  var resultado;
  resultado = numR + numR2;
  return resultado;
}*/

//alert("el resultado de la suma es: " + suma(numR, numR2));

// ejemplo calcular el area del circulo

var r = prompt("ingrese el valor del radio: ");
var radio = Number(r);

function areaCirculo(radio) {
  let area;
  area = Math.PI * (radio * radio);
  return area;
}

console.log(areaCirculo);

alert("el area del circulo es: " + areaCirculo(radio) + " cm cuadrados");
