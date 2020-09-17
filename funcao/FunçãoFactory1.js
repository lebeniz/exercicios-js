//função factory

//forma normal
const prod1 = {
    nome: '...',
    valor: 45
}

const prod2 = {
    nome: '...',
    valor: 123
}

//factory simples
function criarpessoa(){
    return {
        nome: 'ana',
        idade: 20
    }
}

//factory é uma função que no final ela retorna um objeto

console.log(criarpessoa());
console.log(criarpessoa().nome);
