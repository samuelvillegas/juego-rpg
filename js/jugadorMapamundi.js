function JugadorMapamundi(posicionInicialEnPixeles){
    this.ancho = 48; //tamaño de los sprites
    this.alto = 48;

    this.velocidadMovimiento = 5;

    var centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2);
    var centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2);

    this.limiteArriba = new Rectangulo(centroX, centroY - 4, this.ancho, 1);
    this.limiteAbajo = new Rectangulo(centroX, centroY + this.alto - 1 + 5, this.ancho, 1);
    this.limiteIzquierda = new Rectangulo(centroX - 4, centroY, 1, this.alto);
    this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1 + 5, centroY, 1, this.alto);

    this.posicionCentrada = new Punto(centroX, centroY);

    posicionInicialEnPixeles.x *= -1;
    posicionInicialEnPixeles.y *= -1;

    this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x,
        this.posicionCentrada.y + posicionInicialEnPixeles.y);
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

JugadorMapamundi.prototype.actualizar = function (registroTemporal, mapa) {
    this.comprobarColisiones(mapa)
};


JugadorMapamundi.prototype.comprobarColisiones = function(mapa){
    var colisionArriba = false;
    var colisionAbajo = false;
    var colisionIzquierda = false;
    var colisionDerecha = false;

    if(!this.limiteArriba.cruza(mapa.limiteMapa)){
        colisionArriba = true;
    }

    if(!this.limiteAbajo.cruza(mapa.limiteMapa)){
        colisionAbajo = true;
    }

    if(!this.limiteIzquierda.cruza(mapa.limiteMapa)){
        colisionIzquierda = true;
    }

    if(!this.limiteDerecha.cruza(mapa.limiteMapa)){
        colisionDerecha = true;
    }

    for(let i = 0; i < mapa.retangulosColisiones.length; i++){

        let traduccionTemporalColisiones = new Rectangulo(
            mapa.retangulosColisiones[i].x + mapa.posicion.x,
            mapa.retangulosColisiones[i].y + mapa.posicion.y,
            mapa.retangulosColisiones[i].ancho,
            mapa.retangulosColisiones[i].alto,
        )

        if(this.limiteArriba.cruza(traduccionTemporalColisiones)){
            colisionArriba = true;
        }

        if(this.limiteAbajo.cruza(traduccionTemporalColisiones)){
            colisionAbajo = true;
        }

        if(this.limiteIzquierda.cruza(traduccionTemporalColisiones)){
            colisionIzquierda = true;
        }

        if(this.limiteDerecha.cruza(traduccionTemporalColisiones)){
            colisionDerecha = true;
        }

    }

    if(!colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)){
        this.posicionEnMapaEnPixeles.y += this.velocidadMovimiento;
    }

    if(!colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)){
       this.posicionEnMapaEnPixeles.y -= this.velocidadMovimiento;
    }

    if(!colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)){
       this.posicionEnMapaEnPixeles.x += this.velocidadMovimiento;
    }

    if(!colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)){
       this.posicionEnMapaEnPixeles.x -= this.velocidadMovimiento;
    }

};