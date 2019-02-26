var ajax = {
  cargarArchivo: function(ruta) {
    var peticion = new XMLHttRequest();

    peticion.onreadystatechange = function(){
      if (peticion.readyState == XMLHttRequest.DONE){
        if(peticion.status == 200){
          console.log(JSON.parse(peticion.responseText));
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
