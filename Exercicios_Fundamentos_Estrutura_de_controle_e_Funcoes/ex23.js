// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, 
// considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas 
// três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e"REPROVADO" se a 
// média for menor que 5. Repita a operação até que o código lido seja negativo.

verificanota = (aluno, notas) => {
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i]);
    }
}

verificanota(1, [5, 2, 6]);