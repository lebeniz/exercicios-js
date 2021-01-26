const { rejects } = require("assert")

const gerarNumerosEntre = (min, max, numerosProibidos) => {
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero repetido :(')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill() ){//.fill() gera valores undefined, no caso, 10 valores undefined
           numeros.push(await gerarNumerosEntre(1, 60, numeros))//await sempre vai colado na função que retorna promise
        }
        return numeros

    }catch(err){
        if(tentativas > 100){
            throw 'Não deu certo!!!'
        }else{
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}
gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)
/*
gerarNumerosEntre(1, 5,[1, 2, 4])
    .then(console.log)
    .catch(console.log)
    */