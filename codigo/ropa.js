
function cargarRopas(){
    var row_vestidos= document.getElementById('row_vestidos')
    var row_blusas= document.getElementById('row_blusas')
    var row_bikinis = document.getElementById('row_bikinis')
    render(row_vestidos, vestidos)
    render(row_blusas, blusas)
    render(row_bikinis, bikinis)
}