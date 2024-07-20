const producto = {
    nombre: 'Monitor',
    precio: 300,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }

}
const producto2 = {
    nombre: 'Teclado',
    precio: 3550,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }

}


producto.mostrarInfo();
producto2.mostrarInfo();