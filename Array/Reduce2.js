const alunos = [
    {nome:'João', nota: 7.3, bolsista: false },
    {nome:'Maria', nota: 9.2, bolsista: true },
    {nome:'Pedro', nota: 9.8, bolsista: false },
    {nome:'Ana', nota: 8.7, bolsista: true }      
] 

//Desafio 1: Todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //resultado é o acumulado de true da  função reduce que será chamada
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

//Desafio 2: Alguns alunos são bolsistas
const algunsBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunsBolsistas));
