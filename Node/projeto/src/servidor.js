const porta = 4004

const express = require('express')// o express está dentro de node_module
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))/*essa linha significa que para qualquer requisição que vc faça
no seu servidor usando express, ele vai obrigatoriamente passar nees meddleware, comvertendo a urlencoded em objeto
*/

/*app.get('/produtos',(req, res, next) => {
    console.log('Middleware1...');
    next()
})

outro caso seria, assim, o middleware será atendido para todas as requisições
app.use((req, res, next) => {
    res.send({nome:'Notebook', preco:123.45})
})

app.get('/produtos',(req, res, next) => {
    res.send({nome:'Notebook', preco:123.45})//metodo send comverSt para json
    res.send(bancoDeDados.getProdutos())
})// get é uma forma de requisição
*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
}) 

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//json  
})
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
})//qual porta será escutada 