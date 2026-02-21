// callbacks

/*los callbacks son funciones que se pasan como argumento a otra funcion y se ejecutan una vez
que se completa una tarea deteminada. en js los callbacks son fundamentales para controlar, el
flujo de la ejecucion, especialmente en operaciones asincronas como peticiones a Apis, temporizadores o
lectura de archivos. tambien se utilizan con frecuencia en el manejo de eventos, como clics del usuario
desplazamientos o interaccion con formularios

los callbacks permiten que una funcion "espere" a que otra termine antes de ejecutarse, evitanto bloqueos
y mejorando la experiencia de usuario. aunque las promesas y async/await han modernizado el menejo de
asincronia, las funciones callbacks siguen siendo la base de muchos patrones de js*/

function processUserInput(callback) {
  const name = prompt("ingresa tu nombre: ");
  callback(name);
}

processUserInput((name) => {
  console.log(`hola ${name}`);
});

//estas funciones son especiales para el llamado de apis

// otro ejemplo de callback

// esta es la funcion callback
// es la que se pasa como argumento
const action = function () {
  console.log("Acción ejecutada.");
};

const mainFunction = function (callback) {
  callback();
};

mainFunction(action);

/*1.- definimos la funcion "action" que realiza una tarea
2.- definimos una funcion "mainFunction", que recibe como parametro la funcion callback generica 
3.- llamamos a mainFunction, pasandole como parametro la funcion concreta, que en nuestro caso es action*/
