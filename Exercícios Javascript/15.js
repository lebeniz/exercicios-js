/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

function receberSomenteOsParesDeIndicesPares(array){
    let aux = [];
    let j = 0;
    for(let i=0; i < array.length; i++){
        if(i % 2 == 0 && array[i] % 2 == 0){
            aux[j] = array[i];
            j++;
        }
    }
    return aux;
}

console.log(receberSomenteOsParesDeIndicesPares([2,4,6,5,8,10,12,7,20,22,70]));