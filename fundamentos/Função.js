// Função sem retorno
function ImprimeSoma(a, b){
    console.log(a + b);
}


let a =2, b=3;
ImprimeSoma(a, b);

ImprimeSoma(5, b);
ImprimeSoma(5);//aqui soma o numero 5 com undefined, dando assim NaN
ImprimeSoma(5, 2, 6, 5, 4);//soma apenas o dois referente a posição
ImprimeSoma();

//Função para retorno
function Soma(a, b = 0){// ao atribuir 0 a variavel b, esta dizendo que por padrão b vale 0 quando não for passado por parametro o valor de b
    return(a + b);
}
console.log(Soma(12, 26));
console.log(Soma(12));// neste caso o resultado da 12, pois, vai valer 0


