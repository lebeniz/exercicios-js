const fs = require('fs')
const { resolve } = require('path')
const path = require('path')


const lerArquivo = (caminho) => new Promise(resolve => {
    fs.readFile(caminho, (_, conteudo) =>{
        resolve(conteudo.toString())
    })
}) 

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)