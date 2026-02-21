/*una funciona anonima en js es una funcion que no tiene un nombre definido. se suele utilizar como
una expresion de funcion, asignandole una variable o pasandola directamente como un argumento de otra
funcion

este tipos de funciones es muy comun en metodo como setTimeout, map, filter o en la creacion de callbacks

las funciones anonimas son ideales cuando no necesitas reutilizar el codigo en multiples lugares
y deseas mantener tu logica localizada */

// ejemplo

var hola = function () {
  console.log("hola mundo...esto es una funcion anonima");
};

//var hola = "hola";
console.log(typeof hola);
hola();

//funciones autoejecutables

/*este tipo de funciones tambien se le conoce como IIFE (funcion por expresion invocada inmediatamente)

pueden existri casos en los que necesitamos crear una funcion y ejecutrala inmediatamente, sabiendo
no la vas a volver a usar

basicamente, solo tenemos que envolver entre parantesis la funcion anonima en cuestion*/

// ejemplo

(function () {
  console.log("hola mundo, esto es una funcion autoinvocable");
})();

// tambien se pueden pasar parametros a estas funciones

(function (name) {
  console.log(`hola ${name}`); // (para concatenar variables dentro de una cadena de texto debe usar ``)
})("Diego");



