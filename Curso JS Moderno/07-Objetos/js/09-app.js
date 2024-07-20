'use strict';

const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true

}

//Objet.seal te deja modificar pero no agregar ni eliminar.
Object.seal(producto);
producto.disponible = 'false';

console.log(Object.isSealed(producto)) // Para saber si el objeto esta sellado
