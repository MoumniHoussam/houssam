function anadir(){
    var texto = document.getElementById("texto").value;
    var li = document.createElement("li");
    li.innerHTML=texto;
    document.getElementById("lista").appendChild(li);
}