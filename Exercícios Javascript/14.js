/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/

function objetoParaArray(obejeto){
    let aux = [];
    let aux1 = [];
    let aux2 = [];
    let array =[];
    let j = 0
    for(let i in obejeto){
        aux[j] = i;
        j++;
    }
    aux1[0] = aux[0];
    aux1[1] = obejeto.nome;
    aux2[0] = aux[1];
    aux2[1] = obejeto.profissao;    
    array[0] =aux1;
    array[1] = aux2;

    //console.log(Object.keys(obejeto))
 
    return array;
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })) ;