/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function MultiplicacaoSemOperador(a, b){
    let somatoria = 0;
    for(i = 0; i < a; i++){
        somatoria += b
    }
    return somatoria;
}

console.log( MultiplicacaoSemOperador(5,5),'\n');

console.log( MultiplicacaoSemOperador(12,5),'\n');

console.log( MultiplicacaoSemOperador(4,3),'\n');

console.log( MultiplicacaoSemOperador(6,1),'\n');