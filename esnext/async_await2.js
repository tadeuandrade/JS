gerar = (min, max, numerosProidbidos) => {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min

        if (numerosProidbidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdn, tentativa = 0) {
    try {
        const numeros = []
        for (let _ of Array(qtdn).fill()) {
            numeros.push(await gerar(1, 60, numeros))
            //await gerar(1, 60, numeros)
        }
        return numeros
    } catch (e) {
        if (tentativa > 10) {
            throw "Não deu certo!!!"
        } else {
            return gerarMegaSena(qtdn, tentativa + 1)
        }

    }
}

gerarMegaSena(15).then(console.log).catch(console.log)

//gerar(1, 5, [1, 2, 4]).then(console.log).catch(console.log)
