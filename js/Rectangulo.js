function Rectangulo(x, y, ancho, alto){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;

    this.idHTML = "colisionx" + x + "y" + y;
    this.html = '<div id="'+ this.idHTML +'"></div>';
}

Rectangulo.prototype.cruza = function (rectangulo) {
    return (this.x < rectangulo.x + rectangulo.ancho &&
        this.x + this.ancho > rectangulo.x &&
        this.y < rectangulo.y + rectangulo.alto &&
        this.alto + this.y > rectangulo.y) ? true : false;
}

Rectangulo.prototype.aplicarEstilos = function () {
    if(!document.getElementById(this.idHTML)){
        throw("No existe wey" + this.idHTML);
    }

    let tile = document.getElementById(this.idHTML);
    let color = "#ff0000"

    tile.style.position = "absolute";
    tile.style.left = this.x + "px";
    tile.style.top = this.y + "px";
    tile.style.width = this.ancho + "px";
    tile.style.height = this.alto + "px";
    tile.style.zIndex = "5";
    tile.style.backgroundColor = color;

};

Rectangulo.prototype.mover = function (x, y) {
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0 )';
};


