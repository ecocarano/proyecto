window.addEventListener("load", function () {
    MostrarProductos();
     MostrarServicios();
 });
 
 var BD = firebase.firestore();
 var BDrestaurantes = BD.collection('Restaurantes');
 //var BDServicio = BD.collection('SERVICIO');
 //var mostrarPro = document.getElementById("carga");
 //var mostrarSer = document.getElementById('carga_ser');
 listaRestaurantes
 var listadoRest = document.getElementById('listaRestaurantes');
 function MostrarRestaurantes(){
     BDProducto.onSnapshot((querySnapshot) => {
     listadoRest.innerHTML="";
         querySnapshot.forEach((doc) => {
             listadoRest.innerHTML+= '<div class="col-md-3" id="carga"><div class="team-member" id="marco"> <center><img class="imgproducto" src="' + doc.data().dirreccion +'"></center></div><br><center><h2>'+ doc.data()+'</h2></center><br><center><h3>$'+doc.data().precio+'</h3></center><center> <button class="btn btn-access">Descripcion</button></center></div> <br><br>';
         });
     });
 }
 
//function MostrarServicios(){
    // BDServicio.onSnapshot((querySnapshot) => {
     //mostrarSer.innerHTML = "";
      //   querySnapshot.forEach((doc) => {
      //       mostrarSer.innerHTML+= '<div class="row"><div class="col-md-4"><div class="team-member"><img class="imgRedonda" src="'+doc.data().dirreccion +'" alt="veterinario en neiva"></div></div><div class="col-md-7"><h4 class="color">'+doc.data().Nombre+'</h4><hr class="section-heading-spacer"><br><p class="section-subheading text-muted">' + doc.data().descripcion +'</p><a href="#contact" class="page-scroll"> <br><button class="btn btn-primary" type="button"><i class="fa fa-check"></i>Separar Cita</button></a></div></div> <br> <br>';
      //   });
    // });
 //}
 