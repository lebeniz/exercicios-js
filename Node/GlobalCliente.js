//tenha muito cuidado ao trabalhar com objeto global
require('./Global')

console.log(MinhaApp.sladacao());

//objeto global está usando a propriedade freeze
MinhaApp.nome = 'Eita!'//não é permitido alteração
console.log(MinhaApp.nome);