let carrito=[]

const contenedorProductos = document.getElementById("productos-contenedor");

contenedorProductos.addEventListener('click', (e)=>{
    if (e.target.classList.contains('btn')) {
        //console.log(e.target.id)
        validarProductoEnCarrito(e.target.id)
        
    }
})  

const validarProductoEnCarrito  = (id) =>{
    const estaRepetido = carrito.some(producto => producto.id == id)
    if (estaRepetido) {     //producto existente en carrito
        const producto = carrito.find(producto => producto.id == id)
        producto.cantidad++
        //pinto la cantidad en el HTML
        const contarObjetosCarrito = carrito.reduce((acc,item) => item.cantidad+acc,0)
        const cantidadCarrito = document.getElementById('cantidad-carrito')
        cantidadCarrito.innerText=contarObjetosCarrito
        guardarCarritoStorage(carrito)
    } else{     //producto nuevo en carrito
        const producto = productos.find(producto => producto.id ==id)
        carrito.push(producto)
        //pinto la cantidad en el HTML
        const contarObjetosCarrito = carrito.reduce((acc,item) => item.cantidad+acc,0)
        const cantidadCarrito = document.getElementById('cantidad-carrito')
        cantidadCarrito.innerText=contarObjetosCarrito
        guardarCarritoStorage(carrito)
    }
}

const botonCarrito = document.getElementById('boton-carrito')
botonCarrito.addEventListener('click', () => {
    const contarObjetosCarrito = carrito.reduce((acc,item) => item.cantidad+acc,0)
    Swal.fire({
        title: `El carrito contiene ${contarObjetosCarrito} elementos`,
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',
        denyButtonText: `Vaciar`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }, 
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            carrito = []
            guardarCarritoStorage(carrito)
            cargarCarrito()
          Swal.fire('Su compra se ha realizado con exito!', '', 'success')
        } else if (result.isDenied) {
            carrito = []
            guardarCarritoStorage(carrito)
            cargarCarrito()
          Swal.fire('Su carrito ha sido vaciado', '', 'warning')
        }
      })
})

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }
  
  const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
    return carritoStorage
  }
  
  const cargarCarrito = () => {
    if (localStorage.getItem('carrito')) {
      carrito = obtenerCarritoStorage()
      //pinto la cantidad en el HTML
      const contarObjetosCarrito = carrito.reduce((acc,item) => item.cantidad+acc,0)
      const cantidadCarrito = document.getElementById('cantidad-carrito')
      cantidadCarrito.innerText=contarObjetosCarrito
      
    }
  }