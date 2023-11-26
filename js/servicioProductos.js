const URL = "https://655cc0a425b76d9884fde4c9.mockapi.io/productos/"


//export async function getProductosAPI() {
async function getAll() {
    return await fetch(URL).then(r => r.json())
}

async function get(id) {
    return await fetch(URL+id).then(r => r.json())
}

async function guardar(producto) {
    return await fetch(URL, {
        method : "POST", 
        headers : { "Content-Type" : "application/json"}, 
        body: JSON.stringify(producto) 
    }).then(r => r.json())  
}

async function actualizar(id, producto) {
    return await fetch(URL + id, {
        method : "PUT", 
        headers : { "Content-Type" : "application/json"}, 
        body: JSON.stringify(producto) 
    }).then(r => r.json())  
}

async function eliminar(id) {
    return await fetch(URL + id, {
        method : "DELETE"
    }).then(r => r.json())  
}


export default {
    getAll, 
    get,
    guardar,
    actualizar,
    eliminar
}