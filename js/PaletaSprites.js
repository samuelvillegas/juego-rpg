function PaletaSprites(datosSprites){
  this.rutaImagen = datosSprites.image;

  this.anchoImagen = parseInt(datosSprites.imagewidth);
  this.altoImagen = parseInt(datosSprites.imageheight);

  this.anchoSprites = parseInt(datosSprites.tilewidth);
  this.altoSprites = parseInt(datosSprites.tileheight);

  this.primerSprite = parseInt(datosSprites.firstgid);

  this.anchoImagenEnSprites = this.anchoImagen / this.anchoSprites;
  this.altoImagenEnSprites = this.altoImagen / this.altoSprites;

  this.totalSprites = this.anchoImagenEnSprites * this.altoImagenEnSprites;

  this.sprites = []

  for(s = 0; s < this.totalSprites; s++){
    let idActual = this.primerSprite - 1 + s;
    this.sprites.push(new Sprite(this.rutaImagen, idActual, this.obtenerPosicionDesdeIdSprite(idActual)));
  }
}

PaletaSprites.prototype.obtenerPosicionDesdeIdSprite = function (idSprite) {
  var y = Math.floor(idSprite / this.anchoImagenEnSprites);
  var x = idSprite % this.anchoImagenEnSprites;

  return new Punto(x * this.anchoSprites, y * this.altoSprites);
};
