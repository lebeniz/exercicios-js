const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){//percorre o array através dos elementos e indice é passado sempre como primeiro parametro
    console.log(`${indice + 1}) ${nome}`);//o terceiro é o proprio array
})

aprovados.forEach(nome => console.log(nome))

console.log('\n');
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)