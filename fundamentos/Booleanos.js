let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);// negue duas vezes para fazer a linguagem reconhcer o numero um como verdadeiro
// !! isso converte qualque valor o caracter para verdadeiro ou falso

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');//obs. existe um espaço vazio, se não houvece o espaço, seria falso
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = 33));//atribuição, neste caso, pega o valor que esta sendo atribuido

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);//NaN = not a number
console.log(!!undefined);
console.log(!!(isAtivo = 0));

console.log('para finalizar...');
console.log(!!('' || null || 0 || 3 || 'casa')); //retorna verdadeiro

console.log(('' || null || 0 || 3 || 'casa'));//retorna o priemiro valor verdadeiro que ele encontrou

//exemplo de como usar o tipo booleano

let nome = '';
console.log(nome || 'Desconhecido');//se o nome foi prenchido print, se não, print desconhecido

nome = '\nbruno';
console.log(nome || 'Desconhecido');



