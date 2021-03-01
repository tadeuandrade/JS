/**07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
 * Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função 
 * deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores 
 * seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada 
 * possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés 
 * do vetor, um string com a frase:“Delta é negativo */



bas = (ax2, bx, c) => {
    let D;
    let v = [];
    D = (bx ** 2) - (4 * ax2 * c);

    v[0] = (-bx + Math.sqrt(D)) / 2 * ax2;
    v[1] = (-bx - Math.sqrt(D)) / 2 * ax2;

    if (D < 0) {
        console.log('Delta é negativo')
    }
    console.log(v[0]);
    console.log(v[1]);

}

bas(1, 3, 2);

