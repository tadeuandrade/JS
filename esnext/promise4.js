gerar = (min, max, tempo) => {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve) => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)

    })
}


geraVarios = () => {
    return Promise.all([
        gerar(1, 60, 1000),
        gerar(1, 60, 4000),
        gerar(1, 60, 500),
        gerar(1, 60, 100),
        gerar(1, 60, 1500),
    ])
}

console.time('promise')
geraVarios().then(console.log)
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })



// gerar(60, 1)
//     .then(num => num * 10)
//     .then(numx10 => `O número gerado foi ${numx10}`)
//     .then(console.log)