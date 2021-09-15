const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

verArquivo = dados => {
    return new Promise((resolve) => {
        // exibirConteudo = (_, conteudo) =>  console.log(conteudo.toString())        
        // resolve(fs.readFile(caminho, exibirConteudo))
        fs.readFile(dados, (_, conteudo) => resolve(conteudo.toString()))
    })
}
verArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor fina é ${conteudo}`)
    .then(console.log)
//exibirConteudo = (_, conteudo) => console.log(conteudo.toString())

//fs.readFile(caminho, exibirConteudo)