let obj = {
    nombre: 'Tirzo',
    edad: 20,
    apellido: 'Tejeda',
    keypress: function (){
        console.log(`Se ha presionado una tecla`);
    },
    mouseOver: function (){
        console.log(`El puntero del ratón está arriba`);
    }
}

console.log(obj.nombre); // Pregunta por el nombre de obj
console.log(obj['nombre']); // Pregunta por la posición de nombre dentro de obj

let myKey = 'nombre'; // Utilizamos una 'key' para cambiar de manera fácil identificar lo que se quiere obtener
console.log(obj[myKey]); // Da el mismo resultado que las anteriores llamadas, debido a que "myKey" tiene el valor de nombre

myKey = 'keypress';
console.log(obj[myKey]()); // La función de keypress se ejecuta y muestra el resultado de la consola, pero al no devolver nada, da "undefined" y no se imprime este "console.log"
myKey = 'mouseOver';
console.log(obj[myKey]()); // La función mouseOver se ejecuta, pero al no regresar ningún valor, el "console.log" da "undefined"