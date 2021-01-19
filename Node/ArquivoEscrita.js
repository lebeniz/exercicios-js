const fs = require('fs')//file system (Sistema de ficheiros (File system))

const produto ={
    nome: 'celular',
    preco: 1000,
    desconto: 0.15
}

fs.writeFile(__dirname + '/AquivoGerado.json', JSON.stringify(produto ), err => {//JSON.stringify() convert algo em json
    console.log(err || 'Arquivo salvo!');
})