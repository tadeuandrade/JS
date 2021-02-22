//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

imprimeoperacao = (n1, n2) => {
    console.log('Soma =', n1 + n2)
    console.log('Subtração =', n1 - n2)
    console.log('Multiplicação =', n1 * n2)
    console.log('Divisão =', n1 / n2)
}
imprimeoperacao(1,2)