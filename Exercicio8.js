//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

var valor = parseFloat(prompt("Digite quanto você ganha por hora"))
var horas = parseFloat(prompt("Digite número de horas trabalhadas no mês"))

res = horas * valor

console.log(res)
alert("Seu salario bruto mesal é: " + res)
