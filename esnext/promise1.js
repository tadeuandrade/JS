const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]

let p = new Promise((resolve) => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})//.then(primeiroElemento)
// .then(primeiraLetra)
// .then(console.log)

p.then(primeiroElemento)
    .then(primeiraLetra)
    .then(console.log)