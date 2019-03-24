function Mapa(objetoJSON){
    this.posicion = new Punto(0,0);
    this.posicionActualizada = new Punto(0,0);

    this.anchoEnTiles = parseInt(objetoJSON.width);
    this.altoEnTiles = parseInt(objetoJSON.height);
    this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
    this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

    this.retangulosColisiones = [];

    this.paletasSprites = [];
    this.iniciarPalestasSprites(objetoJSON.tilesets);
    this.capasTiles = [];
    this.iniciarCapas(objetoJSON.layers);

    this.iniciarRejilla();

    this.limiteMapa = new Rectangulo(this.posicion.x,
        this.posicion.y,
        this.anchoEnTiles * this.anchoDeLosTiles,
        this.altoEnTiles * this.altoDeLosTiles)
}

Mapa.prototype.iniciarPalestasSprites = function (datosCapas) {

    for(let i = 0; i < datosCapas.length; i++){
        this.paletasSprites.push(new PaletaSprites(datosCapas[i]));
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

                if(datosCapas[i].name == "colisiones"){
                    for(let c = 0; c < datosCapas[i].objects.length; c++) {
                        this.retangulosColisiones.push(new Rectangulo(
                            datosCapas[i].objects[c].x,
                            datosCapas[i].objects[c].y,
                            datosCapas[i].objects[c].width,
                            datosCapas[i].objects[c].height
                        ))
                        
                        
                    }
                }
                if(datosCapas[i].name == "localizaciones"){

                }

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
            if(this.capasTiles[ct].tiles[t] == null){
                continue;
            }
            let tileActual = this.capasTiles[ct].tiles[t];

            html += tileActual.html;

        }
    }

    document.getElementById("mapa").innerHTML = html;

    var htmlColisiones = "";

    for(let c = 0; c < this.retangulosColisiones.length; c++){

        htmlColisiones += this.retangulosColisiones[c].html;
    }

    document.getElementById("colisiones").innerHTML = htmlColisiones;

    for(ct = 0; ct < this.capasTiles.length; ct++){
        for(t = 0; t < this.capasTiles[ct].tiles.length; t++){
            if(this.capasTiles[ct].tiles[t] == null){
                continue;
            }
            let tileActual = this.capasTiles[ct].tiles[t];

            tileActual.aplicarEstilos();

        }
    }

    for(let c = 0; c < this.retangulosColisiones.length; c++){
        this.retangulosColisiones[c].aplicarEstilos();
    }


    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

Mapa.prototype.actualizar = function (registroTemporal, posicionJugadorMapaEnPixeles) {
    this.posicion.x = posicionJugadorMapaEnPixeles.x;
    this.posicion.y = posicionJugadorMapaEnPixeles.y;

    this.limiteMapa.x = this.posicion.x;
    this.limiteMapa.y = this.posicion.y;
};

Mapa.prototype.dibujar = function () {
    for(let c = 0; c < this.capasTiles.length; c++){

        for(let i = 0; i < this.capasTiles[c].tiles.length; i++ ){
            this.capasTiles[c].tiles[i].mover(this.posicion.x, this.posicion.y);
        }
    }

    for(let rc = 0; rc < this.retangulosColisiones.length; rc++){
        this.retangulosColisiones[rc].mover(this.posicion.x, this.posicion.y);
    }
};
