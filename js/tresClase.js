var tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var jugador = "X";

function pintaTablero(){
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            document.getElementById(i+""+j).textContent = tablero[i][j];
        }
    }
}

function actualizaTablero(fila, columna){

    if (tablero[fila][columna] == ""){
        tablero[fila][columna] = jugador;

        if (jugador == "X") jugador = "O";
        else if (jugador == "O") jugador = "X";
    
        pintaTablero();
    }
}

function resetea(){
    tablero = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    pintaTablero();
}
