/*
callbacks: Una función que se ejecutará al finalizar otra
*/

var buclePrincipal = {
  idEjecución: null,
  ultimoRegistro: 0,
  aps: 0, // actualizaciones por segundo
  fps: 0, // Frames por segundo
  iterar: function(registroTemporal){
    buclePrincipal.idEjecución = window.requestAnimationFrame(buclePrincipal.iterar);

    buclePrincipal.actualizar(registroTemporal);
    buclePrincipal.dibujar();

    

    if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
      buclePrincipal.ultimoRegistro = registroTemporal;
      console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
      buclePrincipal.aps = 0;
      buclePrincipal.fps = 0;
    }
  },
  detener: function(){

  },
  actualizar: function(registroTemporal) {
    teclado.reiniciar();
    buclePrincipal.aps++;

  },
  dibujar: function(registroTemporal){
    buclePrincipal.fps++;
  }
}
