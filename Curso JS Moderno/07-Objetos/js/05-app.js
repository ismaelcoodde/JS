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

console.log(producto.informacion.fabricacion.pais)
