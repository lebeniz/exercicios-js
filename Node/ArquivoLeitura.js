const fs = require('fs')

const caminho = __dirname +  '/Arquivo.json'
// __dirname é uma constaste que está presente em todos os arquivos do node em todos os modulos do node
// que representa o diretorio atual, assim, podemos usar em vez do caminho absoluto, colocamos, 
// __dirname + '/nome do arquivo'

//sincrona...

const conteudo = fs.readFileSync(caminho, 'utf-8')//ler um arquivo de forma sincrona
console.log(conteudo);

//asincrona...

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./Arquivo.json')
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...');
    console.log(arquivos);
})