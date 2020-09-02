let numero = 1
{
    let numero = 2// usando let, o valor atribuido a numero, so é visivel nesse bloco
    console.log('dentro =', numero);
}
console.log('fora =', numero);
//outro caso
let teste = 1
{
    let teste2 = 2
    console.log('dentro =', teste);//na hora de imprimir ele busca o valor que esta mais proximo, que o escopo externo
}
console.log('fora =', teste);

//Obs. variaveis definida com a palavra resevada var: tem escopo global e tem escopo de função
//Obs. variaveis definida com a palavra resevada le: tem escopo global , tem escopo de função e escopo de bloco
