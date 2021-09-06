//não aceita repetição/não indexado

const { times } = require("lodash")

const time = new Set()
time.add('Vasco')
time.add('São Paulo').add('Palmeiras').add('Corintias')
time.add('Flamengo')
time.add('Vasco')

console.log(time)
console.log(time.size)
console.log(time.has('vasco'))
console.log(time.has('Vasco'))
time.delete('Flamengo')
console.log(time.has('Falmengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet= new Set(nomes)
console.log(nomesSet)
