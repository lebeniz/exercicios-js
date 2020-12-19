/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/

function objetoParaArray(obejeto){
    let array =[];
    let aux1 = [];
    let aux2 = [];
    //console.log(Object.keys(obejeto))
    aux1[0] = Object.getOwnPropertyNames(obejeto)
    aux1[1] = obejeto.nome
    array[0] = aux1;
    return array;
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })) ;