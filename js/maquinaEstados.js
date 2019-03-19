var maquinaEstados = {
  estadoActual: null,
  iniciar: function(){
    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
  },
  cambiarEstado: function(nuevoEstado){
    switch (nuevoEstado) {
      case listadoEstados.CARGANDO:

        break;
        case listadoEstados.MAPAMUNDI:
          maquinaEstados.estadoActual = new EstadoMapaMundi(listadoEstados.MAPAMUNDI);
          break;

    }
  },
  actualizar: function (registroTemporal) {
    maquinaEstados.estadoActual.actualizar(registroTemporal);

  },
  dibujar: function() {
    maquinaEstados.estadoActual.dibujar();
  }
};
