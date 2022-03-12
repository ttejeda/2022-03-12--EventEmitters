let obj = {
    nombre: 'Tirzo',
    edad: 20,
    apellido: 'Tejeda'
}

console.log(obj.nombre); //Pregunta por el nombre de obj
console.log(obj['nombre']); //Pregunta por la posición de nombre dentro de obj

let myKey = 'nombre'; //Utilizamos una 'key' para cambiar de manera fácil identificar lo que se quiere obtener
console.log(obj[myKey]); //Da el mismo resultado que las anteriores llamadas, debido a que "myKey" tiene el valor de nombre