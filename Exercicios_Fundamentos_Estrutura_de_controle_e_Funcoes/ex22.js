// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um 
// inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser 
// paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). O retorno deve ser o valor a 
// ser pago para o respectivo mês escolhido.

anuidade = (mes, valor) => {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1;
        return (valor * ((1 + 0.05) ** atraso)).toFixed(2);
    } else {
        return 'Mês invalido'
    }
}
console.log(anuidade(5, 50));