// Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
//Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados 
//e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
// comprar apenas latas de 18 litros;
// comprar apenas galões de 3,6 litros;
// misturar latas e galões, de forma que o preço seja o menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.


    var area = parseFloat(prompt("Digite a área a ser pintada em metros quadrados:"));

  
   var coberturaPorLitro = 6; 
   var lataCapacidade = 18; 
   var galaoCapacidade = 3.6; 
   var precoLata = 80; 
   var precoGalao = 25; 

  
    areaComFolga = area * 1.1;


    litrosNecessarios = areaComFolga / coberturaPorLitro;

    latasNecessarias = Math.ceil(litrosNecessarios / lataCapacidade);
    custoLatas = latasNecessarias * precoLata;

    galoesNecessarios = Math.ceil(litrosNecessarios / galaoCapacidade);
    custoGaloes = galoesNecessarios * precoGalao;

    latasCombinadas = Math.floor(litrosNecessarios / lataCapacidade);
    galoesCombinados = Math.ceil((litrosNecessarios - (latasCombinadas * lataCapacidade)) / galaoCapacidade);
    custoCombinado = latasCombinadas * precoLata + galoesCombinados * precoGalao;

    melhorCombinacao = "";
    menorCusto = 0;
    
    if (custoCombinado < custoLatas && custoCombinado < custoGaloes) {
        melhorCombinacao = `A melhor opção é: ${latasCombinadas} latas e ${galoesCombinados} galões`;
        menorCusto = custoCombinado;
    } else if (custoLatas < custoGaloes) {
        melhorCombinacao = `A melhor opção é: ${latasNecessarias} latas`;
        menorCusto = custoLatas;
    } else {
        melhorCombinacao = `A melhor opção é: ${galoesNecessarios} galões`;
        menorCusto = custoGaloes;
    }

    alert(`Para pintar ${area.toFixed(2)} m², você precisará de:
    - latas: ${latasNecessarias} latas (R$ ${custoLatas.toFixed(2)})
     ou
    - galões: ${galoesNecessarios} galões (R$ ${custoGaloes.toFixed(2)})

    ${melhorCombinacao} (R$ ${menorCusto.toFixed(2)})`);

    //Obs: Para fazer esse exercicio busquei ajuda no chategpt em alguns codigos, pois estava dando erro a minha logica de progamação.



