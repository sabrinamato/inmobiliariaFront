

window.onload = function() {

    spinner = document.getElementById ("spinner");
    
    console.log (`Inicio window.onload`)
    
    obtenerMovimientos()
    
    cargaMovimientosRequest.onload = mostrarMovimientos
    
    agregarMovimientosRequest.onload = resultadoAgregar }


