//formas de declarar função


console.log(soma(3,5));//pq isso fnciona?
//funciona pq o interpretador carraga todas as funções antes de executar o codico 
//isso so acontece no tipo de declaração (function declaration)

//function declaration
function soma(x, y){
    return x + y;
}
 
//console.log(sub(3,5)); ja nesse caso da erro por causa do tipo de declaração
//function expression
const sub = function (x, y){
    return x - y;
}

//named function expression
const mult = function mult (x, y){
    return x * y;
}