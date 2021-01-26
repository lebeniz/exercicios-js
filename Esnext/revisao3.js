//ES8: Object.values / Object.entries
const obj = {a:1, b:2, c:3, d:4}
console.log(Object.values(obj),'\n');
console.log(Object.entries(obj));

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome, 
    ola () {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola());

//class
class animal {}
class cachorro extends animal{
    falar() {
        return 'au au!'
    }
}
console.log(new cachorro().falar());
