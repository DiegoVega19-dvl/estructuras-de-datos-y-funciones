// funciones flecha

/*son un forma moderna y mas concisa de declarar funciones en js,
su sintsxis simplificada permite escribir funciones de manera mas limpia, especialmente en
funciones cortas o de una sola linea

una de la caracteristicas mas relevantes de la funciones flecha es que no crean su propio contexto this.
sino que heredan el valor del this lexico desde su entorno inmediato. esto las hace especialmente
utiles en metodos dentro de objetos, promesas, callbacks y estructuras funcionales como map, filter o reduce. la funciones flecha coontribuyen a un codigo mas legible y elegante*/

const greet = () => console.log("hola esto es una funcion flecha");
greet();

const func = (e) => console.log(e + 2);
func(2);
