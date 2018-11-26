
//Se escibe el telefono con el código de país y sin el cero inicial
var telefono= '+593000000000'

//Se escribe el texto default a enviar
var texto='Hola quisiera información acerca del producto'

var vestidos= [
    {codigo:'v0001', nombre:'Vestido 1', descripcion: 'descripcion 1', imagen: 'https://smhttp-ssl-50601.nexcesscdn.net/media/catalog/product/cache/21/small_image/210x280/9df78eab33525d08d6e5fb8d27136e95/c/a/cathrine_1__2.jpg'},
    {codigo:'v0002', nombre:'Vestido 2', descripcion: 'descripcion 2', imagen:'https://smhttp-ssl-50601.nexcesscdn.net/media/catalog/product/cache/21/small_image/210x280/9df78eab33525d08d6e5fb8d27136e95/e/r/erlinda_6_.jpg'},
    {codigo:'v0003', nombre:'Vestido 3', descripcion: 'descripcion 3', imagen: 'https://thumbnail.dresslink.com/V39/SVV031896_B-1x210-280.jpg'},
    {codigo:'v0004', nombre:'Vestido 4', descripcion: 'descripcion 4', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTCrMCbix7DwAmftQyyBnnk3hz858yFh2IzMpiLt8ecOoZsFe'}
]

var blusas =[
    {codigo:'b0001', nombre:'Blusas 1', descripcion: 'descripcion 1', imagen: 'https://i.pinimg.com/originals/3f/c7/35/3fc735d2e0207dac570d0863528097fc.jpg'},
    {codigo:'b0002', nombre:'Blusas 2', descripcion: 'descripcion 2', imagen:'https://smhttp-ssl-50601.nexcesscdn.net/media/catalog/product/cache/21/small_image/210x280/9df78eab33525d08d6e5fb8d27136e95/z/e/zella_9__1.jpg'},
    {codigo:'b0003', nombre:'Blusas 3', descripcion: 'descripcion 3', imagen: 'https://smhttp-ssl-50601.nexcesscdn.net/media/catalog/product/cache/21/small_image/210x280/9df78eab33525d08d6e5fb8d27136e95/s/h/shana3.jpg'},
    {codigo:'b0004', nombre:'Blusas 4', descripcion: 'descripcion 4', imagen: 'https://i.pinimg.com/originals/f9/2c/d6/f92cd683f20e2272bd4d984f103470f4.jpg'}
]

var bikinis =[
    {codigo:'k0001', nombre:'Bikini 1', descripcion: 'descripcion 1', imagen: 'https://smhttp-ssl-50601.nexcesscdn.net/media/catalog/product/cache/21/small_image/210x280/9df78eab33525d08d6e5fb8d27136e95/e/s/estela5_2.jpg'},
    {codigo:'k0002', nombre:'Bikini 2', descripcion: 'descripcion 2', imagen:'https://media.peacocks.co.uk/media/catalog/product/cache/1/rollover_image/210x280/9df78eab33525d08d6e5fb8d27136e95/1/3/13_aqua_tropical_bikini_1_122.jpg'},
    {codigo:'k0003', nombre:'Bikini 3', descripcion: 'descripcion 3', imagen: 'https://smhttp-ssl-50601.nexcesscdn.net/media/catalog/product/cache/21/small_image/210x280/9df78eab33525d08d6e5fb8d27136e95/r/u/ruthie4.jpg'},
    {codigo:'k0004', nombre:'Bikini 4', descripcion: 'descripcion 4', imagen: 'https://www.wilderness.net.au/images/T/Style-3286-Brown-Set.png'}
]

var perfumes =[
    {codigo:'p0001', nombre:'Perfume 1', descripcion: 'descripcion 1', imagen: 'https://i.pinimg.com/originals/9d/52/9c/9d529c188c0bae7f3afa0a336a0e8608.jpg'},
    {codigo:'p0002', nombre:'Perfume 2', descripcion: 'descripcion 2', imagen:'https://images-na.ssl-images-amazon.com/images/I/318F7BYK97L.jpg'},
    {codigo:'p0003', nombre:'Perfume 3', descripcion: 'descripcion 3', imagen: 'https://i.pinimg.com/originals/d6/b3/66/d6b3665b79095b862df5acbb04c54f57.jpg'},
    {codigo:'p0004', nombre:'Perfume 4', descripcion: 'descripcion 4', imagen: 'https://images-na.ssl-images-amazon.com/images/I/31sW-FuqbRL.jpg'}
]

var maquillajes =[
    {codigo:'m0001', nombre:'Maquillaje 1', descripcion: 'descripcion 1', imagen: 'https://i.pinimg.com/236x/b6/a3/82/b6a382c24109be994b2e7695f5ff2793--best-red-lipstick-red-lipsticks.jpg'},
    {codigo:'m0002', nombre:'Maquillaje 2', descripcion: 'descripcion 2', imagen:'https://harabeli.al/wp-content/uploads/2017/06/gloss_design_collistar-210x280.jpg'},
    {codigo:'m0003', nombre:'Maquillaje 3', descripcion: 'descripcion 3', imagen: 'https://i.pinimg.com/236x/0a/62/7e/0a627e5c0a06fd4dbfd4ecedcebc4432--almay-cosmetics-almay-eyeshadow.jpg'},
    {codigo:'m0004', nombre:'Maquillaje 4', descripcion: 'descripcion 4', imagen: 'https://i.pinimg.com/originals/99/58/f4/9958f4780a031679aa56b53901d73b55.jpg'}
]


function render(contenedor, datos){
    var row= contenedor
    var cadena="";
    for (var i=0; i < datos.length; i++) {
        cadena+=`<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="showcase-block">
                        <div class="showcase-img">
                            <a href="javascript:abrirModal('${datos[i].nombre}', '${datos[i].codigo}', '${datos[i].descripcion}', '${datos[i].imagen}') "> 
                            <img class="img-thumbnail" src="${datos[i].imagen}" alt="${datos[i].nombre}">
                            </a>
                            <h3>${datos[i].nombre}</h3>
                            <p>${datos[i].descripcion}</p>
                        </div>
                    </div>
                </div>`;
    }
    row.innerHTML=cadena;
}

function abrirModal(titulo, codigo, descripcion, imagen){
    document.getElementById('tituloModal').innerHTML=titulo
    document.getElementById('codModal').innerHTML=codigo
    document.getElementById('descModal').innerHTML=descripcion
    document.getElementById('imgModal').setAttribute('src', imagen)
    $('#modalProducto').modal();
}

function cargarWhatss(){
    var whats = document.getElementById('whats')
    whats.innerHTML=`<a href="whatsapp://send?text=${textoFormato(texto)}&phone=${telefono}&abid=${telefono}">
                        <img src="http://www.audienciaelectronica.net/wp-content/uploads/2018/07/whatsapp.jpg" class="img-fluid" alt="">
                    </a>
                    <h3>Click en la imágen para iniciar conversación de whatsapp</h3>`  
}

function textoFormato(texto){
    var nuevoTexto= texto.replace(/ /gi, '%20');
    return nuevoTexto
}