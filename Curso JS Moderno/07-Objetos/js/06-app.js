const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true,
    informacion: { //Objeto dentro de Objeto
        peso: '1KG',
        medida: '1m',
        fabricacion: {
            pais: 'China'
        }

    },

}
//Destructuring de objetos anidados

const {nombre, informacion: {fabricacion: {pais}}} = producto;
console.log(nombre);
console.log(pais);