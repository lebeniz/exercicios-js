/*
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

function contarPalavras(string){
    let aux;
    aux = string.split(' ')
    console.log(aux.length);
}

contarPalavras("Sou uma frase");
contarPalavras("Me divirto aprendendo a programar");