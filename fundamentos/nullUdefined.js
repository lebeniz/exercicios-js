//let é do tipo variavel de fraca typação
let valor;//não inicializada (undefined)
console.log(valor);

valor = null; //iniciado, porem, não aponta para nehum endereço de memoria

console.log(valor);
//console.log(valor.toString()); não pode ler um valor nulo

const produto = {};
console.log(produto);
console.log(produto.nome);
produto.nome = 'camisa';
console.log(produto);

produto.nome = undefined;//evite usar undefined para atribuição
console.log(!!produto.nome);//undefinede é do tipo falso na logica booleana
console.log(produto);
//para zerar a variavel, use delete


