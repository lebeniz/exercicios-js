console.log(module.exports === this);//this e export é apenas uma referencia para o objeto module.exports
console.log(module.exports === exports);
this.a = 1
exports.b = 2
module.exports.c = 3
exports = null
console.log(module.exports);//quem retorna os valore de todos os objeto globais é module.exports
// e retorna apenas os atributos de export e this

//exemplo
exports = {
    nome:'Bruno'
}
console.log(module.exports);
module.exports = {publico: true}//sempre que for exportar um objeto , usa-se module.exports