const escola = 'Cod3r';
console.log(escola.charAt(4));//retorna o caracter na posição 4
console.log(escola.charAt(5));//não da erro, mas aparece um espaço vazio
console.log(escola.charCodeAt(3));

console.log(escola.indexOf('C'));// retorna a posição do caracter passado como parametro
// e -1 se não encontrar

console.log(escola.substring(1));//imprime da posição 1 a diante
console.log(escola.substring(0, 3));//imprime da posição 0 até a posição 2 sem incluir a posição 3

console.log('Escola '.concat(escola).concat('!'));/*concatenar ou seja juntar 
* o conteudo da estring literal com o connteudo 
* da variavel escola mais o acressimo do sibolo*/
// literal é um dado que não foi armazenado em um variavel
console.log('Escola ' + escola + '!');// outra forma de concatenar

console.log(escola.replace(3, 'e'));//substitui um caracter por outro

console.log('bruno,casa,nave,caju'.split(','));//coloca os caracter em um array separando por virgula
