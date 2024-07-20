
const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true

}

//Extraer el valor de un objeto y crear una variable
//const nombre = producto.nombre;

//Destructuring para Objetos

const {nombre} = producto;
console.log(nombre);

//Destructuring para Arrays

const numero = [10,30,40];

const[ , , tercero] = numero;
console.log(tercero)