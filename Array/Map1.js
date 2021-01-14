// afunção map, permite alterar o conteudo do array criando uma copia, mas não altera o comprimentro do array
const  nums = [1, 2, 3, 4, 5 ]

//for com proposito
let resultado = nums.map(function(elemnto){
    return 2 * elemnto
})

console.log(resultado, nums);
const soma10 = elemnto => elemnto + 10 
const triplo = elemnto => 3 * elemnto
const paraDinheiro = elemnto => `R$ ${parseFloat(elemnto).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
