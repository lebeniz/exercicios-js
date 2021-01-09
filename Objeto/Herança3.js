const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)//cria objeto filha com pai sendo seu prototype
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Maria', writable: false, enumerable: true}
})

filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let i in filha2){
    console.log(i);
}

for(let i in filha2){
    filha2.hasOwnProperty(i) ? console.log(i) :console.log(`Por herança: ${i}`);//pega cada chave e testa para ver se é dela o do pai
}