let vetorInteiro = [1, 2, 3, 4];
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

concatenar = (...args)=> {
    resultado = []
    for(let i = 0; i<args.length; i++){
        resultado = resultado.concat(args[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
