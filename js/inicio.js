/* ---------------------------------------------------------- */
/*                     Variables Globales                     */
/* ---------------------------------------------------------- */

//import { getProductos, setProductos } from "./productosMem.js"
import carrito from "./carrito.js"
import productosMem from "./productosMem.js"
//import { getProductosAPI } from "./servicioProductos.js"
import servicioProductos from "./servicioProductos.js"

/* ---------------------------------------------------------- */
/*                     funciones Globales                     */
/* ---------------------------------------------------------- */

//function representarCardsProductos() {
  function render() {
    
    var cards = ''

    //let productos = getProductos()
    let productos = productosMem.getAll()

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            cards += 
                `<section> 
                <h3>${productos[i].nombre}</h3> 
                <img src="${productos[i].foto}" alt=""> 
                <p><b class="precio">Precio:</b> \$${productos[i].precio}</p> 
                <p><b>Detalles:</b> ${productos[i].descripcionCorta}</p> 
                <br>
                <div class="btn-group"> 
                <button type="button" class="open-modal" data-open="modal${productos[i].nombre}">  Mas info </button>
                <button id="comprar-${productos[i].id}"> Comprar </button>
                </div>
                <div class="modal" id="modal${productos[i].nombre}" data-animation="slideInOutLeft">
  <div class="modal-dialog">` +
  /*
    <header class="modal-header">
      The header of the first modal
      <button class="close-modal" aria-label="close modal" data-close>
        ✕  
      </button>
    </header>
    */
    `<section class="modal-content">
      <p>${productos[i].nombre}</p>
      <p><b class="precio">Precio:</b> \$${productos[i].precio}</p>
      <p>Stock: ${productos[i].stock}</p>
      <p>Marca: ${productos[i].marca}</p>
      <p>Categoría: ${productos[i].categoria}</p>
      <p>Detalles: ${productos[i].descripcionLarga}</p>
      <p>Envío gratis: ${productos[i].envio ? "Si" : "No"} </p>
      <p>Edad desde: ${productos[i].edadDesde}</p>
      <p>Edad hasta: ${productos[i].edadHasta}</p>
      <img src="${productos[i].foto}" alt="">
    </section>
    <footer class="modal-footer">
      <button class="close-modal" aria-label="close modal" data-close> Cerrar </button>
      <button class="close-modal" id="comprar" aria-label="close modal" data-close> Comprar </button>
    </footer>
  </div>
</div>
                </section> `
        }
    }
    else cards += '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('.cards-container').innerHTML = cards



    const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  }

  document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });
  
  document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });

  
}

function setListeners() {
  const botones = document.querySelectorAll(".inicio section button")
  botones.forEach(boton => {
    boton.addEventListener("click", e => {
      const id = e.target.id.split("-")[1]
      let producto = productosMem.get(id)
      console.log(producto)
      carrito.agregar(producto)
    })
  })
  
}

async function start() {
    console.warn( document.querySelector('title').innerText )

    //let productos = await getProductosAPI()
    let productos = await servicioProductos.getAll()
    //setProductos(productos)
    productosMem.set(productos)

    render()
    setListeners()
}

export default {
  start
}