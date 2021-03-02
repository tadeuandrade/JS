// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e 
//retorne trueou false.

isdivisivel = (inteiro) => {
    if (inteiro % 3 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isdivisivel(6));