funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
                con.log()
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('teste', 0.5)
    .then(v => `Valor ${v}`)
    .then(v => console.log(v),
       // err => console.log(`Erro Esp.: ${err}`)
       )
    .then(() => console.log('QUase Fim'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim'))