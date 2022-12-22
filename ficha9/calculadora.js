

function operacao()
{
    var num1= parseFloat(document.getElementById("input1").value);
    var operacao= document.getElementById("input2").value
    var num2= parseFloat(document.getElementById("input3").value);

        myDisplayer(calcular(num1,num2,eval(operacao)));


}

function calcular(num1,num2,operacao)
{
    return operacao(num1,num2);
}

function add(num1,num2)
{
    return num1 + num2;
}
function sub(num1,num2)
{
    return num1 - num2;
}
function mult(num1,num2)
{
    return num1 * num2;
}
function divide(num1,num2)
{
    return num1 / num2;
}



function myDisplayer(resultado)
{
    setTimeout(function(){
        document.getElementById("retultado").innerHTML = resultado;
    },3000);
    document.getElementById("retultado").innerHTML = "Esta a pensar";
}
