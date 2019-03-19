function Tile(xEnTiles, yEnTiles, z, ancho, alto, sprite){
  this.rectangulo = new Rectangulo(xEnTiles, yEnTiles, ancho, alto);
  this.zIndex = z;
  this.sprite = sprite;
  this.idHTML = "x" + xEnTiles + "y" + yEnTiles + "z" + z;
  this.html = '<div id="'+ this.idHTML +'"></div>';
}

Tile.prototype.aplicarEstilos = function () {
  if(!document.getElementById(this.idHTML)){
    throw("No existe wey" + this.idHTML);
  }

  let tile = document.getElementById(this.idHTML);

  tile.style.position = "absolute";
  tile.style.left = (this.rectangulo.x * this.rectangulo.ancho) + "px";
  tile.style.top = (this.rectangulo.y * this.rectangulo.alto) + "px";
  tile.style.width = this.rectangulo.ancho + "px";
  tile.style.height = this.rectangulo.alto + "px";
  tile.style.zIndex = "" + this.zIndex;
  tile.style.background = "url('"+ this.sprite.rutaHojaOrigen +"')";

  var x = this.sprite.posicionEnHoja.x;
  var y = this.sprite.posicionEnHoja.y;

  tile.style.backgroundPosition = "-" + x + "px -" + y + "px";
  tile.style.backgroundClip = "border-box";
  tile.style.outline = "1px solid transparent";
};

Tile.prototype.mover = function (x, y) {
document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0 )';
};
