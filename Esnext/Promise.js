function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(frase) //so aceita um parametro
        }, segundos * 1000);
    })
}

falarDepoisDe(3 , 'legal')
    .then(frase => frase.concat('?!?'))//função encadea os resultado
    .then(outraFrase => console.log(outraFrase))//função do promise
    .catch(e => console.log(e))// sempre que acpntecer erro, sera direcionado para essa função para tratar o erro