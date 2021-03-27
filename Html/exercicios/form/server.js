const express = require('express')
const app = express()
const bodyParser = require('body-parser')//serve para ter acesso a todos os dados submetidos no back-end

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) =>{
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns. Usuário incluído</h1>')
})

app.post('/usuarios/:id', (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado!</h1>')
})


app.listen(3003, '0.0.0.0')