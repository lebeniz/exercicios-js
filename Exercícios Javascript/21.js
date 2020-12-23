/*
Criar uma função que receba um array de números e retorne o menor número desse array.
*/

function  menorNumero(array){
    let menor = array[0];
    for(i = 0; i < array.length; i++){
        if(menor > array[i]){
            menor = array[i]
        }
    }
    return menor;
}

console.log(menorNumero([10, 5, 35, 65]));