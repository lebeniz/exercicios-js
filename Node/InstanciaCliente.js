//node por padrão faz dos objetos retornados a partir do require(), então, o que se faz em contadorA faz em B 

const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

//nesse segundo caso, esta criando um novo objeto deferente  a partir da factory
const contadorC = require('./InstanciaNova')()//estou acessanda a função que esta sendo retornada
const contadorD =require('./InstanciaNova')()

//teste
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor);

contadorB.inc()
console.log(contadorA.valor,'\n');

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor);