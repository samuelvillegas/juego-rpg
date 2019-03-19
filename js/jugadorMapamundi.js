function JugadorMapamundi(posicionInicialEnPixeles){
  this.ancho = 16; //tamaño de los sprites
  this.alto = 32;

  this.velocidadMovimiento = 10;

  var centroX = dimensiones.ancho / 2 - this.ancho / 2;
  var centroY = dimensiones.alto / 2 - this.alto / 2;

  this.posicionCentrada = new Punto(centroX, centroY);

  this.posicionEnMapaEnPixeles = posicionInicialEnPixeles;

   this.aplicarEstilos();
}

JugadorMapamundi.prototype.aplicarEstilos = function () {
  var idHTML = "jugador";

  document.getElementById(idHTML).style.background = "blue";
  document.getElementById(idHTML).style.position = "absolute";
  document.getElementById(idHTML).style.width = this.ancho + "px";
  document.getElementById(idHTML).style.height = this.alto + "px";
  document.getElementById(idHTML).style.zIndex = "10";
  document.getElementById(idHTML).style.left = this.posicionCentrada.x + "px";
  document.getElementById(idHTML).style.top = this.posicionCentrada.y + "px";
};

JugadorMapamundi.prototype.actualizar = function (registroTemporal) {
  if(teclado.teclaPulsada(controlesTeclado.arriba)){
    this.posicionEnMapaEnPixeles.y += this.velocidadMovimiento;
  }

  if(teclado.teclaPulsada(controlesTeclado.abajo)){
    this.posicionEnMapaEnPixeles.y -= this.velocidadMovimiento;
  }

  if(teclado.teclaPulsada(controlesTeclado.izquierda)){
    this.posicionEnMapaEnPixeles.x += this.velocidadMovimiento;
  }

  if(teclado.teclaPulsada(controlesTeclado.derecha)){
    this.posicionEnMapaEnPixeles.x -= this.velocidadMovimiento;
  }
};
