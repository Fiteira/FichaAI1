var point = localStorage.getItem("Point") ? localStorage.getItem("Point") : 1;
var index = 1;

mostrarLista();

function operacao() {
    var num1 = parseFloat(document.getElementById("input1").value);
    var operacao = document.getElementById("input2").value
    var num2 = parseFloat(document.getElementById("input3").value);

    //myDisplayer(calcular(num1,num2,eval(operacao)));

    try {
        return calcular(num1, num2, eval(operacao));
    } catch (e) {
        return undefined;
    }

}




function calcular(num1, num2, operacao) {
    return operacao(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}


/*
function myDisplayer(resultado) {
    setTimeout(function () {
        document.getElementById("retultado").innerHTML = resultado;
    }, 3000);
    document.getElementById("retultado").innerHTML = "Esta a pensar";
}
*/

function myPromiseGenerator() {
    return new Promise(function (resolver, rejeitar) {
        var resultado = operacao();
        if (resultado != undefined)
            resolver(resultado);
        else
            rejeitar("Função não definida");

    }).then(
        function (value) {
            guardarValor(value);
        }).catch(function (error) {
            guardarValor(error);
        });
}

function guardarValor(value) {
    var key = "resultado" + (point++);
    localStorage.setItem(key, value);
    localStorage.setItem("Point", point);

    mostrarLista();

}

function limparDados() {
    localStorage.clear();
    localStorage.setItem("Point", 1);
    index = 1;
    point = 1;
    document.getElementById("lista-resultados").innerHTML = "";
}

function mostrarLista() {

    var i;
    var lastPoint = localStorage.getItem("Point");

    for (i = index; i < lastPoint; i++) {
        var currentPoint = "resultado" + i;
        var value = localStorage.getItem(currentPoint);

        var node = document.createElement('li');
        node.appendChild(document.createTextNode(value));
        document.getElementById("lista-resultados").appendChild(node);
    }
    index = i;
}