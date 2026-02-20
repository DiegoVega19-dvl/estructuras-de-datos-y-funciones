/*una funciona annonima en js es una funcion que no tiene un numebre definido. se suele utilizar como
una expresion de funcion, asignandole una variable o pasandola directamente como un argumento de otra
funcion

este tipos de funciones es muy comun en metodo como setTimeout, map, filter o en la creacion de callbacks

las funciones anonimas son ideales cuando no necesitas reutilizar el codigo en multiples lugares
y deseas mantener tu logica localizada */

// ejemplo

const hola = function () {
  console.log("hola mundo...esto es una funcion anonima");
};

hola();
