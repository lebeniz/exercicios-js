function getpreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const prod = {
    nome: 'not',
    preco: 565,
    desc: 0.15,
    getpreco
}

console.log(prod.getpreco());

//outra forma
const carro = {preco: 78988, desc: 0.20}
console.log(getpreco.call(carro));
console.log(getpreco.apply(carro));

console.log('\n');
console.log(getpreco.call(carro, 0.12, '$'));
console.log(getpreco.apply(carro,[0.12, '$']));

