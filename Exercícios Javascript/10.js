/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

function palavra(codigo){
    let SomaString = ''

    for(i=0; i < codigo; i++){
        SomaString += '+'
    }
    return SomaString;
}

console.log('"'+ palavra(2) +'"', '\n');

console.log('"'+ palavra(9) +'"', '\n');
