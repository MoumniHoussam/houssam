function anadir(){
    var texto = document.getElementById("texto").value;
    var li = document.createElement("li");
    li.innerHTML=texto;
    document.getElementById("lista").appendChild(li);
}
function eliminar(){
    const list = document.getElementById("lista");
    list.removeChild(list.lastElementChild);
}
function eliminarPrimero(){
    const list = document.getElementById("lista");
    list.removeChild(list.firstElementChild);
}