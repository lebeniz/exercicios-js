// caso 0)
console.log('01)', '1' == 1); // ('1' é igual a 1)leva em consideração apenas o valor
console.log('02)', '1' === 1);// ('1' é estritamente igual a 1)leva tudo em consideração

console.log('\n03)', '3' != 3);//!= diferente
console.log('04)', '3' !== 3);// !== estritamente diferente

console.log('\n05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);// data referente ao marco zero da internet de 1970
const d2 = new Date(0);// que é = a 0

console.log('\n09)', d1 == d2); // neste caso não faz diferença usa dois ou tres igual (=)
console.log('10)', d1 === d2);  // por que esta comparando endereço de memoria
                                // logo, da falso

console.log('\n11)', d1.getTime() == d2.getTime());// nos dois caso da verdadeiro por que
console.log('12)', d1.getTime() === d2.getTime());//  está se tratando de numeros iguais

console.log('\n13)', undefined == null);
console.log('\n14)', undefined === null);

//considerações finais: via de regra, usa sempre o estritamente igual(===) o diferente(!==)
// para evitar confudir as variaveis com valor igual e os tipos diferente e etc... 

