const carrito = [];
//Definir producto
const producto = {
    nombre: 'Monitor',
    precio: 200
}
const producto2 = {
    nombre: 'Movil',
    precio: 900
}

carrito.push(producto);
carrito.push(producto2);


//Eliminar ultimo elemento de un Array
carrito.pop()
//Eliminar inicio elemento de un Array
carrito.shift(carrito);

console.table(carrito)

