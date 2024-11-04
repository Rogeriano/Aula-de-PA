// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

var area = parseFloat(prompt("Digite o M² da área que deseja pintar" ))
var coberturaPorLitro = 3
var litrosPorLata = 18
var precoPorLata = 80

litros = area / coberturaPorLitro

latas = Math.ceil(litros / litrosPorLata)

precoTotal = latas * precoPorLata

console.log("Quantidade de latas de tinta a serem compradas: ", latas)
alert("Quantidade de latas de tinta a serem compradas: "+ latas + " Litros")
console.log("Preço total: R$ ", precoTotal)
alert("Preço total: R$ "+ precoTotal)

