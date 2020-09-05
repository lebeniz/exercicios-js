// na função arrow, quando usada sem chave, o return é implicito

const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado';//operador Ternário

console.log(resultado(6.9));
console.log('\n');
console.log(resultado(7.1));