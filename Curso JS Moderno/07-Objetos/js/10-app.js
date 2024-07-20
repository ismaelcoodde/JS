'use strict';

const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true

}
const medidas = {
    peso: '1kg',
    medida: '1 metro'
}
console.log(producto)
console.log(medidas)


//Spread Operator o Rest Operator
//Copiar objetos a variables

const resultado = {...producto, ...medidas};

console.log(resultado)
