function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // não aceita mais parametros, teria que fazer um objeto
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e=> console.log(e))