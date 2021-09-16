esperarPro = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando callback...')
            resolve()
        }, tempo)
    })
}

//esperarPro(2000).then(esperarPro(4000))

retornarValor = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()
    await esperarPro(1500)
    console.log(`Async/await ${valor} ...`)
    await esperarPro(1500)
    console.log(`Async/await ${valor + 1} ...`)
    await esperarPro(1500)
    console.log(`Async/await ${valor + 2} ...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

//executar().then(console.log)

executarDeVerdade()