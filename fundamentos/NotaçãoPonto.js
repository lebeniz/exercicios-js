console.log(typeof console);
console.log(Math.floor(6.1));//arredonda para baixo(Math.floor)
console.log(Math.ceil(6.1));//arredonda para cima(Math.ciel)

const obj = {};
//duas forma de addcionar natributo ao objeto
obj.nome1 = 'bola1';// foma 1
obj['nome2'] = 'bola2';// forma 2
console.log(obj);

console.log(obj['nome1']);
console.log(obj.nome2);

//
console.log(typeof this);
function oobejeto(conteudo){
    this.nome = conteudo;// atribui o conteudo a nome 
    this.exec = function(){// atribui função a exec, logo .exec é um função
        console.log('Exec...');
    }
}

const obj1 = new oobejeto('\ncadeira');//cria um object atravez da função obejeto e atribui uma string a variavel nome
const obj2 = new oobejeto();

console.log(obj1.nome);
obj2.exec();//como  chamar uma função (variave () )

