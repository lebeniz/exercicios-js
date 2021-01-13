class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{// pai tem como prototipo o avo
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)//chama o construtor de avo para setar o this.sobrenome
        this.profissao = profissao
    }
}
class Filho extends Pai {
    constructor(){
        super('Silver')//emvia o parametro chamando a função contrutora para sobrenome
    }
}

const filho = new Filho
console.log(filho);