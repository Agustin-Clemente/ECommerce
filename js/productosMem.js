/* ---------------------------------------------------------- */
/*                     Variables Globales                     */
/* ---------------------------------------------------------- */
var productos = [
    /* { nombre: 'TV', precio: 123456, stock: 44, marca: 'Samsung', categoria: 'Computación', descripcionCorta: 'descripcion-corta del TV...', descripcionLarga: 'descripcion-larga del TV...', envio: false, foto: 'https://img.freepik.com/vector-gratis/tv-realista-aislado-sobre-fondo-transparente_107791-16488.jpg?w=1380&t=st=1695936190~exp=1695936790~hmac=049d1a14192397681b4b994cb8976265f8fc6d34a5d39e998c9a959d88bdd294', edadDesde: 0, edadHasta: 100 },
    { nombre: 'Mouse', precio: 4567, stock: 65, marca: 'Genius', categoria: 'Computación', descripcionCorta: 'descripcionCorta del mouse...', descripcionLarga: 'descripcion-larga', envio: true, foto: 'https://tienda.anywayinsumos.com.ar/15425-thickbox_default/mouse-genius-usb-dx-110-120-rojo.jpg', edadDesde: 0, edadHasta: 100 },
    { nombre: 'Mesa', precio: 8765, stock: 100, marca: 'Pinolandia', categoria: 'Hogar', descripcionCorta: 'Mesa de pino', descripcionLarga: 'descripcion-larga', envio: true, foto: 'https://http2.mlstatic.com/D_NQ_NP_790402-MLA70515144291_072023-O.webp', edadDesde: 0, edadHasta: 100 },
    { nombre: 'Heladera', precio: 34567, stock: 23, marca: 'Philips', categoria: 'Electrodoméstico', descripcionCorta: 'Color blanca', descripcionLarga: 'descripcion-larga', envio: false, foto: 'https://mancihogar.com.ar/wp-content/uploads/2022/10/370.jpg', edadDesde: 0, edadHasta: 100 },
    { nombre: 'Memoria DDR', precio: 65432, stock: 78, marca: 'Kingston', categoria: 'Computación', descripcionCorta: '16GB', descripcionLarga: 'descripcion-larga', envio: true, foto: 'https://www.totalcompu.com.ar/image/thumbnails/18/8f/memoria_ddr_1gb_kingston_con_gtia_zona_sur_oferta_1247_MLA4742383680_072013_F_1__jpg-100599-600x600.jpg', edadDesde: 0, edadHasta: 100 }, */
]

//export const getProductos = _ => productos
const getAll = _ => productos
//export const setProductos = prods => productos = prods
const set = prods => productos = prods

const guardar = prod => productos.push(prod)

const get = id => productos.find(p => p.id == id)

const actualizar = (id, producto) => {
    const index = productos.findIndex(p => p.id == id)
    productos.splice(index,1,producto)
}

const eliminar = (id) => {
    const index = productos.findIndex(p => p.id == id)
    productos.splice(index,1)
}

export default {
    getAll,
    set,
    guardar,
    get,
    actualizar,
    eliminar
}
