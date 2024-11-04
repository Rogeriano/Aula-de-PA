//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//a) o produto do dobro do primeiro com metade do segundo.
//b) a soma do triplo do primeiro com o terceiro.
//c) o terceiro elevado ao cubo.

var num_inteiro1 = parseFloat(prompt("Digite um número inteiro"))
var num_inteiro2 = parseFloat(prompt("Digite um número inteiro"))
var num_real = parseInt(prompt("Digite um número real"))

console.log(produto = (2 * num_inteiro1) + (num_inteiro2 / 2))
console.log(soma = (3 * num_inteiro1) + num_real )
console.log(cubo = num_real * 3 * 3)

alert("O produto do dobro do primeiro com metade do segundo é: " + produto)
alert("A soma do triplo do primeiro com o terceiro é: " + soma)
alert("O terceiro elevado ao cubo é: " + cubo)