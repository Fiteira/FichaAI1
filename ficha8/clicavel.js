var clicked=true;
function aviso_button()
{
    if(clicked)
     {
        alert("verdadeiro"); 

     }
    else
    {
        alert("falso");

    }
   clicked = !clicked;  
}

var dia_index = 0;
var dia_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta","Sexta", "Sábado"];
function aviso_semana_button()
{
    alert(dia_da_semana[dia_index]);
    dia_index++;
    if(dia_index == 7)
        dia_index=0;
}

function adivinhe()
{
    var num_value = document.getElementById('num');
    var numero=num_value.value;
    var random =Math.floor(Math.random()*11);

    if (!isNaN(numero) && (numero >= 0 && numero <= 10))
    {
        if(numero != random)
        {
            alert("ERRO! O numero é " + random);
            num_value.value = " ";
        }else
        {
            document.getElementById('num').disabled = true;
            alert("Acertou!!!");
        }
        
    }
    else
    {
        alert("Numero tem que estar entre 0 a 10");
    }    
}
function adivinhe2()
{
    var num_value = document.getElementById('num');
    var numero=num_value.value;
    var random =Math.floor(Math.random()*11);

    if (!isNaN(numero) && (numero >= 0 && numero <= 100))
    {
        if(numero != random)
        {
            alert("ERRO! O numero é " + random);
            num_value.value = " ";
        }else
        {
            document.getElementById('num').disabled = true;
            alert("Acertou!!!");
        }
        
    }
    else
    {
        alert("Numero tem que estar entre 0 a 100");
    }    
}

function multiplicar()
{
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado;
    resultado=num1*num2;
    document.getElementById("resultado").innerHTML = resultado;
}
function dividir()
{
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado;
    resultado=num1/num2;
    document.getElementById("resultado").innerHTML = resultado;
}
