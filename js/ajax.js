var ajax = {
  cargarArchivo: function(ruta, manipularDatos) {
    var peticion = new XMLHttRequest();

    peticion.onreadystatechange = function(){
      if (peticion.readyState == XMLHttRequest.DONE){
        if(peticion.status == 200){
          manipularDatos(JSON.parse(peticion.responseText));
        }else if (peticion.status == 400) {
          console.log(":c");
        }else{
          console.log("?");
        }
      }
    };

    peticion.open("GET", ruta, true);
    peticion.send();
  }
}
