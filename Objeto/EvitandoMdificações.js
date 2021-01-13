// Object.preventExtensions
const produto = Object.preventExtensions({//serve parqa limitar as alteraçoes em um objeto
    nome:'banana', preco: 2.50, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto));//testa para ver se o objeto foi criado com a função acima ou não

produto.nome = 'lapis';
produto.descricao = 'lapis de cor'
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = {nome:'maria', idade:35} 
Object.seal(pessoa)//sela o objeto, podendo assim mexer somente no conteudo e não nas variaveis
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = "santos";
delete pessoa.nome;
pessoa.idade = 25;
console.log(pessoa);

// Objeect.freeze  = selado + valores constates