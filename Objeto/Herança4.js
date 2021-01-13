function MeuObjeto(){}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

console.log(obj1.__proto__===obj2.__proto__);
console.log(obj1.__proto__===MeuObjeto.prototype);

MeuObjeto.prototype.nome = "Anonimo";
MeuObjeto.prototype.falar = function(){
    console.log(`Boa Noite! Meu nome é ${this.nome}`)
}

obj2.falar('Bruno')
obj2.nome = 'Bruno';
obj2.falar()

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;//mudou a referecia do pai, que ante apontava para Object.prototype
obj3.falar();
