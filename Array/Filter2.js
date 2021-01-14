Array.prototype.filter2 = function(callback){ // associo a função ao prototype para ela existir no mundo do array
    const newArray = [] 
    for(let i=0; i< this.length; i++){// percorre o array chamando a função e add se der verdadeiro
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true}, 
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]



const caro = p => p.preco >= 500;
const fragil = p => p.fragil //fragil já e definido como true ou false, então e so usar o valor
console.log(produtos.filter2(caro).filter2(fragil))