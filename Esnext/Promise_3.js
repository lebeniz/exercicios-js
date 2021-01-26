const { resolve } = require("path")

const gerarNumerosEntre = (min, max) => {
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise((resolve) =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 10)
    .then(num => num * 10)//num e o resultado da primera chamada de gerar numero
    .then(numX10 => `O numero gerado foi ${numX10}`)//o texto é um teceiro resultado adquirido do desse segundo then
    .then(console.log)//imprimi o resultado passando o valor para o btido desse 3° then para console.log()