function Aula(nome, AulaID){
    this.nome = nome
    this.AulaID = AulaID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2);

//simulando o Operador new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo/a', 789);
console.log(aula3);