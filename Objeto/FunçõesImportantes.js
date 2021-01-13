const pessoa = {
    nome: 'Rebeca',
    idade:2,
    peso:13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));//retorna um array contendo array de par chave/valor

Object.entries(pessoa).forEach(([chave, valor]) => {
     console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNacimento',{// cria um novo atributo para o obj com especificações
    enumerable: true, //será enumeravel
    writable: false, //não será modificavel
    value: '01/20/2020'
})

pessoa.dataNacimento = '01/20/30'
console.log(pessoa.dataNacimento);
console.log(Object.keys(pessoa));

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

//Object.assing (ECMAScript 2015)
const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
obj.c= 123
console.log(obj);