

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (resolve) {//uma função que cumpri uma promessa
    resolve(['Ana', 'Bia', 'Cia'])
})
    .then(primeiroElemento) //then obten o valor da promessa usando o conceito de callback
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)//recebe a função, passa o valor obtido do promise para afunção