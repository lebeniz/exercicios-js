function pessoa(){
    this.idade = 0;

    const self = this;
    setInterval(function(){//dispara uma outra função a partir de um determinado intervalo
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)//intervalo em mile segundos
}

new pessoa;