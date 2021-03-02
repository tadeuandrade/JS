// 17)​ Um funcionário irá receber um aumento de acordo com o seu plano detrabalho, de acordo com a tabela abaixo:

// Plano Aumento
//   A     10%
//   B     15%
//   C     20%

// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo 
// salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.


calculareajuste = (plano, salarioatual) => {
    switch (plano) {
        case 'A':
            return salarioatual + (salarioatual * 0.1);
        case 'B':
            return salarioatual + (salarioatual * 0.15);
        case 'C':
            return salarioatual + (salarioatual * 0.20);
        default:
            return 'Plano invalido'
    }
}

console.log(calculareajuste('A', 800));
console.log(calculareajuste('B', 800));
console.log(calculareajuste('C', 800));


