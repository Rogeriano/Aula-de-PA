// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

var tamanhoArquivoMb = prompt("Informe o tamanho do arquivo para download (em MB): ")
var tempoDownloadSegundos = prompt("Informe a velocidade da Internet (em Mbps): ")

var tempoDownloadSegundos = (tamanhoArquivoMb * 8) / velocidadeInternetMbps

var tempoDownloadMinutos = tempoDownloadSegundos / 60


console.log("\nO tempo aproximado de download do arquivo é: ", tempoDownloadMinutos, " minutos.")
alert("O tempo aproximado de download do arquivo é: "+ tempoDownloadMinutos, " minutos.")

