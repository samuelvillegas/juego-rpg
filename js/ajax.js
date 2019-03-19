var ajax = {
  cargarArchivo: function(ruta, manipularDatos) {
    var peticion = new XMLHttpRequest();

    peticion.onreadystatechange = function(){
      if (peticion.readyState == XMLHttpRequest.DONE){
        if(peticion.status == 200){
          manipularDatos(JSON.parse(peticion.responseText));
        }else if (peticion.status == 400) {
          console.log(":c");
        }else{
          console.log("No se encotró el archivo");
        }
      }
    };

    peticion.open("GET", ruta, true);
    peticion.send();
  }
}
