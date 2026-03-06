// metodos de arrays

let frutas = ["sandia", "mango", "platano", "kiwi"];
let frutas2 = ["pera", "caña", "fresa", "datil"];

// para acceder a l a ultima posicion de nuestro arreglo se usa formula
console.log(frutas[frutas.length - 1]);

//console.log(1 === "1");

// agrega un elemento al final del array
//frutas.push("coco");

//console.log(frutas);

// elimina el ultimo elemento del array
//frutas.pop();

//console.log(frutas);

// elimina el primer elemento del array
//frutas.shift();

// agrega un elemento al principio del array
//frutas.unshift("kiwi");
//console.log(frutas);

// el metodo filter, talcual filtra datos dentro de los arreglos
let frutasconA = frutas.filter((fruta) => fruta.includes("a"));
console.log(frutasconA);

// el metodo concatena dos arreglos
let allFrutas = frutas.concat(frutas2);
console.log(allFrutas);

// el metodo reverse revierte el orden de aparcicion del arreglo
allFrutas.reverse();
console.log(allFrutas);

// el metodo sort ordena el arreglos alfabeticamente
allFrutas.sort();
console.log(allFrutas);
