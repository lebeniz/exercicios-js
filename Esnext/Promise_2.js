/*
setTimeout(() => {
    console.log('Executa a callback depois de 2 ms...');
    setTimeout(() => {
        console.log('Executa a callback depois de 2 ms...');
        setTimeout(() => {
            console.log('Executa a callback depois de 2 ms...');
            
        }, 2000);
    }, 2000);
}, 2000);//esta em milesegundos
*/

const esperandoPor = (tempo = 2000) => new Promise((resolve)=> {
    setTimeout(() => {
        console.log('Executando Promise...');
        resolve()
    }, tempo);
})

esperandoPor()
    .then(esperandoPor)
    .then(esperandoPor)