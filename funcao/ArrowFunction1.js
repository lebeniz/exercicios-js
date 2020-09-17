let dobro = function (a){
    return 2 * a;
}

console.log(dobro(15));

dobro = (a) => {// função arrow é sempre um função anonima
    //para chamar um função arrow depois, é preciso armazenala em uma constate
    return 2 * a;  
}

dobro = a => 2 * a;//função arrow com um parametro e retorno implicito

console.log(dobro(Math.PI));

/*let ola = function (){
    return 'Olá';
}*/

ola = () => 'Olá';

console.log(ola());