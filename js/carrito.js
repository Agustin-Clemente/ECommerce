/* export function startCarrito() {
    console.warn( document.querySelector('title').innerText )
} */

import servicioCarrito from "./servicioCarrito.js"

let refBotonBorrar
let refBotonPedir

var carrito = []

function guardar() {
    localStorage.setItem("carrito" , JSON.stringify(carrito))
}

function leer() {
    try{
    return JSON.parse(localStorage.getItem("carrito"))
} catch {
    return []
}
}

function agregar(producto) {
    let productoCarrito = carrito.find(c => c.id == producto.id)

    if(!productoCarrito){
       producto.cantidad = 1
    carrito.push(producto)
  
    } else {
        productoCarrito.cantidad++
    }
    guardar()
}

function borrarID(id) {
    const index = carrito.findIndex(p => p.id == id)
    carrito.splice(index,1)
    guardar()
}


function incrementarID(id) {
    const producto = carrito.find(p => p.id == id)
    if (producto.cantidad < producto.stock ) {
        producto.cantidad++
        guardar()
    }
    
}

function decrementarID(id) {
    const producto = carrito.find(p => p.id == id)
    if (producto.cantidad >1) {
        producto.cantidad--
        guardar()
    }
    
}

function borrar() {
    if(confirm("¿Desea eliminar el carrito?")){
    carrito = []
    guardar()
    render()
    }
}

async function pedir() {
    console.log("pedir")
    await servicioCarrito.enviar({pedido: carrito})

    carrito = []
    guardar()
    render()
}

function setListeners() {
    const botonesEliminar = document.querySelectorAll(".carrito table button[id*='btnBorrar-']")

    botonesEliminar.forEach(boton => {
      boton.addEventListener("click", async e => {
        const id = e.target.id.split("-")[1]
        console.log(id)

        if (confirm("¿Desea eliminar el producto?")) {
            borrarID(id)
            render()
    }
      })
    })

    const botonesIncrementar = document.querySelectorAll(".carrito table button[id*='btnIncrementar-']")

    botonesIncrementar.forEach(boton => {
      boton.addEventListener("click", async e => {
        const id = e.target.id.split("-")[1]
        console.log("Incrementar" + id)
        incrementarID(id)
        render()
      })
    })

    const botonesDecrementar = document.querySelectorAll(".carrito table button[id*='btnDecrementar-']")

    botonesDecrementar.forEach(boton => {
      boton.addEventListener("click", async e => {
        const id = e.target.id.split("-")[1]
        console.log("Decrementar" + id)
        decrementarID(id)
        render()
      })
    })

    refBotonBorrar.addEventListener("click", borrar)
    refBotonPedir.addEventListener("click", pedir)
    
}

function render() {
    
    var filasTabla = `<tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>marca</th>
                        <th>foto</th>
                        <th>cantidad</th>
                        <th>acciones</th>
                    </tr>`

    if(carrito.length) {
        for(var i=0; i<carrito.length; i++) {
            filasTabla += 
                `<tr>
                <td>${carrito[i].id}</td>
                <td>${carrito[i].nombre}</td>
                <td> \$${carrito[i].precio}</td>
                
                <td> ${carrito[i].marca}</td>
                
                
                <td><img width="100" src="${carrito[i].foto}" alt="foto de ${carrito[i].nombre}"></td>

                <td> 
                    <button id="btnDecrementar-${carrito[i].id}"> - </button>
                    ${carrito[i].cantidad}
                    <button id="btnIncrementar-${carrito[i].id}"> + </button>
                </td>
                <td>
                <button id="btnBorrar-${carrito[i].id}"> Borrar </button>
                </td>
                </tr>`
        }
        refBotonBorrar.style.display = "inline"
        refBotonPedir.style.display = "inline"
    }
    else {
        filasTabla = '<h2>No se encontraron productos para mostrar</h2> <h3>Tu carrito aún está vacío</h3> <img src="https://img.freepik.com/vector-gratis/hombre-compras-supermercado_74855-7612.jpg?w=740&t=st=1695939944~exp=1695940544~hmac=e56019f286e11fe1cd5ccd8169f8a7272da92ebd627cfebdec67bfb95b143ccc" alt="imagen carrito"></img>'

        refBotonBorrar.style.display = "none"
        refBotonPedir.style.display = "none"
    }
    document.querySelector('table').innerHTML = filasTabla

    setListeners()
    
}


function start() {
    console.warn( document.querySelector('title').innerText )

    refBotonBorrar = document.querySelector(".carrito__borrar")
    refBotonPedir =document.querySelector(".carrito__pedir")

    carrito = leer()

    render()
    //setListeners()
}


export default{
    start,
    agregar
}