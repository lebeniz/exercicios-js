/*
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
*/ 

function checarAnoBissexto(numero){
    if(numero % 4 == 0 && numero % 100 != 0 ){
        console.log( 'Ano bissexto!');
    }else if(numero % 400 == 0){
        console.log('Ano bissexto!');
    }else{
        console.log('Ano normal de 365');
    }
}

checarAnoBissexto(2020);
checarAnoBissexto(2200);
checarAnoBissexto(2021);
checarAnoBissexto(2540);