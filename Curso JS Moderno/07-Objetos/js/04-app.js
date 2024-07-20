const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true

}

//Extraer el valor de un objeto y crear una variable

//const nombre = producto.nombre;

//Destructuring
const {precio} = producto;
console.log(precio);