//arguments é um array interno de função que quando a função
// não tem parametro definido, o argument guarda od valores

function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1,3,7,6,9));
console.log(soma('casa', 3, 'rua', 69));