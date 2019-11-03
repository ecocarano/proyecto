
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

var Nombres = document.getElementById('nombre');
var Apellido = document.getElementById('apellido');
var Correo = document.getElementById('correo');
var Asunto = document.getElementById('asunto');
var Mensaje = document.getElementById('mensaje');
var Fecha1 = document.getElementById('fecha1');
var Fecha2 = document.getElementById('fecha2');
var Actividad = document.getElementById('actividad');
var Hotel = document.getElementById('actividad');
var Transporte = document.getElementById('transporte');
var db = firebase.firestore();

function addReserva() {
    alert("xxxxxxxxxxxxxxxxxxxx");
    db.collection("Reserva").add({
        Nombres: Nombres.value,
        Apellidos: Apellido.value,
        Correo: Correo.value,
        Asunto: Asunto.value,
        Mensaje: Mensaje.value,
        Fecha1: fecha1.value,
        Fecha2: fecha2.value,
        Actividad: Actividad.value,
        Actividad:Actividad.value,
        Transporte: Transporte.value
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });


}

