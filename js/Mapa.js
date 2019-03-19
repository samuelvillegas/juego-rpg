function Mapa(objetoJSON){
  this.posicion = new Punto(0,0);
  this.posicionActualizada = new Punto(0,0);

  this.anchoEnTiles = parseInt(objetoJSON.width);
  this.altoEnTiles = parseInt(objetoJSON.height);
  this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
  this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

  this.paletasSprites = [];
  this.iniciarPalestasSprites(objetoJSON.tilesets);

  this.capasTiles = [];
  this.iniciarCapas(objetoJSON.layers);

  this.iniciarRejilla();
}

Mapa.prototype.iniciarPalestasSprites = function (datosCapas) {
  for(i = 0; i < datosCapas.lenght; i++){
      this.paletasSprites.push(new paletasSprites(datosCapas[i]));
  }
};

Mapa.prototype.iniciarCapas = function (datosCapas) {
  for(i = 0; i < datosCapas.length; i++){
    switch (datosCapas[i].type) {
      case "tilelayer":
          this.capasTiles.push(new CapaMapaTiles(
            datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprites));
        break;
      case "objectgroup":
      break;

    }
  }
};

Mapa.prototype.iniciarRejilla = function(){
  var anchoMapaEnPixeles = this.anchoEnTiles * this.anchoDeLosTiles;
  var altoMapaEnPixeles = this.altoEnTiles * this.altoDeLosTiles;

  var html = "";

  for(ct = 0; ct < this.capasTiles.length; ct++){
      for(t = 0; t < this.capasTiles[ct].tiles.length; t++){
          if(this,capasTiles[ct].tiles[t] == null){
            continue;
          }

          let tileActual = this.capasTiles[ct].tile[t];

          html += tileActual.html;

      }
  }

  document.getElementById("mapa").innerHTML = html;

  for(ct = 0; ct < this.capasTiles.length; ct++){
      for(t = 0; t < this.capasTiles[ct].tiles.length; t++){
          if(this,capasTiles[ct].tiles[t] == null){
            continue;
          }
          let tileActual = this.capasTiles[ct].tile[t];

            tileActual.aplicarEstilos();

      }
  }

  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

Mapa.prototype.actualizar = function (registroTemporal, posicionJugadorMapaEnPixeles) {
  this.posicion.x = posicionJugadorMapaEnPixeles.x;
this.posicion.y = posicionJugadorMapaEnPixeles.y;
};

Mapa.prototype.dibujar = function () {
for(c = 0; c < this.capasTiles.length; c++){
  for(i=0; i < this.capasTiles[c].tiles.length; i++ ){
    this.capasTiles[c].tiles[i].mover(this.posicion.x, this.posicion.y);
  }
}
};
