const funcionarOuNao = (valor, chanceErro) => new Promise((resolve, reject) => {
    const resultadoRandom = Math.random()
    console.log(resultadoRandom.toFixed(2),'\n');
    try{
        con.log('temp')
        if(resultadoRandom < chanceErro){//(Math.random() gerar por padrão numeros entre 0 e 1
            reject('Ocorreu um erro!!')
        }else{
            resolve(valor)
        }   
    }catch(e){
        reject(e)
    }
})

funcionarOuNao('Testando...', 0.5)//sempre que der abaixo de 0.50, dará error no programa
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp. ${err}`)//esse tratamento de erro é executado pois esta definido antes do catch
    )                                         //porém, o catch não será executado
    .then(()=> console.log('Quase fim!'))
    .catch(erro => console.log(erro))//função para tratar err, caso não usar essa f unção, aparecerá a mensagen de erro do node
    .then(()=> console.log('Fim!!'))