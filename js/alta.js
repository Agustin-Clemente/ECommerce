/* ---------------------------------------------------------- */
/*                     variables Globales                     */
/* ---------------------------------------------------------- */

//import { getProductos } from "./productosMem.js"
import productosMem from "./productosMem.js"
import servicioProductos from "./servicioProductos.js"

/* ---------------------------------------------------------- */
/*                     funciones Globales                     */
/* ---------------------------------------------------------- */

let editarID= null

let refNombre
let refPrecio
let refStock
let refMarca
let refCategoria
let refDescripcionCorta
let refDescripcionLarga
let refFoto
let refEnvio
let refEdadDesde
let refEdadHasta

let refBtnAgregarActualizar

async function agrega(e){
e.preventDefault()

    

    let nombre = refNombre.value
    let precio = refPrecio.value
    let stock = refStock.value
    let marca = refMarca.value
    let categoria = refCategoria.value
    let descripcionCorta = refDescripcionCorta.value
    let descripcionLarga = refDescripcionLarga.value
    let foto = refFoto.value
    let envio = refEnvio.checked
    let edadDesde = refEdadDesde.value
    let edadHasta = refEdadHasta.value

    if (!nombre) {
        refNombre.classList.add("invalid");
      }

    /* productos.push({
        nombre : nombre,
        precio : precio,
        stock : stock,
        marca : marca,
        categoria : categoria,
        descripcionCorta : descripcionCorta,
        descripcionLarga: descripcionLarga,
        foto : foto,
        envio : envio,
        edadDesde : edadDesde,
        edadHasta : edadHasta
    }) */
    let producto = {
        nombre : nombre,
        precio : precio,
        stock : stock,
        marca : marca,
        categoria : categoria,
        descripcionCorta : descripcionCorta,
        descripcionLarga: descripcionLarga,
        foto : foto,
        envio : envio,
        edadDesde : edadDesde,
        edadHasta : edadHasta
    }

    if(editarID){
        producto.id = editarID
        const productoActualizado = await servicioProductos.actualizar(editarID,producto)
        productosMem.actualizar(productoActualizado.id, producto)

        editarID=null

        mostrarBotonAgregar()
    }else{
    let productoGuardado = await servicioProductos.guardar(producto)
    productosMem.guardar(productoGuardado)
    }
    
    //representarTablaProductos()
    render()

    borrarForm()

}

function borrarForm() {
    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDescripcionCorta.value = ''
    refDescripcionLarga.value = ''
    refFoto.value = ''
    refEnvio.checked = false
    refEdadDesde.value = ""
    refEdadHasta.value = ""
}

function copiarProductoEnForm(producto) {
    console.log(producto)
    

    for (let campo in producto) {
        //console.log(campo)
        const ref = document.getElementById(campo)
        if(ref) ref[ref.id == "envio" ? "checked" : "value"] = producto[campo]
    }
}

function mostrarBotonAgregar() {
    refBtnAgregarActualizar.classList.remove("btnActualizar")
        refBtnAgregarActualizar.classList.add("btnAgregar")
        refBtnAgregarActualizar.innerText = "Agregar"
}

function mostrarBotonActualizar() {
    refBtnAgregarActualizar.classList.remove("btnAgregar")
        refBtnAgregarActualizar.classList.add("btnActualizar")
        refBtnAgregarActualizar.innerText = "Actualizar"
}

/*
function agregar(e) {
    e.preventDefault()

    //console.log('agregar()')

    var refNombre = document.getElementById('nombre')
    var refPrecio = document.getElementById('precio')
    var refStock = document.getElementById('stock')
    var refMarca = document.getElementById('marca')
    var refCategoria = document.getElementById('categoria')
    var refDescripcionCorta = document.getElementById('descripcion-corta')
    var refDescripcionLarga = document.getElementById('descripcion-larga')
    var refFoto = document.getElementById('foto')
    var refEnvio = document.getElementById('envio-sin-cargo')
    var refEdadDesde = document.getElementById('edad-desde')
    var refEdadHasta = document.getElementById('edad-hasta')

    var nombre = refNombre.value
    var precio = refPrecio.value
    var stock = refStock.value
    var marca = refMarca.value
    var categoria = refCategoria.value
    var descripcionCorta = refDescripcionCorta.value
    var descripcionLarga = refDescripcionLarga.value
    var foto = refFoto.value
    var envio = refEnvio.checked
    var edadDesde = refEdadDesde.value
    var edadHasta = refEdadHasta.value
    
   

    //console.log(nombre, precio, stock, envio)
    productos.push({
        nombre : nombre,
        precio : precio,
        stock : stock,
        marca : marca,
        categoria : categoria,
        descripcionCorta : descripcionCorta,
        descripcionLarga: descripcionLarga,
        foto : foto,
        envio : envio,
        edadDesde : edadDesde,
        edadHasta : edadHasta
    })

    //console.log(productos)

    representarTablaProductos()

    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDescripcionCorta.value = ''
    refDescripcionLarga.value = ''
    refFoto.value = ''
    refEnvio.checked = false
    refEdadDesde = ""
    refEdadHasta = ""
}
*/


//function representarTablaProductos() {
    function render() {

    //let productos = getProductos()
    let productos = productosMem.getAll()
    
    var filasTabla = `<tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>stock</th>
                        <th>marca</th>
                        <th>categoría</th>
                        <th>descripcion corta</th>
                        <th>descripcion larga</th>
                        <th>foto</th>
                        <th>envío</th>
                        <th>edad desde</th>
                        <th>edad hasta</th>
                        <th>acciones</th>
                    </tr>`

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            filasTabla += 
                `<tr>
                <td>${productos[i].id}</td>
                <td>${productos[i].nombre}</td>
                <td> \$${productos[i].precio}</td>
                <td> ${productos[i].stock}</td>
                <td> ${productos[i].marca}</td>
                <td> ${productos[i].categoria}</td>
                <td> ${productos[i].descripcionCorta}</td>
                <td> ${productos[i].descripcionLarga}</td>
                <td><img width="100" src="${productos[i].foto}" alt="foto de ${productos[i].nombre}"></td>
                <td>${productos[i].envio ? 'Si' : 'No'}</td>
                <td> ${productos[i].edadDesde}</td>
                <td> ${productos[i].edadHasta}</td>
                <td> 
                <button ${editarID ? "disabled" : ""} id="btnBorrar-${productos[i].id}"> Borrar </button>
                ${ editarID && editarID == productos[i].id 
                    ? `<button id="btnCancelar-${productos[i].id}"> Cancelar </button>` 
                    : `<button id="btnEditar-${productos[i].id}"> Editar </button>`
                }
                </td>
                </tr>`
        }
    }
    else filasTabla = '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla
    setListeners()
}

function setListeners() {

    const botonesEliminar = document.querySelectorAll(".alta table button[id*='btnBorrar-']")
    botonesEliminar.forEach(boton => {
      boton.addEventListener("click", async e => {
        const id = e.target.id.split("-")[1]
        console.log(id)

        if (confirm("¿Desea eliminar el producto?")) {
            
        
        const productoEliminado =  await servicioProductos.eliminar(id)
        productosMem.eliminar(productoEliminado.id)

        if (editarID) {
            editarID=null
            mostrarBotonAgregar()
            borrarForm()
        }
        

        render()
    }
      })
    })

    const botonesEditar = document.querySelectorAll(".alta table button[id*='btnEditar-']")
    botonesEditar.forEach(boton => {
      boton.addEventListener("click", e => {
        const id = e.target.id.split("-")[1]
        console.log(id)

        editarID = id
        
        mostrarBotonActualizar()

        let producto = productosMem.get(id)
        copiarProductoEnForm(producto)

        render()


      })
    })

    const botonesCancelar = document.querySelectorAll(".alta table button[id*='btnCancelar-']")
    botonesCancelar.forEach(boton => {
      boton.addEventListener("click", e => {
        const id = e.target.id.split("-")[1]
        console.log(id)

        editarID = null

        mostrarBotonAgregar()

        borrarForm()

        render()

      })
    })
    
  }



//export function startAlta() {
async function start() {
//console.warn( document.querySelector('title').innerText )
    refNombre = document.getElementById('nombre')
     refPrecio = document.getElementById('precio')
     refStock = document.getElementById('stock')
     refMarca = document.getElementById('marca')
     refCategoria = document.getElementById('categoria')
     refDescripcionCorta = document.getElementById('descripcionCorta')
     refDescripcionLarga = document.getElementById('descripcionLarga')
     refFoto = document.getElementById('foto')
     refEnvio = document.getElementById('envio')
     refEdadDesde = document.getElementById('edadDesde')
     refEdadHasta = document.getElementById('edadHasta')

     refBtnAgregarActualizar = document.querySelector(".alta .alta-form button")

const formAlta = document.querySelector(".alta-form")
formAlta.addEventListener("submit", agrega)

let productos = await servicioProductos.getAll()
    //setProductos(productos)
    productosMem.set(productos)

   //representarTablaProductos()
   render()
   
}

export default {
    start
}