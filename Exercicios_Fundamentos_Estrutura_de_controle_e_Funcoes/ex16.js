// 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica 

// O programa recebecomo parâmetros dois valores numéricos e uma string referente à operação e a realize com os 
// valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma 
// de 2 e3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  
// Crie um caso default para operações inválidas.

verificaoperacao = (n1, op, n2) => {
    switch (op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            return 'operação invalida';
    }
}

console.log(verificaoperacao(2, '+', 2));
console.log(verificaoperacao(2, '-', 2));
console.log(verificaoperacao(2, '*', 2));
console.log(verificaoperacao(2, '/', 2));
