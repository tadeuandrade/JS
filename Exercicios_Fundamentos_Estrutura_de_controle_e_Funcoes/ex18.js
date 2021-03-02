// 18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
// Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’


porextenso = (numero) => {
    switch (numero) {
        case 0:
            return 'Zero';
        case 1:
            return 'Um';
        case 2:
            return 'Dois';
        case 3:
            return 'Tres';
        case 4:
            return 'Quatro';
        case 5:
            return 'Cinco';
        case 6:
            return 'Seis';
        case 7:
            return 'Sete';
        case 8:
            return 'Oito';
        case 9:
            return 'Nove';
        case 10:
            return 'Dez';

        default:
            return 'Número fora do intervalo.'
    }
}

console.log(porextenso(0));
console.log(porextenso(1));
console.log(porextenso(2));
console.log(porextenso(11));