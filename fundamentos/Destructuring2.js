const [casa] = [ 11];
console.log(casa);

const [ , n1, , n3, , n5, n6 = 0 ] = ['a', 'b' ,'f','h','j'];
/*  n0 que não aparece, extrai o 'a', 
 *  n1 extrai o 'b', 
 *  n2 que não aparece, extrai o 'f', 
 *  n3 extrai o 'h', 
 *  n4 que não aparece, extrai o 'j', 
 *  n5 extrai o 'undefined', 
 *  n6 extrairia undefine, porem foi atribuido 0 a n6', 
 */ 

console.log(n1, n3, n5, n6);

//extrair um vaolor de um Array de dentro de outro Array
const [ ,[ ,teste]] = [[21, 23,56], [15,16,9], [0,1]];
/*estrai de dentro do segundo array na segunda posição */

console.log(teste);