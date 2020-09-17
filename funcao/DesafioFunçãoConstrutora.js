//função construtora
function pessoa(nome) {
    this.nome = nome// this é o objeto global
//se eu quiser eu posso acessar o this.nome fora desse escopo
    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new pessoa('Bruno');
p1.falar();