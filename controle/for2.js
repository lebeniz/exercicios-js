//for/in
const nota = [2.3, 6.3, 8.9, 4.5]

for(let i in nota){//o for in, trabalha com o indcice e não com o atributo
    console.log(i);
}

const obj = {
    nome: 'ana',
    idade: 10,
    altura: 1.5,
    peso: 39,
}

console.log('\n');

// sempre use o let para que a variavel fique sempre dentro do escopo da função
for(let indice_obj in obj){
    console.log(indice_obj);
}

/*
console.log('\n');
for( indice_obj in obj){
    console.log(indice_obj);
}
console.log(indice_obj);
*/