//Cadeia de protótipeos (prototype chain)
Object.prototype = 'Objeto pai'//literal mente objeto pai, todos os objeto tem como ultimo pai esse objeto
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B', atributo3: '3'}
const filho = {__proto__:pai, atributo3: 'C'}

console.log(filho.atributo1, filho.atributo2, filho.atributo3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax:340//shadowing é um sobreposição em relação ao velMax do prototype
}

const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`//super secomporta parecido com o this, mas para prototype
        //super.status (chama o metodo do prototype) 
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);

console.log(volvo.status());
console.log(ferrari.status());

ferrari.acelerarMais(100)
volvo.acelerarMais(150)
console.log(volvo.status());
console.log(ferrari.status(),'\n');

ferrari.acelerarMais(200)
volvo.acelerarMais(150)
console.log(volvo.status());
console.log(ferrari.status());
