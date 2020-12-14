/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/

function retornaInverço(a){
    console.log(typeof a);
    let b = 3
    if(typeof a === typeof b){
        return a*(-1)
    }else if(a === true){
        return !a
    }else{
       return console.log("booleano ou número esperados, mas o parâmetro é dotipo", typeof a)
    }
    
}

console.log(retornaInverço(true), '\n');

console.log(retornaInverço(-1), '\n');

console.log(retornaInverço("mesa"), '\n');

console.log(retornaInverço('casa'), '\n');
