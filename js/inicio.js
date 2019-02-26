
document.addEventListener('DOMContentLoaded', function(){
  inicio.iniciarJuego();
}, false);

var inicio = {
  iniciarJuego: function(){
    console.log("juego iniciado");
    ajax.cargarArchivo("mapas/mapa.json");
    teclado.iniciar();
    dimensiones.iniciar();
    buclePrincipal.iterar();

  },
  recargarTiles: function () {
    document.getElementById("juego").innerHTML = "";
    for (var i = 0; i < dimensiones.obtenerTilesVerticales(); i++) {
      for (var j = 0; j < dimensiones.obtenerTilesHorizontales(); j++) {
        var r = new Rectangulo(j * dimensiones.ladoTiles, i * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
      }
    }
  }
}
