// 14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua 

// três casos: 

// Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
// Caso kiwi, retorne: “Estamos comescassez de kiwis”. 
// Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 

// Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console

verificatipo = (fruta) => {
    switch (fruta) {
        case 'maça':
            return 'Não vendemos esta fruta aqui';
        case 'kiwi':
            return 'Estamos comescassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Fruta invalida';
    }
}

console.log(verificatipo('kiwi'));