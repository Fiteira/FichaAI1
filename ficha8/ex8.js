

var numberRegex = /^\d+$/;

function multiplicar()
{
    const  num1 = document.getElementById('num1').value;
    const  num2 = document.getElementById('num2').value;
    
    if((numberRegex.test(num1)) && (numberRegex.test(num2)))
    {
        var resultado;
        resultado=num1*num2;
        document.getElementById("resultado").innerHTML = resultado;
    }
    else
        alert("Campos Errados!");
}
function dividir()
{
    const  num1 = document.getElementById('num1').value;
    const  num2 = document.getElementById('num2').value;

    var resultado;
    resultado=num1/num2;
    document.getElementById("resultado").innerHTML = resultado;
}
