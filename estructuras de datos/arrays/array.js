// metodos de arrays

let frutas = ["sandia", "mango", "platano", "kiwi"];
let frutas2 = ["pera", "caña", "fresa", "datil"];

// para acceder a l a ultima posicion de nuestro arreglo se usa formula
console.log(frutas[frutas.length - 1]);

// en lugar de corchetes con at puede poner numeros negativos
console.log(frutas.at(-2));

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

allFrutas.splice(2, 0, "papaya");
console.log(allFrutas);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
console.log("-------");
for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]);
}

// el metodo indexOf te ayuda a saber si existe o no el elemento del arreglo a buscar
// compara del modo estricto, compara tanto el valor como el tipo de dato
console.log(allFrutas.indexOf("datil"));

// metodo fill
allFrutas.fill("durazno", 4, 6);

/*para crear una copia de arreglo se usa el operador ... */

/*en js es una funcion de primer orden es una funcion que se puede mandar por parametro */

let fn = () => console.log("esto es una funcion de primer orden");

function algo(m) {
  console.log("hola");
  m();
  console.log("mundo");
}

algo(fn);

// arreglo de objetos

let paises = [
  {
    nombre: "mexico",
    poblacion: 130,
    capital: "cdmx",
  },
  {
    nombre: "india",
    poblacion: 1400,
    capital: "nueva dheli",
  },
  {
    nombre: "españa",
    poblacion: 55,
    capital: "madrid",
  },
];

// every evalua todos los elementos del arreglo y regresa un booleano
// con un elemento de la condicion que no se cumpla regresara un false

/*let pais = (e) => e.poblacion < 60;
console.log(paises.every(pais));*/

// en cambio some regresara un true con que un elemento del arreglo cumpla con la condicion

/*let country = (e) => e.poblacion < 60;
console.log(paises.some(country));*/

// map (es metodo inmutable)

const paises2 = paises.map((element) => {
  return {
    nombre: element.nombre,
    poblacion: element.poblacion * 2,
    capital: element.capital,
  };
});

console.log(paises2);
console.log(paises);
