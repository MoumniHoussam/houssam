document.getElementById("parrafo").addEventListener("click", funcion);
document.getElementById("parrafo2").addEventListener("click", funcion2);
document.getElementById("parrafo3").addEventListener("click", funcion3);
document.getElementById("parrafo4").addEventListener("click", funcion4);

function funcion(){
    var parrafo = document.getElementById("parrafo").innerHTML;
    var tiempo = document.getElementsByTagName("h2")[0].innerHTML;
    var lista = document.getElementsByTagName("ul")[0];
    var li = lista.getElementsByTagName("li");
    var datos = [];
    for(var i=0;i<li.length;i++){
        datos.push(li[i].innerHTML);
    }
    var informacion = "Has elegido "+parrafo+" que se imparte en turno de "+tiempo+"<br>Los nº de grupos que se imparten son "+li.length+": "+datos
    document.getElementById("info").innerHTML=informacion;
}
function funcion2(){
    var parrafo = document.getElementById("parrafo2").innerHTML;
    var tiempo = document.getElementsByTagName("h2")[0].innerHTML;
    var lista = document.getElementsByTagName("ul")[1];
    var li = lista.getElementsByTagName("li");
    var datos = [];
    for(var i=0;i<li.length;i++){
        datos.push(li[i].innerHTML);
    }
    var informacion = "Has elegido "+parrafo+" que se imparte en turno de "+tiempo+"<br>Los nº de grupos que se imparten son "+li.length+": "+datos
    document.getElementById("info").innerHTML=informacion;
}
function funcion3(){
    var parrafo = document.getElementById("parrafo3").innerHTML;
    var tiempo = document.getElementsByTagName("h2")[1].innerHTML;
    var lista = document.getElementsByTagName("ul")[2];
    var li = lista.getElementsByTagName("li");
    var datos = [];
    for(var i=0;i<li.length;i++){
        datos.push(li[i].innerHTML);
    }
    var informacion = "Has elegido "+parrafo+" que se imparte en turno de "+tiempo+"<br>Los nº de grupos que se imparten son "+li.length+": "+datos
    document.getElementById("info").innerHTML=informacion;
}
function funcion4(){
    var parrafo = document.getElementById("parrafo4").innerHTML;
    var tiempo = document.getElementsByTagName("h2")[1].innerHTML;
    var lista = document.getElementsByTagName("ul")[3];
    var li = lista.getElementsByTagName("li");
    var datos = [];
    for(var i=0;i<li.length;i++){
        datos.push(li[i].innerHTML);
    }
    var informacion = "Has elegido "+parrafo+" que se imparte en turno de "+tiempo+"<br>Los nº de grupos que se imparten son "+li.length+": "+datos
    document.getElementById("info").innerHTML=informacion;
}