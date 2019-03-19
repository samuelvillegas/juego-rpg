<?php

$fecha = new DateTime();

$fuentes = [
  "js/dimensiones.js",
  "js/ListadoEstados.js",
  "js/Rectangulo.js",
  "js/JugadorMapamundi.js",
  "js/Sprite.js",
  "js/Tile.js",
  "js/CapaMapaTiles.js",
  "js/PaletaSprites.js",
  "js/listadoEstados.js",
  "js/ajax.js",
  "js/EstadoMapamundi.js",
  "js/maquinaEstados.js",
  "js/Punto.js",
  "js/Mapa.js",
  "js/controlesTeclado.js",
  "js/teclado.js",
  "js/buclePrincipal.js",
  "js/inicio.js"
];

foreach ($fuentes as $fuente) {
  printf('<script type="text/javascript" src="%s?%s"></script>', $fuente, $fecha->getTimestamp());
}
