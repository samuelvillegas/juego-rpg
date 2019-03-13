function EstadoMapaMundi(){
  var that = this;
  this.mapaListo = false;
  this.mapa = null;
  this.jugadorMapamundi = null;
  ajax.cargarArchivo("mapas/desierto48.json", function(objetoJSON){
    that.mapa = new Mapa(objetoJSON);

    that.mapaListo = true;
    that.jugadorMapamundi = new JugadorMapamundi(new Punto(0,0));
    console.log("Mapa ready");
  });

}

EstadoMapaMundi.prototype.actualizar = function () {
  if(!this.mapaListo){
    return;
  }
  this.jugadorMapamundi.actualizar(registroTemporal);
  this.mapa.actualizar(registroTemporal, this.jugadorMapamundi.posicionEnMapaEnPixeles);
};

EstadoMapaMundi.prototype.dibujar = function () {

};
