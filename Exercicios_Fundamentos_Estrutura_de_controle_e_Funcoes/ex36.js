multiplica = (numeros, multiplicador) => {
    let resultados = [];
    numeros.forEach(element => {
        resultados.push(element * multiplicador);
    });
    return resultados;
}

multiplicase = (numeros, multiplicador) => {
    let resultados = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 5) {
            resultados.push(numeros[i] * multiplicador);
        }
    }
    return resultados;
}

console.log(multiplica([1, 7, 3, 4, 5], 2));