/* ---------------------------------------------------------- */
/*                     variables Globales                     */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/*                     funciones Globales                     */
/* ---------------------------------------------------------- */


function agrega(e){
e.preventDefault()

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

    if (!nombre) {
        refNombre.classList.add("invalid");
      }

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

    //representarTablaProductos()

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
/*
function representarTablaProductos() {
    
    var filasTabla = '<tr>' +
                        '<th>nombre</th>' +
                        '<th>precio</th>' +
                        '<th>stock</th>' +
                        '<th>marca</th>' +
                        '<th>categoría</th>' +
                        '<th>descripcion corta</th>' +
                        '<th>descripcion larga</th>' +
                        '<th>foto</th>' +
                        '<th>envío</th>' +
                        '<th>edad desde</th>' +
                        '<th>edad hasta</th>' +
                    '</tr>'

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            filasTabla += 
                '<tr>' +
                    '<td>'+ productos[i].nombre  +'</td>' +
                    '<td> $'+ productos[i].precio +'</td>' +
                    '<td> '+ productos[i].stock +'</td>' +
                    '<td> '+ productos[i].marca +'</td>' +
                    '<td> '+ productos[i].categoria +'</td>' +
                    '<td> '+ productos[i].descripcionCorta +'</td>' +
                    '<td> '+ productos[i].descripcionLarga +'</td>' +
                    '<td><img width="50" src="' + productos[i].foto + '" alt="foto de '+productos[i].nombre+'"></td>' +
                    '<td>'+ (productos[i].envio? 'Si':'No') +'</td>' +
                    '<td> '+ productos[i].edadDesde +'</td>' +
                    '<td> '+ productos[i].edadHasta +'</td>' +


                '</tr>'
        }
    }
    else filasTabla = '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla
    
}

function start() {
    console.warn( document.querySelector('title').innerText )

   //representarTablaProductos()
}*/
