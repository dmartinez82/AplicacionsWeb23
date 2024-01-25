function calculaImpar(){
    const NUMERO = prompt("Introduce un número:", 0);
    var resultadoParOImpar = (NUMERO % 2 == 0)?"par":"impar";
    alert(`El número ${NUMERO} es ${resultadoParOImpar}`);
}

function cuentaKilometros(){
    var kilometros = 0;
    var entra = true;
    var viajes = 0;
    while (entra){
        var input = prompt("Introduce un número:", 0);
        kilometros += parseInt(input);
        if (input == 0){
            entra = false;
        } else{
            viajes++;
        }
    }

    alert(`Has recorrido ${kilometros} kilómetros en ${viajes} viajes. Media de kms: ${kilometros/viajes}`);
}