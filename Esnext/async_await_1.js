const { resolve } = require("path");

const esperandoPor = (tempo = 2000) => new Promise((resolve)=> {
    setTimeout(() => {
        //console.log('Executando Promise...');
        resolve()
    }, tempo);
})
/*
esperandoPor()
    .then(esperandoPor)
    .then(esperandoPor)
*/

const retornarValor = () => new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
})

async function executar() {
    let valor= await retornarValor()
    
    await esperandoPor(1500)// executa as duas linha e so depois vai para a proxima linha, seria diferente se fosse
    console.log(`Async/Await ${valor}...`);//sem await, ele executaria tude uma so vez

    await esperandoPor(1500)// a mesma coisa, espera e depois printa
    console.log(`Async/Await ${valor + 1}...`);

    await esperandoPor(1500)
    console.log(`Async/Await ${valor + 2}...`);

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor);
}

executarDeVerdade()
executar().then(console.log)// forma correta
//const v = executar()
//console.log(v); isso não funciona, pois, a promise espera o tempo determidado, para deppois executar
// enquanto que as duas linhas acima é executado imediatamente
