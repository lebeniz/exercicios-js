const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true}, 
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2400
}));

console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil == true
}));

const caro = p => p.preco >= 500;
const fragil = p => p.fragil //fragil já e definido como true ou false, então e so usar o valor
console.log(produtos.filter(caro).filter(fragil))