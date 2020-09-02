//Armazenando uma função em uma variavel
const ImprimeSoma = function (a, b){
    console.log(a + b);
}

ImprimeSoma(2, 3);

//Armazenando um função Arraow em uma variavel
const Soma = (a, b) =>{
    return a + b;
}
console.log(Soma(2, 3));

//função reduzida com retorno(retorno implicito)
const Subtração = (a, b) => a - b;//função de uma unica linha que retorna algo
console.log(Subtração(2, 3));

const imprime = x => console.log(x);//função que recebe x e manda iprimir conteudo dentro de x
imprime('casa');
