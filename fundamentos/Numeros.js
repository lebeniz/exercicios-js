const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 5.698;
const avaliacao2 = 7.232;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2));//serve para diminuir ponto flutuante
console.log(media.toString());//mostra o numero completo
console.log(media.toString(2));// converte em binario
console.log(typeof media);
console.log(typeof Number);// Number é uma função resevada




