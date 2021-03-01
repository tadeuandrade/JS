// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro 
// de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é 
// maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 
// etc..”, 
// escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o 
// número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do 
// pior jogo).





verifica = (x) => {
    let string_to_array = x.split(",");
    let maior = 0;
    let menor = 0;
    let countmaior = 0;
    let retor = [];
    let posimenor = 0;
    for (let i = 0; i < string_to_array.length; i++) {
        if (maior < string_to_array[i]) {
            maior = string_to_array[i];
            countmaior++;
        } else if (menor > string_to_array[i] || menor == 0) {
            menor = string_to_array[i];
            posimenor = i;
        }
    }
    retor.push('Bateu recorde ' + countmaior);
    retor.push('Posicao Menor pontuação ' + (posimenor + 1));

    return retor;
}

console.log(verifica("2, 5, 1, 9"));
