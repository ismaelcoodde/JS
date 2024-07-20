//Object literal
const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true

}

//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.dosponible = true;

}
const producto2 = new Producto('Monitor de 24 pulgadas', 500)
console.log(producto2);
const producto3 = new Producto('RTX 3070', 600)
console.log(producto3);
