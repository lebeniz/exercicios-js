/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function filtrarNumeros( array){
    let a = 1;
    let aux = [];
    let j = 0;
    for(i= 0; i < array.length; i++){
        if(typeof a === typeof array[i]){
            aux[j] =  array[i]
            j++;
        }
    }
    return aux;
}

console.log(filtrarNumeros(['a', 3, '5',7,9,'',"13"]));

console.log(filtrarNumeros(['a', '5','',"13"]));