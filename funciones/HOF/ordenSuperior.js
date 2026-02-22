// funciones de orden superior

/*una funcion de orden superior en js es aquella que puede recibir una o mas  funciones como argumento
o bien devolver una funcion como resultado. este tipo de funciones son fundamentales en la programacion
funcional, ya que permiten crear estructuras logicas mas flexibles, reutilizables y declarativas, metodos
como map(), filter(), y reduce() son ejemplos muy conocidos de funciones de orden superior.
reciben como parametro una funcion y aplican esa misma logica sobre un conjunto de datos.

son muy comunes en el uso de callbacks y en la composicion de funciones mas complejas*/

/*function greet(name) {
  return function (message) {
    console.log(`${message}, ${name}`);
  };
}

const greetJohn = greet("juan");
greetJohn("hola");*/

//callback
/*function hola() {
  console.log("hola como estas");
}

function saludando(callback) {
  callback();
}

saludando(hola);*/

// ejmplo

const action = function () {
  console.log("Acción ejecutada.");
};

const error = function () {
  console.error("Ha ocurrido un error");
};

const doTask = function (callback, callbackError) {
  const isError = Math.random() < 0.5;

  if (!isError) callback();
  else callbackError();
};

doTask(action, error);
