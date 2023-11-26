const URL = "https://655cc0a425b76d9884fde4c9.mockapi.io/carrito/"



async function enviar(carrito) {
    return await fetch(URL, {
        method : "POST", 
        headers : { "Content-Type" : "application/json"}, 
        body: JSON.stringify(carrito) 
    }).then(r => r.json())  
}




export default {
    enviar
}