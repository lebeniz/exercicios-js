console.log(typeof Array, typeof new Array, typeof []);
let aprovado = new Array('Ana', 'Pedro', 'Bia');
console.log(aprovado[0]);
console.log(aprovado[1]);
console.log(aprovado[2]);
console.log(aprovado[3]);

aprovado[3] = 'Carlos'
aprovado.push('Abia');

console.log(aprovado.length);
aprovado[9] = 'Rafael'
console.log(aprovado.length);
console.log(aprovado[8]===undefined);
console.log(aprovado);
aprovado.sort()
console.log(aprovado);
delete aprovado[1];
console.log(aprovado[1]);

aprovado = ['Bia', 'Carlos', 'Ana'];
aprovado.splice(1, 1) //apartir de carlos, incluindo carlos, apagaum elemento, no caso carlos
//aprovado.splice(1, 2) já aqui, excluiria carlos e Ana
//aprovado.splice(2, 1)já aqui, excluiria apenas Ana

console.log('\n',aprovado);
aprovado.splice(1, 0, 'Elemento1', 'Elemento2')//apartir do indice um, excluindo 0 elementos, add novos elementos
console.log('\n',aprovado);
