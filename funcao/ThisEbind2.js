//conflito com this, 3 formas de resolver

// Primeira
// atribuindo o valor de this para outra variavel
function pessoa() {
    this.idade = 0;
    console.log('Naceu')
    const qualquerCoisa = this;
    setInterval(function () {//dispara uma outra função a partir de um determinado intervalo
        thqualquerCoisais.idade++;
        console.log(qualquerCoisa.idade + ' Ano de idade');
    }, 1000)//intervalo em mile segundos
}

// Segunda
// fazendo com que o this da função seja igual ao objeto pessoa
function pessoa() {
    this.idade = 0;
    console.log('Naceu')
    setInterval(function () {//dispara uma outra função a partir de um determinado intervalo
        this.idade++;
        console.log(this.idade + ' Ano de idade');
    }.bind(this), 1000)//intervalo em mile segundos
    //nesse caso this é igual a pessoa, então passo this, pois é a unica forma de referecia o obj pessoa

}
function pessoa() {
    this.idade = 0;
    console.log('Naceu')
    // const qualquerCoisa = this;
    setInterval(() => {//dispara uma outra função a partir de um determinado intervalo
        this.idade++;
        console.log(this.idade + ' Ano de idade');
    }/*.bind(this)*/, 1000)//intervalo em mile segundos
    //nesse caso this é igual a pessoa, então passo this, pois é a unica forma de referecia o obj pessoa

}

new pessoa;