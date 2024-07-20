const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Raton', precio: 1500},
    {nombre: 'Auriculares', precio: 600}
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

carrito.forEach(function (producto) {
    console.log(`
            ${producto.nombre} - Precio: ${producto.precio}
        `)
})