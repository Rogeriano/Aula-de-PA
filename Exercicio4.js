//Faça um Programa que peça as 4 notas bimestrais e mostre a média.

var nota1 = parseInt(prompt("Digite sua primeira nota"));
var nota2 = parseInt(prompt("Digite sua segunda nota"));
var nota3 = parseInt(prompt("Digite sua terçeira nota"));
var nota4 = parseInt(prompt("Digite sua quarta nota"));

var media = (nota1 + nota2 + nota3 + nota4)/4;

console.log(media)

alert("Sua media é: " + media);