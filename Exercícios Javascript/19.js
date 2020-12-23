/*
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
*/

function calcularMedia(array){
    let somatoria = 0;
    for (i = 0; i < array.length; i++){
        somatoria += array[i];
    }

    return somatoria / array.length;
}

console.log(calcularMedia([0, 10]));

console.log(calcularMedia([0, 10, 20, 30, 40 ,50]));