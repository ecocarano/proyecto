// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlW-OyRHxIg66YaAR62o1AuysmkBWTPBw",
  authDomain: "ecocarano-643c5.firebaseapp.com",
  databaseURL: "https://ecocarano-643c5.firebaseio.com",
  projectId: "ecocarano-643c5",
  storageBucket: "ecocarano-643c5.appspot.com",
  messagingSenderId: "1067707396374",
  appId: "1:1067707396374:web:09995132048a5a4c752037"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// inicializacion de variables

var nombre = document.getElementById('nombre');
var direccion = document.getElementById('direccion');
var correo = document.getElementById('correo');
var telefono = document.getElementById('telefono');


var NombreT = document.getElementById('NombreTransporte');
var tipoTransporte = document.getElementById('tipoTransporte');
var lugarInicio = document.getElementById('lugarInicio');
var lugarDestino = document.getElementById('lugarDestino');
var valor = document.getElementById('Valor');

var NombreActividad = document.getElementById('nombreActividad');
var descripcionAct = document.getElementById('DescripcionActividad');

var listadoHotel = document.getElementById('listadoHoteles');
var listadoActividad = document.getElementById('listadoActividades');
var listTransporte = document.getElementById('listadoTransporte');
var listadoRestaurantes = document.getElementById('listaRestaurantes');

var db = firebase.firestore();
var db1 = firebase.firestore();
var db2 = firebase.firestore();

var idHotel = "";
var idActividad= "";
var idTransporte= "";
var idRestaurante = "";

var btnGuardar = document.getElementById('guardar');
var btnActualizar = document.getElementById('actualizar');
var btnGuardarActividad = document.getElementById('guardarActividad');
var btnActualizarActividad = document.getElementById('actualizarAct');
var btnGuardarTransporte= document.getElementById('guardarTr');
var btnActualizarTransporte = document.getElementById('actualizarTransporte');
var btnGuardarRestaurante= document.getElementById('guardarRest');
var btnActualizarRestaurante = document.getElementById('actualizarRest');
// Administracion de Hoteles

function addHotel() {

  db.collection("Hoteles").add({

    nombreHotel: nombre.value,
    Direccion: direccion.value,
    Correo: correo.value,
    Telefono: telefono.value
  })
    .then(function (docRef) {
      console.log("Documento agregado Correctamente ", docRef.id);
      listarHoteles();
    })
    .catch(function (error) {
      console.error("No ha sido poible agregar el registro ", error);
    });

}

//Metodo para listar las noticias almacenadas en la BD
function listarHoteles() {
  listadoHotel.innerHTML = "";
  db.collection("Hoteles").get().then((querySnapshot) => {
    querySnapshot.forEach(async (doc) => {
      listadoHotel.innerHTML += `
              <tr>
                  <td>${doc.data().nombreHotel}</td>
                  <td>${doc.data().Direccion}</td>
                  <td>${doc.data().Correo}</td>
                  <td>${doc.data().Telefono}</td>
                  
                  <td>
                  <button  type="button" onclick="LeerHotel('${doc.id}')" class="btn btn-default fas fa-edit"></button>
                  <button  type="button" onclick="BorrarHotel('${doc.id}')"  class="btn btn-default fas fa-trash-alt"></button>
                  </td>
              </tr>
          `;
    });
  });
}
listarHoteles();

function LeerHotel(id) {;
  idHotel = id;
  btnGuardar.classList.add('d-none');
  btnActualizar.classList.remove('d-none');
  db.collection("Hoteles").doc(id)
      .onSnapshot(async function(doc) {
          nombre.value = doc.data().nombreHotel;
          direccion.value = doc.data().Direccion;
          correo.value = doc.data().Correo;
          telefono.value = doc.data().Telefono;
      });
}

function actualizarHotel() {
  var dato = db.collection("Hoteles").doc(idHotel);

  dato.update({
          nombreHotel: nombre.value,
          Direccion : direccion.value,
          Correo : correo.value,
          Telefono : telefono.value
      })
      .then(function() {
          console.log('Hotel actualizado');
          btnGuardar.classList.remove('d-none');
          btnActualizar.classList.add('d-none');
          listarHoteles();
      })
      .catch(function(err) {
          console.error("Error: ", err);
      })
}

function BorrarHotel(id) {
  var dato = db.collection("Hoteles").doc(id).delete()
      .then(function() {
          console.log("Hotel Eliminado!");
          listarHoteles();
      }).catch(function(error) {
          console.error("Error: ", error);
      });

}

// Administracion de Actividades

function addActividad() {
  db.collection("Actividades").add({
    nombreActividad: NombreActividad.value,
    Descripcion: descripcionAct.value
  })
    .then(function (docRef) {
      console.log("Registrado correctamente... ", docRef.id);
      listarActividades();
    })
    .catch(function (error) {
      console.error("No ha sido posible completar el registro ", error);
    });

}

function listarActividades() {
  listadoActividad.innerHTML = "";
  db.collection("Actividades").get().then((querySnapshot) => {
    querySnapshot.forEach(async (doc) => {
      listadoActividad.innerHTML += `
              <tr>
                  <td>${doc.data().nombreActividad}</td>
                  <td>${doc.data().Descripcion}</td>
                  
                  <td>
                  <button  type="button" onclick="LeerActividad('${doc.id}')" class="btn btn-default fas fa-edit"></button>
                  <button  type="button" onclick="BorrarActividad('${doc.id}')"  class="btn btn-default fas fa-trash-alt"></button>
                  </td>
              </tr>
          `;
    });
  });
}
listarActividades();

function LeerActividad(id) {;
  idActividad = id;
  btnGuardarActividad.classList.add('d-none');
  btnActualizarActividad.classList.remove('d-none');
  db.collection("Actividades").doc(id)
      .onSnapshot(async function(doc) {
          NombreActividad.value = doc.data().nombreActividad;
          descripcionAct.value = doc.data().Descripcion;
      });
}

function actualizarActividad() {
  alert("Actualizar Actividad?");
  var dato = db.collection("Actividades").doc(idActividad);
   
  dato.update({
          nombreActividad: NombreActividad.value,
          Descripcion : descripcionAct.value
        
      })
      .then(function() {
          console.log('Actividad actualizada');
          btnGuardarActividad.classList.remove('d-none');
          btnActualizarActividad.classList.add('d-none');
          listarActividades();
      })
      .catch(function(err) {
          console.error("Error: ", err);
      })
}

function BorrarActividad(id) {
  var dato = db.collection("Actividades").doc(id).delete()
      .then(function() {
          console.log("Actividad Eliminada!");
          listarActividades();
      }).catch(function(error) {
          console.error("Error: ", error);
      });

}

// Administracion de Transporte  
function addTransporte() {

  db1.collection("Transportes").add({

    nombreTrans: NombreT.value,
    tipoTrans: tipoTransporte.value,
    lugarI: lugarInicio.value,
    lugarD: lugarDestino.value,
    valor: valor.value
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      listarTransporte();
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

}

function listarTransporte() {
  listTransporte.innerHTML = "";
  db.collection("Transportes").get().then((querySnapshot) => {
    querySnapshot.forEach(async (doc) => {
      listTransporte.innerHTML += `
              <tr>
                  <td>${doc.data().nombreTrans}</td>
                  <td>${doc.data().tipoTrans}</td>
                  <td>${doc.data().lugarI}</td>
                  <td>${doc.data().lugarD}</td>
                  <td>${doc.data().valor}</td>
                  <td>
                  <button  type="button" onclick="LeerTransporte('${doc.id}')" class="btn btn-default fas fa-edit"></button>
                  <button  type="button" onclick="BorrarTransporte('${doc.id}')"  class="btn btn-default fas fa-trash-alt"></button>
                  </td>
              </tr>
          `;
    });
  });
}
listarTransporte();

function LeerTransporte(id) {;
  idTransporte = id;
  btnGuardarTransporte.classList.add('d-none');
  btnActualizarTransporte.classList.remove('d-none');
  db.collection("Transportes").doc(id)
      .onSnapshot(async function(doc) {
          nombreTrans.value = doc.data().NombreT;
          tipoTrans.value = doc.data().tipoTransporte;
          lugarI.value = doc.data().lugarInicio;
          lugarD.value = doc.data().lugarDestino;
          valor.value = doc.data().valor;
      });
}

function actualizarTransp() {
  var dato = db.collection("Transportes").doc(idTransporte);

  dato.update({
          nombreTrans: NombreT.value,
          tipoTrans : tipoTransporte.value,
          lugarI : lugarInicio.value,
          lugarD : lugarDestino.value,
          valor : valor.value
      })
      .then(function() {
          console.log('Transporte actualizado');
          btnGuardarTransporte.classList.remove('d-none');
          btnActualizarTransporte.classList.add('d-none');
          listarTransporte();
      })
      .catch(function(err) {
          console.error("Error: ", err);
      })
}

function BorrarTransporte(id) {
  var dato = db.collection("Transportes").doc(id).delete()
      .then(function() {
          console.log("Transporte Eliminado!");
          listarTransporte();
      }).catch(function(error) {
          console.error("Error: ", error);
      });

}

// Administracion de Restaurantes

function addRestaurante() {

  db.collection("Restaurantes").add({
      nombreRestaurante: nombre.value,
      Direccion: direccion.value,
      Correo: correo.value,
      Telefono: telefono.value
  })
      .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          listarRestaurante();
      })
      .catch(function (error) {
          console.error("Error adding document: ", error);
      });

}
function listarRestaurante() {
  listadoRestaurantes.innerHTML = "";
  db.collection("Restaurantes").get().then((querySnapshot) => {
    querySnapshot.forEach(async (doc) => {
      listadoRestaurantes.innerHTML += `
              <tr>
                  <td>${doc.data().nombreRestaurante}</td>
                  <td>${doc.data().Direccion}</td>
                  <td>${doc.data().Correo}</td>
                  <td>${doc.data().Telefono}</td>
                  <td>
                  <button  type="button" onclick="LeerRestaurante('${doc.id}')" class="btn btn-default fas fa-edit"></button>
                  <button  type="button" onclick="BorrarRestaurante('${doc.id}')"  class="btn btn-default fas fa-trash-alt"></button>
                  </td>
              </tr>
          `;
    });
  });
}
listarRestaurante();

function LeerRestaurante(id) {;
  idRestaurante = id;
  btnGuardarRestaurante.classList.add('d-none');
  btnActualizarRestaurante.classList.remove('d-none');
  db.collection("Restaurantes").doc(id)
      .onSnapshot(async function(doc) {
          nombre.value = doc.data().nombreRestaurante;
          direccion.value = doc.data().Direccion;
          correo.value = doc.data().Correo;
          telefono.value = doc.data().Telefono;
 
      });
}

function ActualizarRestaurante() {

  var dato = db.collection("Restaurantes").doc(idRestaurante);
  alert("wewedwe");
  dato.update({
          nombreRestaurante: nombre.value,
          Direccion : direccion.value,
          Correo : correo.value,
          Telefono : telefono.value
       
      })
      .then(function() {
          console.log('Restaurante actualizado');
          btnGuardarRestaurante.classList.remove('d-none');
          btnActualizarRestaurante.classList.add('d-none');
          listarRestaurante();
      })
      .catch(function(err) {
          console.error("Error: ", err);
      })
}

function BorrarRestaurante(id) {
  var dato = db.collection("Restaurantes").doc(id).delete()
      .then(function() {
          console.log("Restaurante Eliminado!");
          listarRestaurante();
      }).catch(function(error) {
          console.error("Error: ", error);
      });

}
(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict
