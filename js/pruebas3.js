function multiply(valor){
    var numero = document.getElementById("numero").value;
    var resultado = numero * valor;
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

function cambiaURL(){
    window.location = "http://www.google.es"
}


function calculaOperacion(){
    var num1 = document.getElementById("num1").value;
    var operacion = document.getElementById("operacions").value;

    var resultado;
    if (operacion == "raiz"){
        resultado = Math.sqrt(num1);
        if (!Number.isInteger(resultado)){
            resultado = resultado.toFixed(3);
        }
    } else{
        resultado = "Selecciona una operación"
    }

    document.getElementById("resultadoOperaciones").textContent = resultado;
}

function canviColor(){
    var h1 = document.querySelector("#titulo");

    var red = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*255);
    var blue = Math.round(Math.random()*255);

    h1.style.color = `rgb(${red}, ${green}, ${blue})`;
}