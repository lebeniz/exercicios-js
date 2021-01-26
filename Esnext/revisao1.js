//let e const
{
var a = 3
let b =2
console.log(b);//let tem escopo de bloco, logo ela so será vista dentro desse bloca, diferente de var
}
console.log(a);

//template string
const produto = 'ipad'
console.log(`${produto}
é caro!`);

//destructuring
const [l, e, ...tras] = 'cod3r'
console.log(l, e, ...tras);
const [x, , y] = [1,2,3] 
console.log(x, y);

const {idade: i, nome} = {nome: 'Ana', idade: 9}//{idade: i }forma de renomear
console.log(idade, nome);