const nota = [7.7, 6.8, 2.6, 9, 6.1, 4, 5.6, 10, 0];

//sem callback, callbakc é um codico que observa de forma inteligente e despara a função
const notaBaixa1 = [];
    for(let i in nota){
        if(nota[i] < 7){
            notaBaixa1.push(nota[i])
        }
    }
console.log(notaBaixa1);

//com callback
console.log('\n');
const notaBaixa2 = nota.filter(function (nota){
    return nota < 7;
})
console.log(notaBaixa2);

// ou
console.log('\n');
const notaBaixa3 = nota.filter( nota => nota < 7);
console.log(notaBaixa3);
