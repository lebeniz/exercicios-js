/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repetir(codigo, VezesRepetida){
    let vetor = []
    for(i = 0; i < VezesRepetida; i++){
        vetor[i] = codigo;
    }
    return vetor;
}

console.log(repetir('a', 2),'\n');

console.log(repetir(5, 7),'\n');

