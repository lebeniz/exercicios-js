const moduloA = require('../../Moduloa')// ../ sai da pasta B e depois ../ sai da pasta A

//modulo está com a minusculo, porém vai funcionar, apenas no linux que não funciona
//const moduloA = require('../../ModuloA') Forma correata
//const moduloA = require('C:\Users\bruno\Desktop\exercicios-js\Node\ModuloA.js') forma alternativa
console.log(moduloA.ola);

const saldacao = require('saldação')
console.log(saldacao.ola);

const c = require('./PastaC')//nesse caso é preciso usar ./ para referenciar a pasta que procurar o index
console.log(c.ola2);

const http = require('http')//http é um modulo interno do node, assim não precisa informar o caminho especifico
                            // por que existe o index que possui agrupado o caminho
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.write('\n :D')
    res.end()
  }).listen(8080)