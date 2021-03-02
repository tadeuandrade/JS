// 19) O cardápio de uma lanchonete é o seguinte:
// Código  Descrição do Produto   Preço
// 100     Cachorro Quente        R$3,00
// 200     Hambúrguer Simples     R$4,00
// 300     Cheeseburguer          R$5,50
// 400     Bauru                  R$7,50
// 500     Refrigerante           R$3,50
// 600     Suco                   R$2,80

// Implemente uma  função que receba como parâmetros:

// o código do item pedido,
//     a quantidade
// e calcule o valora ser pago por aquele lanche.
// Considere que a cada execução somente será calculado um item.
// Use o comando switch.Crie um caso default para produto não existente.

verificapedido = (item, qtd) => {
    switch (item) {
        case 100:
            return qtd + ' Cachorro Quente, Total a pagar R$' + (qtd * 3.00);
        case 200:
            return qtd + ' Hambúrguer Simples, Total a pagar R$' + (qtd * 4.00);
        case 300:
            return qtd + ' Cheeseburguer, Total a pagar R$' + (qtd * 5.50);
        case 400:
            return qtd + ' Bauru, Total a pagar R$' + (qtd * 7.50);
        case 500:
            return qtd + ' Refrigerante, Total a pagar R$' + (qtd * 3.50);
        case 600:
            return qtd + ' Suco, Total a pagar R$' + (qtd * 2.80);
        default:
            return 'Produto inexistente'
    }
}

console.log(verificapedido(100, 2));
console.log(verificapedido(200, 2));
console.log(verificapedido(300, 2));
console.log(verificapedido(400, 2));
console.log(verificapedido(500, 2));
console.log(verificapedido(600, 2));