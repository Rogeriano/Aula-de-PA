//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//a. salário bruto.
//b. quanto pagou ao INSS.
//c. quanto pagou ao sindicato.
//d. o salário líquido.
//e. calcule os descontos e o salário líquido, conforme a tabela abaixo:

var valor = parseFloat(prompt("Digite quanto você ganha por hora"))
var horas = parseFloat(prompt("Digite número de horas trabalhadas no mês"))


salario_bruto = horas * valor
console.log("Seu salario bruto mesal é R$: " + salario_bruto)
alert("Seu salario bruto mesal é R$: " + salario_bruto)


inss = salario_bruto * 0.08 
console.log("Seu desconto do INSS é R$: " + inss)
alert("Seu desconto do INSS é R$: " + inss)


sindicato = salario_bruto * 0.05
console.log("Seu desconto do sindicato é R$: " + sindicato)
alert("Seu desconto do sindicato é R$: " + sindicato)

imposto_Renda = salario_bruto * 0.11
console.log("Seu desconto do sindicato é R$: " + imposto_Renda)
alert("Seu desconto do sindicato é R$: " + imposto_Renda)


salario_liquido = salario_bruto - imposto_Renda - sindicato - inss 
console.log("Seu salario líquido é R$: " + salario_liquido)
alert("Seu salario líquido é R$: " + salario_liquido)
