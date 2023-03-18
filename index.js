function somar() {
    var numero = document.getElementById("numero").value;
    var numero1 = document.getElementById("numero1").value;
    var resultado = parseFloat(numero) + parseFloat(numero1);
    document.getElementById("resultado").value = resultado;
}

function subtrair() {
    var numero = document.getElementById("numero").value;
    var numero1 = document.getElementById("numero1").value;
    var resultado = parseFloat(numero) - parseFloat(numero1);
    document.getElementById("resultado").value = resultado;
}

function multiplicar() {
    var numero = document.getElementById("numero").value;
    var numero1 = document.getElementById("numero1").value;
    var resultado = parseFloat(numero) * parseFloat(numero1);
    document.getElementById("resultado").value = resultado;
}

function dividir() {
    var numero = document.getElementById("numero").value;
    var numero1 = document.getElementById("numero1").value;
    var resultado = parseFloat(numero) / parseFloat(numero1);
    document.getElementById("resultado").value = resultado;
}