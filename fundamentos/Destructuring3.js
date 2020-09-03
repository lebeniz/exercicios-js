//destructuring objec {Nome_da_Variavel = valor, Nome_da_Variavel = valor,}
function rand ({min = 0, max = 1000}){//recebe o objeto ja desestruturando (min e max)
    // ou seja, extrai min e max do objeto
    //{min = 0, max = 1000} Isso tabem é um parametro padrão
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

/* poderia ser assim, de forma mais estença
 * cont obj = {min: 3, max: 21}
 * console.log(rand(obj));
 */

console.log(rand({min: 3, max: 21}));

//outra forma, seria passar so um valor
// e a outra variavel assumir um valor padrão
console.log(rand({min: 50}));

//outra forma, seria passarum object vazio
console.log(rand({}));/*neste caso, o min assumi
 o valor padrão de 0
  e max assumi o valor padrão  de 1000*/

console.log((Math.random() * 10).toFixed(0));//gera numero aleatorio de 0 a 10

