const carrinho = [
    '{  "nome": "Borracha", "preco": 3.45}',
    '{  "nome": "Caderno", "preco": 1.90}',
    '{  "nome": "Kit de lapis", "preco": 41.22}',
    '{  "nome": "Caneta", "preco": 7.50}'
]
//retornar array apenas com o preço
const paraObjeto = json => JSON.parse(json)
const apenasPrco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPrco)
console.log(resultado);