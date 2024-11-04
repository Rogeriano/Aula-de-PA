//Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//a) Para homens: (72.7*h) - 58
//b) Para mulheres: (62.1*h) - 44.7 (h = altura)
//c) Peça o peso da pessoa e informe se ela está dentro, acima ou abaixo do peso.

var altura = parseFloat(prompt("Digite sua altura: "))
var sexo = prompt("Informe seu sexo (M para masculino, F para feminino):")
var pesoIdeal 

if (sexo = "m" || sexo == "M"){
    pesoIdeal = (72.7 * altura) - 58;
    }

else if(sexo = "f" || sexo == "F"){
    pesoIdeal = (62.1 * altura) - 44.7
    }

    
var peso = parseFloat(prompt("Informe seu peso: "))

if (peso < pesoIdeal)
{
    console.log("Você está abaixo do peso.")
}
else if(peso > pesoIdeal)
{
    console.log("Você está acima do peso.")
}
else
{
    console.log("Você está no peso ideal.")
}






