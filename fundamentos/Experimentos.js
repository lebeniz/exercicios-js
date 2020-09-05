// tenha conciencia do runtime, ou seja, tenha conciencia aonde vc está progamando
// com js, se é no browser ou no node, pois eles tem peculiaridades diferentes
// e fuja de scopo global, não faça variaveis global, apenas se for constante
let a = 3;
console.log(this.a);
console.log(global.a);
console.log(module.exports === this);

console.log('\n');
this.b = 3;
this.c = 'casa';
this.d = true;
//this é equivalente a module.exports
console.log(module.exports);

caju = 35;// não faça isso
/* ao declarar um variavel sem seu tipo
 * automaticamente ela vai para o objeto 
 * global
 */ 
console.log('\n');
console.log(global.caju);