

function multiply(){
    var numero = document.getElementById("numero").value;
    var resultado = numero * 36;
    document.getElementById("resultado").value = resultado;
}


function muestraPasswd(){
    var elemento = document.getElementById("contraseña");

    if (elemento.getAttribute("type") == "password"){
        elemento.setAttribute("type", "text");
    } else if (elemento.getAttribute("type") == "text"){
        elemento.setAttribute("type", "password");
    }

}