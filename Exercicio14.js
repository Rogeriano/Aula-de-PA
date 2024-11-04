//João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.
 

var peso_peixe = prompt("Digite o peso do peixe:")
var regulamento = 50
var multa
var ZERO = "ZERO"
var excesso 



if(peso_peixe > regulamento){
    excesso = peso_peixe - regulamento
    multa = excesso * 4.00
    console.log("Voce excedeu o limite, e sua multa é R$:"+ multa)
    alert("Voce excedeu o limite, e sua multa é R$:"+ multa)

}
else{
    console.log("Voce não excedeu o limite")
    alert("Voce não excedeu o limite")
}

