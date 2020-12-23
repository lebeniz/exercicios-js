/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/
 function contarCaractere(caracter, string){
     aux = string.split('');
     let a = 0;
     for(i = 0; i < aux.length; i++){
         if(caracter === aux[i]){
             a++;
         }
     } 
     return a;
 }

 console.log(contarCaractere("r", "A sorte favorece os audazes"));
 console.log(contarCaractere("c", "Conhece-te a ti mesmo"));

 
 