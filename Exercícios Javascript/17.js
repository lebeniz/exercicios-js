/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/
function somarNumeros(array){
    let somatoria = 0;
    for(i =0; i< array.length; i++){
        somatoria += array[i];
    }
    return somatoria;
}

console.log(somarNumeros([5,10,15,20,25,30,35,40,45,50]));