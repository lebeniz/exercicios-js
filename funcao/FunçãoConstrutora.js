//função construtora
function carro( velocidadeMaxima = 200, delta = 5){
    //atributo interno a função
    let velocidadeAtual = 0; 

    //metodo publico
    this.acelerar = function(){//this e reponsavel podeixa a varial publica fora do escopo
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta; 
        }else{
            velocidadeAtual = velocidadeMaxima;
        }

    }
    
    //metodo publico
    this.getvelocidadeAtual =function(){
        return velocidadeAtual;
    }
}

const uno = new carro;
uno.acelerar();
console.log(uno.getvelocidadeAtual());

console.log('\n');
const ferrari = new carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getvelocidadeAtual());

ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getvelocidadeAtual());

console.log('\n');
console.log(typeof carro);
console.log(typeof ferrari);


