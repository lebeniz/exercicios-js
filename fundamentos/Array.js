const valores = [2, 4, 6, 'casa', 3.1415];
console.log(valores[0], valores[3], valores[4].toFixed(2));

console.log(valores[6]);

valores[10] = true;
console.log(valores);

valores[6] = -333;
console.log(valores);

console.log(valores.length);//mostra quantos valores tem o array

valores.push({casa: 104}, false, null, NaN, 'zé');//insere a partir da ultima posição
console.log(valores);

console.log(valores.length);//mostra quantos valores tem o array

console.log(typeof valores);//em JS o array é um obect
console.log(typeof valores[0]);
console.log(typeof valores[12]);
console.log(typeof valores[14]);

console.log(valores.pop())// retira o elemento do top

delete valores[0];//deleta valor no indice especifico

console.log(valores);


