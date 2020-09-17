//função em js é First-Class object (citigens)
//higher-oder function

//criar de forma literal
function fun1() {};

//Armazenar em uma variavel
const fun2 = function () {};

//Armazenar em um array
const array = [function (a, b){return (a + b)}, fun1, fun2];
console.log(array[0](2, 2));

//armazeando em um atributo de objeto
const obj = {};
obj.palavra = function (){return 'Opa'};
console.log(obj.palavra());

function run(fun){
    fun();
}

run(function (){return console.log('Executando...')});

//uma função pode retornar/conter uma função
function soma(a, b){
    return function soma_mais(c){
        console.log(a + b + c);
    }
}

soma(2, 3)(10);