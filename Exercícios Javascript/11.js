/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
*/

function receberPrimeiroEUltimoElemento(a){
    console.log(a.length);
    let vetor = [];
    vetor[0] = a[0];
    vetor[1] = a[a.length-1]
    return vetor
}

console.log(receberPrimeiroEUltimoElemento(['casa', 2, 5, 90, 455]));    
