const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true

}

//Agregar nuevas propiedades a un objeto
producto.color = "Azul";

//Eliminar propiedades del objeto
delete producto.color;

console.log(producto)