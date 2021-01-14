const alunos = [
    {nome:'João', nota: 7.3, bolsista: false },
    {nome:'Maria', nota: 9.2, bolsista: true },
    {nome:'Pedro', nota: 9.8, bolsista: false },
    {nome:'Ana', nota: 8.7, bolsista: true }      
]
console.log(alunos.map(a => a.nota),'\n');//pecorre o array e recebe os dois primeiro indici na callback, o primeiro é o acumulador
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
}/*,0 */) // isso seria o valor inicial em vez de pegar o elemento do indice 0

console.log('\n', resultado);