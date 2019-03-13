var inicio = {
  iniciadores:[
    dimensiones.iniciar(),
    
    maquinaEstados.iniciar(),
    teclado.iniciar(),
    mando.inicir(),
    buclePrincipal.iterar()
  ],
  iniciarJuego: function () {
    inicio.encadenarInicios(inicio.iniciadores.shift());
  },
  encadenarInicios: function (iniciador) {
    if(iniciador){
      iniciador(() => inicio.encadenarInicios(iniciadores.shift()));
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
  inicio.iniciarJuego();
}, false);
