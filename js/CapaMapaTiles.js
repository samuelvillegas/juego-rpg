function CapaMapaTiles(datosCapa, indiceZ, anchoDeLosTiles, altoDeLosTiles, paletasSprites){
  this.anchoEnTiles = parseInt(datosCapa.width);
      this.altoEnTiles = parseInt(datosCapa.height);

      this.x = parseInt(datosCapa.x);
      this.y = parseInt(datosCapa.y);

      this.z = indiceZ;
      this.tiles = [];

      for(y = 0; < this.altoEnTiles; y++){
        for(x = 0; x < this.anchoEnTiles; x++){
          let idSpriteActualSobreUno =  datosCapa.data[x + y * this.anchoEnTiles];
          if(idSpriteActualSobreUno == 0){
            this.tiles.push(null);
          }else{
            let spriteActual = this.encontrarSpriteEnPaletaPorId(idSpriteActualSobreUno - 1, paletasSprites);

            this.tiles.push(new Tile(x, y, indiceZ, anchoDeLosTiles, spriteActual));
          }
        }
      }

}

CapaMapaTiles.prototype.encontrarSpriteEnPaletaPorId = function (idSprite, paletasSprites) {
  for(s = 0; s < paletasSprites.length; s++){
    if(idSprite >= paletasSprites[s].primerSprite - 1 &&
      idSprite < paletasSprites[s].totalSprites + paletasSprites[s].primerSprite + 1){
        return paletasSprites[s].sprite[Math.abs.(paletasSprites[s].primerSprite - 1 - idSprite)]
    }
  }
  throw("El Id no existe " + idSprite);
};
