Array.prototype.forEach2 = function(callback){
    for(let i = 0; i< this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice){//percorre o array através dos elementos e indice é passado sempre como primeiro parametro
    console.log(`${indice + 1}) ${nome}`);//o terceiro é o proprio array
})