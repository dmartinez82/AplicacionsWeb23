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

function modoNoche(){
    var body = document.querySelector("body");

    //Accediendo directamente al Style
    // body.style.backgroundColor = "black";
    // body.style.color = "white";

    //Cambiando clases
    // var list = body.classList;

    // if (list.contains("modoDia")){
    //     list.replace("modoDia", "modoNoche");
    // } else if (list.contains("modoNoche")){
    //     list.replace("modoNoche", "modoDia");
    // }

    //Cambiando directamente la hoja de estilos
    var estilos = document.getElementById("estilos");
    var botonModo = document.getElementById("botonModo");
    var saludo = document.getElementById("saludo");

    const HOJA_ESTILOS_DIA = "./css/modoDia.css";
    const HOJA_ESTILOS_NOCHE = "./css/modoNoche.css";

    if (estilos.getAttribute("href") == HOJA_ESTILOS_DIA){
        estilos.setAttribute("href", HOJA_ESTILOS_NOCHE);
        botonModo.value="☀️";
        saludo.textContent = "Bona nit!";
    } else if (estilos.getAttribute("href") == HOJA_ESTILOS_NOCHE){
        estilos.setAttribute("href", HOJA_ESTILOS_DIA);
        botonModo.value="🌙";
        saludo.textContent = "Bon dia!";
    }

}