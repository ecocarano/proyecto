var usser=document.getElementById('usser');

var pass =document.getElementById('pass');
//elementos de javaScript: eventos//
function inicio(){
  
    if (usser.value=="admin"&& pass.value=="admin"){
        console.log("credenciales validas");
        window.location.href ="Administrador/index.html";
    }else{
        console.log("credenciales invalidadas");
    }

  
}