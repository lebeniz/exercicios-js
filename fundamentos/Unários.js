let num1 = 1;
let num2 = 2;

num1++
console.log(num1); 
--num1;
console.log(num1); 

console.log(++num1 === num2--);// da verdadeiro, poi, num2 sofre decrecimo depois do print
console.log(num1 === num2);// da falso, poi, num2 agora vale 1 e num1 vale 2

console.log('\n');
console.log('num1 =', num1,'\nnum2 =', num2);