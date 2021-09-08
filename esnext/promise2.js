// setTimeout(() => {
//     console.log('Executando callback...')

//     setTimeout(() => {
//         console.log('Executando callback...')
//         setTimeout(() => {
//             console.log('Executando callback...')

//         }, 2000)

//     }, 2000)

// }, 2000)

// const time = texto => {
//     setTimeout(() => console.log(texto), 2000)
// }

esperarPro = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando callback...')
            resolve()
        }, tempo)
    })
}

esperarPro().then(esperarPro())
