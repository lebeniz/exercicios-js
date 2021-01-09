const obj = {};
console.log(obj);

//object em js
console.log(typeof Object, new Object);

const obj2 = new Object;
console.log(obj2);

// função construtora
function produto(nome, preco, desc){
        this.nome = nome,
        this.precoComDesconto = () => {
            return preco * (1 - desc)
        }
}

const p1 = new produto('lapis', 0.90, 0.10);
const p2 = new produto('borracha', 2.50, 0.10);

console.log(p1.nome, p1.precoComDesconto());
p1.nome = 'caneta';
p1.preco = 1.50;
console.log(p1.nome, p1.precoComDesconto(),'\n');

console.log(p2.nome, p2.precoComDesconto());
p2.nome = 'apontador';
p2.preco = 1.50;
console.log(p2.nome, p2.precoComDesconto());

// função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas) 
        }
    }
}

f1 = criarFuncionario('João', 1100, 6);
console.log('\n',f1.nome,f1.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);
console.log('\n\n');

//uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);