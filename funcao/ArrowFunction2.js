function pessoa(){
    this.idade = 0;

    setInterval(() => {//dispara uma outra função a partir de um determinado intervalo
        this.idade++;//dentro da função arrow o this não varia e aponta para o obj pessoa
        console.log(this.idade);
    }, 500)//intervalo em mile segundos
}

new pessoa;//new serve para criar um novo objeto
