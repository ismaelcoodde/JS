'use strict';

const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true

}
Object.freeze(producto) //Para congelar producto y que no se pueda modificar
console.log(Object.isFrozen(producto)) // Para ver si esta congelado o no
