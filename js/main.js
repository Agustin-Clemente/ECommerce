// import { startAlta } from "./alta.js"
import alta from "./alta.js"
/* import { startCarrito } from "./carrito.js"
import { startContacto } from "./contacto.js" */
import carrito from "./carrito.js"
import contacto from "./contacto.js"
//import { startInicio } from "./inicio.js"
import inicio from "./inicio.js"


//import { startNosotros } from "./nosotros.js"
import nosotros from "./nosotros.js"


/* ---------------------------------------------------------- */
/*                          Ejecución                         */
/* ---------------------------------------------------------- */
window.onload = startMain

function cargarPlantilla(id) {

    id = id || "inicio" // id va a ser id o si esta vacio vale inicio

    const main = document.querySelector("main")
    const start = {
        inicio : inicio.start,
        //alta : startAlta,
        alta : alta.start,
        carrito : carrito.start,
        //carrito : startCarrito,
        //nosotros : startNosotros,
        nosotros : nosotros.start,
        //contacto : startContacto,
        contacto : contacto.start,
    }
    const url = "./plantillas/" + id + ".html"
    const xhr = new XMLHttpRequest()
    xhr.open("get", url)
    xhr.addEventListener("load" , () =>{
        if (xhr.status == 200) {
            let plantilla = xhr.response
            
            main.innerHTML = plantilla

            /* if (id == "inicio") startInicio()
            if (id == "alta") startAlta() */
            start[id]()

        }
    })
    xhr.send()
}

function cargarPlantillas() {
    //const id = "inicio"
    const id = location.hash.slice(1)
    cargarPlantilla(id)

    const links = document.querySelectorAll("header nav a")
    //console.log(links)

    links.forEach( link => {
        link.addEventListener("click", e => {
            e.preventDefault()
            let id = link.id
            location.hash = id
            //cargarPlantilla(id)
       
        })
    })

    window.addEventListener("hashchange", () => {
        const id = location.hash.slice(1)
        cargarPlantilla(id)
    })
}

function startMain(){
    cargarPlantillas()
    
}