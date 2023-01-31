function fondo(){
    if(document.getElementById("boton").innerHTML=="Fondo Oscuro"){
    document.getElementById("parrafos").style.background="black";
    document.getElementById("parrafos").style.color="white";
    document.getElementById("boton").innerHTML="Fondo Claro";
    }else{
            document.getElementById("parrafos").style.background="White";
            document.getElementById("parrafos").style.color="Black";
            document.getElementById("boton").innerHTML="Fondo Oscuro";
    }
}